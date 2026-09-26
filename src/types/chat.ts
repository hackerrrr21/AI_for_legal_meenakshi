export interface Citation {
  clauseId?: string;
  sectionTitle: string;
  snippet: string;
  relevanceScore?: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
  citations?: Citation[];
  suggestedFollowUps?: string[];
  isVoiceInput?: boolean;
  isStreaming?: boolean;
}
