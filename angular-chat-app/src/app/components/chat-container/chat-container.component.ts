import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat.service';
import { ChatMessage } from '../../models/chat-message.model';
import { ChatResponse } from '../../models/chat-response.model';
import { ChatInputComponent } from '../chat-input/chat-input.component';
import { ChatResponseComponent } from '../chat-response/chat-response.component';
import { ChatHistoryComponent } from '../chat-history/chat-history.component';

@Component({
  selector: 'app-chat-container',
  standalone: true,
  imports: [
    CommonModule,
    ChatInputComponent,
    ChatResponseComponent,
    ChatHistoryComponent
  ],
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {
  messages: ChatMessage[] = [];
  currentResponse: ChatResponse | null = null;
  isLoading = false;
  error: string | null = null;
  lastTimestamp: Date | null = null;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    // Initialize any necessary setup
  }

  onSendMessage(question: string): void {
    this.isLoading = true;
    this.error = null;

    // Create a new message for history
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      question: question,
      response: '',
      timestamp: new Date(),
      status: 'pending'
    };

    // Add to messages but don't show response yet
    const messageIndex = this.messages.length;
    this.messages.push(newMessage);

    // Call the chat service
    this.chatService.getAIResponse(question).subscribe({
      next: (response: ChatResponse) => {
        this.isLoading = false;
        this.currentResponse = response;
        this.lastTimestamp = new Date();
        
        // Update the message with response
        const aiResponse = this.extractAIResponse(response.message);
        this.messages[messageIndex].response = aiResponse;
        this.messages[messageIndex].status = 'success';
      },
      error: (err: any) => {
        this.isLoading = false;
        this.error = err.message || 'An error occurred. Please try again.';
        this.messages[messageIndex].response = err.message || 'An error occurred. Please try again.';
        this.messages[messageIndex].status = 'error';
      }
    });
  }

  private extractAIResponse(message: string): string {
    // Remove the "Chat response from OpenAI : " prefix if present
    if (message.startsWith('Chat response from OpenAI : ')) {
      return message.replace('Chat response from OpenAI : ', '').trim();
    }
    return message;
  }

  onClearHistory(): void {
    this.messages = [];
    this.currentResponse = null;
    this.error = null;
    this.lastTimestamp = null;
  }
}
