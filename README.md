# 🚀 Flipr Drive - Full Stack Lead Generation Platform

A modern, full-stack web application featuring a lead generation landing page with a secure admin dashboard.

---

## ✨ Features

### 🌐 Public Website
- **Responsive Landing Page** - Modern, mobile-friendly design
- **Portfolio Showcase** - Display your projects and work
- **Lead Generation Form** - Capture potential client information
- **Contact Form** - Direct communication channel
- **Newsletter Subscription** - Build your mailing list

### 🔐 Admin Dashboard
- **Secure Authentication** - JWT-based login system
- **Statistics Overview** - Track leads, contacts, and subscribers
- **Project Management** - Create, edit, and delete projects
- **Lead Management** - View and manage client inquiries
- **Contact Management** - Handle contact form submissions
- **Subscriber Management** - Manage newsletter subscribers

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 19** - UI library
- 🎨 **Tailwind CSS 4** - Styling
- 🛣️ **React Router 7** - Routing
- ⚡ **Vite** - Build tool
- 📊 **Recharts** - Data visualization

### Backend
- ☕ **Spring Boot 4** - Application framework
- 🔐 **Spring Security** - Authentication & authorization
- 🎫 **JWT** - Token-based authentication
- 🗄️ **Spring Data MongoDB** - Database access
- 🔒 **BCrypt** - Password encryption

### Database
- 🍃 **MongoDB Atlas** - Cloud database

---

## 🚀 Quick Start

### Prerequisites
- Java 17+
- Node.js 18+
- Maven (included as mvnw)

### Starting the Application

**Terminal 1 - Backend:**
```bash
cd Backend\flipr_backend
mvnw.cmd spring-boot:run
```

**Terminal 2 - Frontend:**
```bash
cd Frontend
npm install  # First time only
npm run dev
```

### Access the Application
- **Frontend**: http://localhost:5173
- **Admin Login**: http://localhost:5173/admin/login
- **Backend API**: http://localhost:8080/api

### Demo Admin Credentials
```
Username: admin
Password: admin123
```

> 💡 The admin user is automatically created on first backend startup.

---

## 📁 Project Structure

```
Flipr_Drive_project/
├── Backend/
│   └── flipr_backend/
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/com/anirudh/flipr_backend/
│       │   │   │   ├── config/           # Configuration
│       │   │   │   ├── controller/       # REST Controllers
│       │   │   │   ├── dto/              # Data Transfer Objects
│       │   │   │   ├── model/            # Data Models
│       │   │   │   ├── repository/       # Database Repositories
│       │   │   │   ├── security/         # Security & JWT
│       │   │   │   └── service/          # Business Logic
│       │   │   └── resources/
│       │   │       └── application.properties
│       │   └── test/
│       └── pom.xml
│
├── Frontend/
│   ├── src/
│   │   ├── components/           # React Components
│   │   │   ├── admin/           # Admin Components
│   │   │   └── ui/              # UI Components
│   │   ├── context/             # React Context (Auth)
│   │   ├── pages/               # Page Components
│   │   │   ├── admin/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   └── AdminLogin.jsx
│   │   │   └── Home.jsx
│   │   ├── services/            # API Integration
│   │   │   └── api.js
│   │   └── styles/              # CSS Styles
│   ├── package.json
│   └── vite.config.js
│
├── Documentation/
│   ├── INTEGRATION_GUIDE.md          # Complete setup guide
│   ├── ARCHITECTURE.md                # System architecture
│   ├── MongoDB_Setup_Guide.md         # Database setup
│   ├── VERIFICATION_CHECKLIST.md      # Testing checklist
│   └── QUICK_REFERENCE.md             # Quick commands
```

---

## 🔌 API Endpoints

### Public (No Auth Required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Admin login |
| GET | `/api/public/projects` | Get all projects |
| POST | `/api/public/clients` | Submit lead form |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/newsletter/subscribe` | Subscribe to newsletter |

### Admin (Auth Required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/auth/validate` | Validate JWT token |
| POST/PUT/DELETE | `/api/admin/projects` | Manage projects |
| GET/PATCH/DELETE | `/api/admin/clients` | Manage leads |
| GET/PATCH/DELETE | `/api/admin/contacts` | Manage contacts |
| GET | `/api/admin/subscribers` | View subscribers |

*Include JWT token in header: `Authorization: Bearer <token>`*

---

## 🗄️ Database Collections

| Collection | Description |
|------------|-------------|
| `admins` | Admin users (auto-created) |
| `projects` | Portfolio projects |
| `clients` | Lead submissions |
| `contactSubmissions` | Contact form data |
| `subscribers` | Newsletter subscribers |

---

## 🔒 Security Features

- ✅ **JWT Authentication** - Secure token-based auth
- ✅ **Password Encryption** - BCrypt hashing
- ✅ **Protected Routes** - Frontend route guards
- ✅ **Protected Endpoints** - Backend authorization
- ✅ **CORS Protection** - Configured origins
- ✅ **Session Management** - Stateless JWT
- ✅ **Token Expiration** - 24-hour validity

---

## 📊 Screenshots

### Admin Login
Beautiful gradient login page with demo credentials displayed.

### Admin Dashboard
Comprehensive dashboard with:
- Statistics cards (Leads, Projects, Contacts, Subscribers)
- Projects management with CRUD operations
- Leads overview with status tracking
- Contact submissions list
- Real-time data visualization

---

## 🧪 Testing

### Backend Health Check
```bash
curl http://localhost:8080/api/auth/login
```

### Login Test
```bash
curl -X POST http://localhost:8080/api/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"username\":\"admin\",\"password\":\"admin123\"}"
```

### Integration Test
1. Start both servers
2. Navigate to http://localhost:5173/admin/login
3. Login with admin/admin123
4. Verify dashboard loads
5. Test all CRUD operations

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md) | Complete setup and deployment guide |
| [ARCHITECTURE.md](ARCHITECTURE.md) | System architecture and data flow |
| [MongoDB_Setup_Guide.md](MongoDB_Setup_Guide.md) | Database setup and sample data |
| [VERIFICATION_CHECKLIST.md](VERIFICATION_CHECKLIST.md) | Step-by-step testing checklist |
| [QUICK_REFERENCE.md](QUICK_REFERENCE.md) | Quick commands and URLs |

---

## 🐛 Troubleshooting

### Backend Won't Start
- Verify Java 17+ installed: `java -version`
- Check port 8080 availability
- Verify MongoDB connection string

### Frontend Won't Start
- Verify Node.js 18+ installed: `node --version`
- Run `npm install` first
- Check port 5173 availability

### Login Not Working
- Ensure backend is running
- Check browser console for errors
- Verify admin user created (backend console)

### CORS Errors
- Verify backend running on port 8080
- Check CORS config in application.properties
- Restart backend after changes

**For detailed troubleshooting, see [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md)**

---

## 🚢 Deployment

### Backend Production
1. Update MongoDB URI
2. Set strong JWT secret
3. Configure CORS for production domain
4. Build: `mvnw.cmd clean package`
5. Deploy JAR to your server

### Frontend Production
1. Update API URL in `api.js`
2. Build: `npm run build`
3. Deploy `dist/` folder to hosting

**See [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md) for detailed deployment instructions**

---

## 🎯 What's Integrated

✅ **Frontend-Backend Connection** - Full API integration  
✅ **Authentication System** - JWT-based login  
✅ **Admin Dashboard** - Complete with CRUD operations  
✅ **MongoDB Database** - Connected to Atlas  
✅ **Security Layer** - Spring Security configured  
✅ **Protected Routes** - Both frontend and backend  
✅ **Auto Admin Creation** - Demo user on startup  
✅ **Error Handling** - Comprehensive error management  
✅ **Documentation** - Complete guides and references  
✅ **Scripts** - Easy startup and setup  

---

## 🆘 Support

### Quick Help
- Check [QUICK_REFERENCE.md](QUICK_REFERENCE.md) for common commands
- Review [VERIFICATION_CHECKLIST.md](VERIFICATION_CHECKLIST.md) for testing
- See [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md) for detailed help

### Resources
- [Spring Boot Docs](https://spring.io/projects/spring-boot)
- [React Documentation](https://react.dev)
- [MongoDB Atlas](https://www.mongodb.com/docs/atlas/)
- [JWT Introduction](https://jwt.io/)

---

## 📝 License

This project is for educational and portfolio purposes.

---

## 🎉 Ready to Go!

Your full-stack application is completely integrated and ready to use!

### Next Steps:
1. ✅ Start the backend server in one terminal
2. ✅ Start the frontend server in another terminal
3. ✅ Open http://localhost:5173/admin/login
4. ✅ Login with `admin` / `admin123`
5. ✅ Explore the admin dashboard
6. ✅ Start building your features!

---

**Built with ❤️ using React, Spring Boot, and MongoDB**

---

## 📞 Contact

For questions or issues, refer to the documentation files or check:
- Backend console output
- Browser DevTools console
- Network tab for API calls
- MongoDB Atlas dashboard

**Happy Coding! 🚀**
