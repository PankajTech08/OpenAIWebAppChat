# Angular Chat Application - Setup Guide

## Complete Setup Instructions

### Step 1: Prerequisites Installation

#### Install Node.js
- Download from [nodejs.org](https://nodejs.org/)
- Recommended version: 18.0.0 or higher
- Verify installation:
```bash
node --version
npm --version
```

#### Install Angular CLI
```bash
npm install -g @angular/cli
```

Verify installation:
```bash
ng version
```

### Step 2: Project Setup

#### Navigate to Project Directory
```bash
cd angular-chat-app
```

#### Install Dependencies
```bash
npm install
```

This will install all required packages listed in `package.json`:
- Angular 18+
- RxJS
- TypeScript
- Testing frameworks (Jasmine, Karma)
- Build tools

### Step 3: Backend API Configuration

Before running the application, ensure:

1. **Backend Service is Running**
   - The ASP.NET Core OpenAIWebApp API should be running on `http://localhost:5000`
   - Check the backend service status by visiting: `http://localhost:5000/swagger/ui`

2. **Update API URL (if needed)**
   - Edit `src/environments/environment.ts` if your backend runs on a different port/host
   - Example for different port:
     ```typescript
     apiUrl: 'http://localhost:5001'  // Change port as needed
     ```

3. **CORS Configuration**
   - Ensure the backend has CORS enabled for `http://localhost:4200` (Angular dev server)
   - This should already be configured in the backend

### Step 4: Development Server

#### Start the Development Server
```bash
npm start
```

Or using Angular CLI directly:
```bash
ng serve
```

#### Access the Application
- Navigate to: `http://localhost:4200/`
- The application will automatically reload when you modify source files

### Step 5: Build for Production

#### Create Production Build
```bash
npm run build:prod
```

Or using Angular CLI:
```bash
ng build --configuration production
```

Build artifacts will be in the `dist/angular-chat-app/` directory

### Step 6: Run Unit Tests

#### Execute Tests
```bash
npm test
```

Or using Angular CLI:
```bash
ng test
```

Tests will run in watch mode. Press `q` to quit.

## Project Structure Overview

```
angular-chat-app/
├── src/                          # Source code
│   ├── app/
│   │   ├── components/          # Reusable components
│   │   │   ├── chat-container/  # Main app container
│   │   │   ├── chat-input/      # User input component
│   │   │   ├── chat-response/   # Response display
│   │   │   └── chat-history/    # Chat history
│   │   ├── services/            # Services (API calls)
│   │   │   └── chat.service.ts
│   │   ├── models/              # TypeScript interfaces
│   │   │   ├── chat-response.model.ts
│   │   │   ├── chat-message.model.ts
│   │   │   └── chat-request.model.ts
│   │   ├── app.component.ts     # Root component
│   │   └── app.config.ts        # App configuration
│   ├── environments/            # Environment configs
│   │   ├── environment.ts       # Dev config
│   │   └── environment.prod.ts  # Prod config
│   ├── main.ts                  # Bootstrap file
│   ├── index.html               # HTML entry point
│   └── styles.css               # Global styles
├── angular.json                 # Angular CLI config
├── package.json                 # NPM dependencies
├── tsconfig.json                # TypeScript config
└── README.md                    # Documentation
```

## Common Commands

```bash
# Start development server
npm start

# Build for production
npm run build:prod

# Run unit tests
npm test

# Run linting
npm run lint

# Watch mode for development
npm run watch
```

## Troubleshooting

### 1. Port Already in Use
If port 4200 is already in use:
```bash
ng serve --port 4300
```

### 2. API Connection Error
**Error**: "Failed to connect to API"
- **Solution**: Ensure backend is running on http://localhost:5000
- **Check**: Visit `http://localhost:5000/swagger/ui` in browser

### 3. CORS Related Errors
**Error**: "Access to XMLHttpRequest blocked by CORS"
- **Solution**: Ensure backend has CORS enabled for the Angular app URL
- **Backend Config**: Should allow requests from `http://localhost:4200`

### 4. Module Not Found
**Error**: "Module not found: @angular/..."
- **Solution**: Run `npm install`

### 5. Clear Node Modules Cache
```bash
rm -rf node_modules package-lock.json
npm install
```

## Environment-Specific Configuration

### Development
- File: `src/environments/environment.ts`
- Uses: `http://localhost:5000`
- Features: Source maps, detailed error messages

### Production
- File: `src/environments/environment.prod.ts`
- Uses: Production API URL
- Features: Optimization, minification, no source maps

## Performance Tips

1. **Use Production Build**
   - Always use `ng build --configuration production` for production
   
2. **Enable AOT Compilation**
   - Already enabled by default in Angular 18+
   
3. **Lazy Loading**
   - Current app is small, but can be extended with lazy loading

4. **Bundle Analysis**
   ```bash
   ng build --stats-json
   webpack-bundle-analyzer dist/angular-chat-app/stats.json
   ```

## API Integration Details

### Chat Service
Located in: `src/app/services/chat.service.ts`

- **Method**: `getAIResponse(question: string): Observable<ChatResponse>`
- **Endpoint**: `GET /getChatdata?question={question}`
- **Timeout**: 30 seconds (configurable in environments)

### Models
- `ChatResponse`: API response interface
- `ChatMessage`: Message in conversation history
- `ChatRequest`: User question request

## File Organization Best Practices

- **Components**: Each in separate folder with .ts, .html, .css files
- **Services**: In `services/` folder, one service per file
- **Models**: In `models/` folder, one interface per file
- **Styles**: Component-specific styles in components, global in `styles.css`

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start development server: `npm start`
3. ✅ Open browser to: `http://localhost:4200`
4. ✅ Test API connection by submitting a question
5. ✅ Build for production: `npm run build:prod`

## Support Resources

- [Angular Documentation](https://angular.io)
- [RxJS Documentation](https://rxjs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [HTTP Client Guide](https://angular.io/guide/http)

## Version Information

- **Angular**: 18+
- **TypeScript**: 5.2+
- **Node.js**: 18+
- **npm**: 9+
- **RxJS**: 7.8+
