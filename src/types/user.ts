/**
 * User and Authentication Data Models.
 * Provides unified, type-safe interfaces across all screens and services.
 */

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar: string;
  barId?: string;
  organization?: string;
  phone?: string;
  location?: string;
}

export interface AuthCredentials {
  email: string;
  password?: string;
  method: 'email' | 'phone';
  phone?: string;
}

export interface UserSession {
  user: UserProfile;
  token?: string;
  isAuthenticated: boolean;
  lastActive: string;
}
