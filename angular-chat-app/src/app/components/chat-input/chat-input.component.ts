import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  @Input() isLoading = false;
  @Output() onSendMessage = new EventEmitter<string>();
  
  questionText = '';

  sendMessage(): void {
    if (this.questionText.trim() && !this.isLoading) {
      this.onSendMessage.emit(this.questionText.trim());
      this.questionText = '';
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  clearInput(): void {
    this.questionText = '';
  }
}
