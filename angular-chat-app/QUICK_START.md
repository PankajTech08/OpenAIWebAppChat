# Angular Chat App - Quick Start

## ⚡ 5-Minute Quick Start

### 1. Install Dependencies (2 min)
```bash
cd angular-chat-app
npm install
```

### 2. Start Development Server (1 min)
```bash
npm start
```

### 3. Open Browser
Navigate to: **http://localhost:4200**

### 4. Start Chatting!
Ask any question and get responses from the AI

---

## 📋 What You Need Before Starting

✅ **Node.js** v18+ - [Download](https://nodejs.org/)  
✅ **Backend API** running on `http://localhost:5000`  
✅ **npm** v9+ (comes with Node.js)

---

## 🚀 Essential Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm start` | Start dev server (http://localhost:4200) |
| `npm run build:prod` | Build for production |
| `npm test` | Run unit tests |
| `npm run watch` | Watch mode for development |

---

## 🏗️ Project Structure (Key Files)

```
angular-chat-app/
├── src/app/
│   ├── services/chat.service.ts          ← API calls
│   ├── components/chat-*/                ← UI components
│   └── models/                           ← Data interfaces
├── src/environments/environment.ts       ← API URL config
├── package.json                          ← Dependencies
└── README.md                             ← Full documentation
```

---

## 🔧 Customization

### Change API URL
Edit `src/environments/environment.ts`:
```typescript
apiUrl: 'http://localhost:5001',  // Your backend URL
```

### Change Port (if 4200 is busy)
```bash
ng serve --port 4300
```

### Add More Features
- Components go in `src/app/components/`
- Services go in `src/app/services/`
- Models/Interfaces go in `src/app/models/`

---

## ❌ Troubleshooting

| Problem | Solution |
|---------|----------|
| **API connection fails** | Check backend runs on http://localhost:5000 |
| **Port 4200 in use** | `ng serve --port 4300` |
| **Module errors** | Run `npm install` again |
| **CORS error** | Ensure backend allows requests from http://localhost:4200 |

---

## 📞 Features

✨ Real-time AI chat interface  
✨ Conversation history  
✨ Copy responses to clipboard  
✨ Error handling  
✨ Loading indicators  
✨ Mobile responsive  

---

## 📚 Full Documentation

- **SETUP_GUIDE.md** - Detailed setup instructions
- **README.md** - Complete project documentation
- **src/app/** - Well-commented source code

---

## 🎯 Next Steps

1. Run `npm install`
2. Run `npm start`
3. Open http://localhost:4200
4. Test with a question!

---

**Happy Coding! 🎉**
