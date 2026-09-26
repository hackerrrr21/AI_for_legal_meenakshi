import { UserProfile } from './user';

/**
 * Common Screen Properties and Navigation Types.
 */
export interface BaseScreenProps {
  onNavigate: (path: string) => void;
  userProfile?: UserProfile;
  onQuickLoadSample?: (sampleId: string) => void;
  [key: string]: any;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}
