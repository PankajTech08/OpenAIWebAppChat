export interface ChatMessage {
  id: string;
  question: string;
  response: string;
  timestamp: Date;
  status: 'success' | 'error' | 'pending';
}
