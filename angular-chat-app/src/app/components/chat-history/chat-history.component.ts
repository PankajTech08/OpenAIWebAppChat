import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessage } from '../../models/chat-message.model';

@Component({
  selector: 'app-chat-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {
  @Input() messages: ChatMessage[] = [];
  @Output() onClearHistory = new EventEmitter<void>();
  @Output() onCopyMessage = new EventEmitter<ChatMessage>();

  clearHistory(): void {
    if (confirm('Are you sure you want to clear the conversation history?')) {
      this.onClearHistory.emit();
    }
  }

  copyMessage(message: ChatMessage): void {
    const text = `Q: ${message.question}\nA: ${message.response}`;
    navigator.clipboard.writeText(text).then(() => {
      alert('Message copied to clipboard!');
    });
  }
}
