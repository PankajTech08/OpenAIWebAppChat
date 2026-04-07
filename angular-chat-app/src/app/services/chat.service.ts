import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap, timeout } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ChatResponse } from '../models/chat-response.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:5001/getChatdata';
  private responseSubject = new BehaviorSubject<ChatResponse | null>(null);
  public response$ = this.responseSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAIResponse(question: string): Observable<ChatResponse> {
    const params = new HttpParams().set('question', question);
    
    return this.http.get<ChatResponse>(this.apiUrl, { params }).pipe(
      timeout(environment.apiTimeout),
      tap(response => this.responseSubject.next(response)),
      catchError(error => this.handleError(error))
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    return throwError(() => new Error('Failed to get response from AI. Please try again.'));
  }
}
