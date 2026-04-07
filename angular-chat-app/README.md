# Angular Chat App

A modern Angular 18+ single-page application that provides a user-friendly chat interface to interact with OpenAI's GPT-3.5-turbo model through an ASP.NET Core backend API.

## Features

- 💬 Interactive chat interface with real-time AI responses
- 📝 Chat history with timestamps
- 🎨 Modern, responsive UI design
- ⚡ Fast and efficient API communication
- 📋 Copy functionality for chat responses
- 🧹 Clear conversation history option
- ⌨️ Keyboard support (Enter to send)

## Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **Angular CLI**: 18+
- **Backend API**: OpenAIWebApp running on http://localhost:5000

## Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will reload when you modify source files.

### 3. Build for Production
```bash
npm run build:prod
```

The build artifacts will be stored in the `dist/angular-chat-app/` directory.

## Project Structure

```
angular-chat-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── chat-container/       # Main container component
│   │   │   ├── chat-input/           # Input component for questions
│   │   │   ├── chat-response/        # Response display component
│   │   │   └── chat-history/         # History list component
│   │   ├── services/
│   │   │   └── chat.service.ts       # API communication service
│   │   ├── models/
│   │   │   ├── chat-response.model.ts
│   │   │   ├── chat-message.model.ts
│   │   │   └── chat-request.model.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   ├── environments/
│   │   ├── environment.ts            # Development config
│   │   └── environment.prod.ts       # Production config
│   ├── main.ts
│   ├── index.html
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Configuration

### API Configuration

Edit `src/environments/environment.ts` to change the API URL:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000',
  apiEndpoint: '/getChatdata',
  apiTimeout: 30000
};
```

## Running Tests

```bash
npm test
```

Executes the unit tests via [Karma](https://karma-runner.github.io).

## Technologies

- **Angular**: 18+
- **TypeScript**: 5.2+
- **RxJS**: 7.8+
- **Node.js**: 18+
- **npm**: 9+

## API Integration

The application communicates with the backend API through the `ChatService`:

### Endpoint
- **GET** `/getChatdata?question=YOUR_QUESTION`

### Response Format
```json
{
  "message": "Chat response from OpenAI : [AI generated response]"
}
```

## Key Components

### ChatContainerComponent
Main orchestrator that manages the overall application state and coordinates between child components.

### ChatInputComponent
Handles user input with support for:
- Text area for multiline input
- Send button
- Enter key submission (Shift+Enter for new line)
- Loading state management

### ChatResponseComponent
Displays AI responses with:
- Loading indicator
- Error handling
- Copy to clipboard functionality
- Responsive scrolling for long responses

### ChatHistoryComponent
Maintains conversation history with:
- Message list with timestamps
- Status indicators (success/error/pending)
- Copy individual messages
- Clear history option

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### API Connection Issues
1. Ensure the backend is running on http://localhost:5000
2. Check CORS configuration in the backend
3. Verify the API endpoint in environment files

### Port Already in Use
```bash
ng serve --port 4201
```

## License

Proprietary - Created for OpenAI Chat Integration

## Support

For issues or questions, refer to:
- [Angular Documentation](https://angular.io/docs)
- [API Specification](../API_SPECIFICATION.md)
- [Implementation Guide](../IMPLEMENTATION_GUIDE.md)
