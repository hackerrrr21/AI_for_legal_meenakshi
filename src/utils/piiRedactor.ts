/**
 * Client-Side PII (Personally Identifiable Information) Redaction Engine.
 * Safeguards citizen privacy under the Digital Personal Data Protection Act (DPDP 2023)
 * by masking sensitive personal identifiers BEFORE text is passed to any external LLM.
 */

export interface RedactionResult {
  sanitizedText: string;
  totalRedactions: number;
  redactionDetails: {
    aadhaar: number;
    pan: number;
    bankAccount: number;
    ifsc: number;
    card: number;
    email: number;
    phone: number;
    voterId: number;
    drivingLicense: number;
    passport: number;
  };
}

// Indian Statutory Identifiers
const AADHAAR_REGEX = /\b[2-9]\d{3}\s?\d{4}\s?\d{4}\b/g;
const PAN_REGEX = /\b[A-Z]{5}[0-9]{4}[A-Z]\b/g;
const IFSC_REGEX = /\b[A-Z]{4}0[A-Z0-9]{6}\b/g;
const CARD_REGEX = /\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})\b/g;
const BANK_ACCOUNT_CONTEXT_REGEX = /(?:account|a\/c|acct|beneficiary|savings|current)\s*(?:no\.?|number)?\s*[:#-]?\s*([0-9]{9,18})/gi;
const EMAIL_REGEX = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
const PHONE_REGEX = /(?:\+91[\-\s]?)?[6-9]\d{4}[\-\s]?\d{5}\b/g;
const VOTER_ID_REGEX = /\b[A-Z]{3}[0-9]{7}\b/g;
const DRIVING_LICENSE_REGEX = /\b[A-Z]{2}[-\s]?[0-9]{2}[-\s]?[0-9]{11}\b/gi;
const PASSPORT_REGEX = /\b[A-Z][0-9]{7}\b/g;

/**
 * Scans text and replaces sensitive PII with safe anonymized redaction tags.
 */
export function redactPII(text: string): RedactionResult {
  if (!text || typeof text !== 'string') {
    return {
      sanitizedText: '',
      totalRedactions: 0,
      redactionDetails: { 
        aadhaar: 0, 
        pan: 0, 
        bankAccount: 0, 
        ifsc: 0, 
        card: 0, 
        email: 0, 
        phone: 0,
        voterId: 0,
        drivingLicense: 0,
        passport: 0
      }
    };
  }

  const details = {
    aadhaar: 0,
    pan: 0,
    bankAccount: 0,
    ifsc: 0,
    card: 0,
    email: 0,
    phone: 0,
    voterId: 0,
    drivingLicense: 0,
    passport: 0
  };

  // Algorithmic optimization: Pre-filter checks
  const hasDigits = /\d/.test(text);
  const hasAt = text.includes('@');

  // If text contains neither digits nor @, no statutory PII regex can match
  if (!hasDigits && !hasAt) {
    return {
      sanitizedText: text,
      totalRedactions: 0,
      redactionDetails: details
    };
  }

  let sanitized = text;

  // Only scan email if '@' is present
  if (hasAt) {
    sanitized = sanitized.replace(EMAIL_REGEX, () => {
      details.email++;
      return '[REDACTED_EMAIL]';
    });
  }

  // Only scan numeric-dependent statutory identifiers if digits are present
  if (hasDigits) {
    // 1. Redact Aadhaar
    sanitized = sanitized.replace(AADHAAR_REGEX, () => {
      details.aadhaar++;
      return '[REDACTED_AADHAAR]';
    });

    // 2. Redact PAN
    sanitized = sanitized.replace(PAN_REGEX, () => {
      details.pan++;
      return '[REDACTED_PAN]';
    });

    // 3. Redact IFSC
    sanitized = sanitized.replace(IFSC_REGEX, () => {
      details.ifsc++;
      return '[REDACTED_IFSC]';
    });

    // 4. Redact Credit/Debit Card Numbers
    sanitized = sanitized.replace(CARD_REGEX, () => {
      details.card++;
      return '[REDACTED_PAYMENT_CARD]';
    });

    // 5. Redact Bank Account Numbers in Banking Context
    sanitized = sanitized.replace(BANK_ACCOUNT_CONTEXT_REGEX, (match, accNum) => {
      details.bankAccount++;
      return match.replace(accNum, '[REDACTED_BANK_ACCOUNT]');
    });

    // 6. Redact Phone Numbers
    sanitized = sanitized.replace(PHONE_REGEX, () => {
      details.phone++;
      return '[REDACTED_PHONE]';
    });

    // 7. Redact Voter ID (EPIC)
    sanitized = sanitized.replace(VOTER_ID_REGEX, () => {
      details.voterId++;
      return '[REDACTED_VOTER_ID]';
    });

    // 8. Redact Driving License
    sanitized = sanitized.replace(DRIVING_LICENSE_REGEX, () => {
      details.drivingLicense++;
      return '[REDACTED_DRIVING_LICENSE]';
    });

    // 9. Redact Passport
    sanitized = sanitized.replace(PASSPORT_REGEX, () => {
      details.passport++;
      return '[REDACTED_PASSPORT]';
    });
  }

  const totalRedactions = Object.values(details).reduce((sum, count) => sum + count, 0);

  return {
    sanitizedText: sanitized,
    totalRedactions,
    redactionDetails: details
  };
}
