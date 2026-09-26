export interface SampleDocumentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  comparisonCounterpartId?: string;
}

export const SAMPLE_DOCUMENTS: SampleDocumentItem[] = [
  {
    id: 'sample-lease-standard',
    title: 'Residential Lease Agreement (Balanced Standard)',
    category: 'Real Estate & Tenancy',
    description: 'A standard residential apartment tenancy agreement with balanced 30-day notice and standard security deposit.',
    comparisonCounterpartId: 'sample-lease-harsh',
    content: `RESIDENTIAL LEASE AGREEMENT

This Agreement is made on March 1, 2026, by and between:
LANDLORD: Sterling Properties LLC, having its principal office at 104 Park Avenue, Suite 400.
TENANT: Alex Rivera, residing at Apartment 4B, 820 Oak Street.

1. PREMISES AND TERM
Landlord hereby leases to Tenant the premises located at 820 Oak Street, Apt 4B for an initial term of twelve (12) months, commencing on March 1, 2026 and terminating on February 28, 2027.

2. RENT AND PAYMENT TERMS
Tenant agrees to pay monthly rent in the amount of $2,200.00 (Two Thousand Two Hundred Dollars), payable on or before the 5th day of each calendar month. Payments made after the 5th shall incur a late charge of 3% of the outstanding monthly rent.

3. SECURITY DEPOSIT
Upon signing this Agreement, Tenant shall deposit with Landlord the sum of $2,200.00 as a Security Deposit. The Landlord shall return the full Security Deposit to Tenant within thirty (30) days of vacating the premises, less any documented deductions for extraordinary physical damage exceeding ordinary wear and tear.

4. MAINTENANCE AND REPAIRS
Landlord shall be responsible for maintaining structural walls, roof, electrical wiring, and central plumbing fixtures in good working order. Tenant shall maintain cleanliness and promptly notify Landlord in writing of any defects or leaks.

5. ENTRY BY LANDLORD
Landlord or its authorized agents may enter the premises for inspection or maintenance upon providing at least twenty-four (24) hours prior written notice to Tenant, except in cases of bona fide emergency.

6. TERMINATION AND NOTICE
Either party may terminate this lease at any time following the expiration of six (6) months by providing thirty (30) days advance written notice to the other party without penalty.

7. INDEMNIFICATION AND LIABILITY
Each party shall indemnify, defend, and hold harmless the other party against any direct third-party claims arising solely from its gross negligence or intentional willful misconduct on the premises.

8. GOVERNING LAW
This Agreement shall be construed and governed in accordance with the laws of the local state jurisdiction.`
  },
  {
    id: 'sample-lease-harsh',
    title: 'Residential Lease Agreement (Landlord Revised - High Risk)',
    category: 'Real Estate & Tenancy',
    description: 'A landlord-favored revised draft introducing mandatory 12-month lock-in, unilateral indemnification, and deposit forfeiture.',
    comparisonCounterpartId: 'sample-lease-standard',
    content: `REVISED RESIDENTIAL LEASE AGREEMENT (DRAFT V2)

This Agreement is made on March 5, 2026, by and between Sterling Properties LLC ("Landlord") and Alex Rivera ("Tenant").

1. PREMISES AND STRICT LOCK-IN TERM
Landlord leases to Tenant the premises at 820 Oak Street, Apt 4B for twelve (12) months. Tenant acknowledges that this agreement contains a strict mandatory 12-month lock-in period. If Tenant vacates prior to the completion of 12 months, Tenant shall forfeit the entire Security Deposit and remain liable for all remaining months of rent.

2. RENT AND PENALTIES
Monthly rent is $2,200.00 due on the 1st of each month. Late payments beyond the 2nd day incur a daily late penalty of $50.00 plus 10% monthly interest.

3. SECURITY DEPOSIT AND DEDUCTIONS
Tenant deposits $4,400.00 (two months rent). Landlord reserves sole and absolute discretion to determine painting, refurbishing, and cleaning deductions upon move-out. Deposit return timeline shall be sixty (60) business days.

4. ENTRY AND INSPECTIONS
Landlord reserves the right to enter the premises at any time without advance notice for inspection, showing to prospective buyers, or renovations.

5. UNILATERAL INDEMNIFICATION
Tenant agrees to defend, indemnify, and hold harmless Landlord from any and all claims, damages, liabilities, attorney fees, or losses occurring on the property regardless of cause or fault.

6. DISPUTE RESOLUTION
Any dispute arising under this lease shall be submitted to binding individual arbitration with all filing fees prepaid by Tenant.`
  },
  {
    id: 'sample-freelance',
    title: 'Software Development & Freelance Services Contract',
    category: 'Employment & Labor',
    description: 'Independent contractor agreement with strict IP assignment and post-contract non-compete clause.',
    content: `INDEPENDENT CONTRACTOR & SERVICES AGREEMENT

This Agreement is entered into as of April 10, 2026, between Nexus Tech Solutions Inc. ("Company") and Marcus Chen ("Contractor").

1. SCOPE OF SERVICES
Contractor agrees to perform full-stack web application development and AI prompt engineering as outlined in Statement of Work #1.

2. COMPENSATION AND MILESTONES
Company shall pay Contractor a total fixed fee of $14,500.00 USD, disbursed in three milestone disbursements:
- Milestone 1 (Design & Architecture): $4,500 upon delivery.
- Milestone 2 (Core Functional Engine): $5,000 upon demo approval.
- Milestone 3 (Final Deployment & Testing): $5,000 net 30 days after release.

3. INTELLECTUAL PROPERTY RIGHTS
All inventions, source code, designs, and deliverables created by Contractor under this Agreement shall constitute "Work Made for Hire" and shall be the exclusive property of Company upon creation. Contractor assigns all worldwide copyright and patent rights to Company.

4. RESTRICTIVE COVENANTS AND NON-COMPETE
During the term of this Agreement and for a period of eighteen (18) months following termination, Contractor shall not directly or indirectly develop software, consult, or provide services to any company operating in the enterprise AI or legal technology sector within the United States and Canada.

5. TERMINATION
Company may terminate this Agreement at any time with or without cause upon five (5) business days written notice. Contractor may only terminate for material non-payment upon thirty (30) days notice.

6. INDEMNIFICATION
Contractor agrees to indemnify, defend, and hold harmless Company from any third-party claims alleging infringement of patents, trademarks, or copyrights relating to deliverables.`
  },
  {
    id: 'sample-nda',
    title: 'Mutual Non-Disclosure Agreement (NDA)',
    category: 'Intellectual Property',
    description: 'Standard confidentiality agreement protecting proprietary information and technical discoveries.',
    content: `MUTUAL NON-DISCLOSURE AGREEMENT

This Agreement is made on January 15, 2026, by and between Alpha BioTech Innovations and Zenith Diagnostics Corp.

1. PURPOSE
The parties wish to explore a collaborative evaluation of proprietary diagnostic software algorithms ("Purpose").

2. CONFIDENTIAL INFORMATION
"Confidential Information" refers to any proprietary data, algorithmic source code, trade secrets, clinical trial datasets, or business strategies disclosed by either party in written, oral, or electronic format marked as confidential.

3. EXCLUSIONS FROM CONFIDENTIALITY
Confidential Information does not include information that:
(a) is or becomes publicly known through no breach by Receiving Party;
(b) was already in Receiving Party's possession prior to disclosure;
(c) is independently developed without reference to the Disclosing Party's data;
(d) is rightfully obtained from a third party without restriction.

4. OBLIGATIONS OF RECEIVING PARTY
Receiving Party shall exercise the same degree of care (not less than reasonable care) to protect the confidentiality of the Disclosing Party's information. Information shall be used exclusively for the defined Purpose.

5. DURATION
The obligations of confidentiality shall remain in effect for a period of two (2) years from the date of disclosure.

6. GOVERNING LAW AND INJUNCTIVE RELIEF
The parties acknowledge that unauthorized disclosure causes irreparable harm. Disclosing party is entitled to seek injunctive relief in addition to monetary damages.`
  }
];
