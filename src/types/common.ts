import { UserProfile } from './user';

/**
 * Common Screen Properties and Navigation Types.
 */
export interface BaseScreenProps {
  onNavigate: (path: string) => void;
  userProfile?: UserProfile;
  onQuickLoadSample?: (sampleId: string) => void;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}
