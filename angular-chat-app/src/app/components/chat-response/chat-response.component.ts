import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatResponse } from '../../models/chat-response.model';

@Component({
  selector: 'app-chat-response',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-response.component.html',
  styleUrls: ['./chat-response.component.css']
})
export class ChatResponseComponent {
  @Input() response: ChatResponse | null = null;
  @Input() isLoading = false;
  @Input() error: string | null = null;
  @Input() timestamp: Date | null = null;

  copyToClipboard(): void {
    if (this.response?.message) {
      navigator.clipboard.writeText(this.response.message).then(() => {
        alert('Response copied to clipboard!');
      });
    }
  }
}
