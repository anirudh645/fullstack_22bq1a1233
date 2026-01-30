# Flipr Drive Project - Full Stack Integration Guide

## 🎯 Project Overview

This is a full-stack lead generation landing page with an admin dashboard. The project includes:
- **Frontend**: React with Vite, Tailwind CSS
- **Backend**: Spring Boot with MongoDB
- **Authentication**: JWT-based admin login
- **Database**: MongoDB Atlas

---

## 📋 Prerequisites

Before starting, ensure you have:
- **Java 17+** installed
- **Node.js 18+** and npm installed
- **Maven** (included in the project as mvnw)
- **MongoDB Atlas** account (connection string provided)

---

## 🚀 Quick Start Guide

### 1. Backend Setup

#### Step 1: Navigate to Backend Directory
```bash
cd Backend/flipr_backend
```

#### Step 2: Install Dependencies (Maven will auto-download)
```bash
./mvnw clean install
```
On Windows:
```bash
mvnw.cmd clean install
```

#### Step 3: Configure MongoDB Connection
The MongoDB connection is already configured in `application.properties`:
```properties
spring.data.mongodb.uri=mongodb+srv://flipr_drive_test:ua2SHItzVOAxwjzU@cluster0.59vmccn.mongodb.net/fliprdb?retryWrites=true&w=majority&appName=Cluster0
```

#### Step 4: Start the Backend Server
```bash
./mvnw spring-boot:run
```
On Windows:
```bash
mvnw.cmd spring-boot:run
```

The backend will start on: **http://localhost:8080**

When the application starts, it will automatically create a demo admin user:
- **Username**: `admin`
- **Password**: `admin123`

---

### 2. Frontend Setup

#### Step 1: Navigate to Frontend Directory
```bash
cd Frontend
```

#### Step 2: Install Dependencies
```bash
npm install
```

#### Step 3: Start the Development Server
```bash
npm run dev
```

The frontend will start on: **http://localhost:5173**

---

## 🔐 Admin Login

1. Navigate to: **http://localhost:5173/admin/login**
2. Use the demo credentials:
   - **Username**: `admin`
   - **Password**: `admin123`
3. You'll be redirected to the admin dashboard

---

## 📁 Project Structure

```
Flipr_Drive_project/
├── Backend/
│   └── flipr_backend/
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/com/anirudh/flipr_backend/
│       │   │   │   ├── config/           # Security & Configuration
│       │   │   │   ├── controller/       # REST API Controllers
│       │   │   │   ├── dto/              # Data Transfer Objects
│       │   │   │   ├── model/            # MongoDB Models
│       │   │   │   ├── repository/       # MongoDB Repositories
│       │   │   │   ├── security/         # JWT & Security Config
│       │   │   │   └── service/          # Business Logic
│       │   │   └── resources/
│       │   │       └── application.properties
│       │   └── test/
│       ├── pom.xml
│       └── uploads/                      # File uploads directory
│
└── Frontend/
    ├── src/
    │   ├── components/              # React Components
    │   │   ├── admin/              # Admin Dashboard Components
    │   │   └── ui/                 # UI Components
    │   ├── context/                # React Context (Auth)
    │   ├── pages/                  # Page Components
    │   │   └── admin/
    │   │       ├── AdminDashboard.jsx
    │   │       └── AdminLogin.jsx
    │   ├── services/               # API Integration
    │   │   └── api.js
    │   └── styles/                 # CSS Styles
    ├── package.json
    └── vite.config.js
```

---

## 🔌 API Endpoints

### Public Endpoints (No Authentication Required)

#### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/validate` - Validate JWT token

#### Projects
- `GET /api/public/projects` - Get all projects
- `GET /api/public/projects/{id}` - Get project by ID

#### Contact & Leads
- `POST /api/public/clients` - Submit lead form
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter/subscribe` - Subscribe to newsletter

### Admin Endpoints (Authentication Required)

Include JWT token in header: `Authorization: Bearer <token>`

#### Projects Management
- `POST /api/admin/projects` - Create project
- `PUT /api/admin/projects/{id}` - Update project
- `DELETE /api/admin/projects/{id}` - Delete project
- `POST /api/admin/projects/{id}/image` - Upload project image

#### Leads Management
- `GET /api/admin/clients` - Get all leads
- `GET /api/admin/clients/{id}` - Get lead by ID
- `PATCH /api/admin/clients/{id}/status` - Update lead status
- `DELETE /api/admin/clients/{id}` - Delete lead

#### Contacts Management
- `GET /api/admin/contacts` - Get all contact submissions
- `PATCH /api/admin/contacts/{id}/read` - Mark as read
- `DELETE /api/admin/contacts/{id}` - Delete contact

#### Newsletter
- `GET /api/admin/subscribers` - Get all subscribers

---

## 🗄️ MongoDB Collections

### Collections Created Automatically:
1. **admins** - Admin users (auto-created on startup)
2. **projects** - Portfolio projects
3. **clients** - Lead submissions
4. **contactSubmissions** - Contact form submissions
5. **subscribers** - Newsletter subscribers

See [MongoDB_Setup_Guide.md](../MongoDB_Setup_Guide.md) for sample data and manual setup instructions.

---

## 🛡️ Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Encryption**: BCrypt hashing for passwords
- **CORS Configuration**: Configured for localhost development
- **Protected Routes**: Admin routes require authentication
- **Session Management**: Stateless JWT sessions

---

## 🔧 Configuration Files

### Backend Configuration
**File**: `Backend/flipr_backend/src/main/resources/application.properties`

Key settings:
```properties
# MongoDB Connection
spring.data.mongodb.uri=<your-mongodb-uri>

# JWT Settings
jwt.secret=<your-jwt-secret>
jwt.expiration=86400000  # 24 hours

# CORS Settings
app.cors.allowed-origins=http://localhost:5173,http://localhost:3000

# Server Port
server.port=8080

# File Upload Settings
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB
```

### Frontend Configuration
**File**: `Frontend/src/services/api.js`

API base URL:
```javascript
const API_BASE_URL = 'http://localhost:8080/api';
```

---

## 🧪 Testing the Integration

### 1. Test Backend Health
```bash
curl http://localhost:8080/api/auth/login
```

### 2. Test Admin Login
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

### 3. Test Public Endpoints
```bash
curl http://localhost:8080/api/public/projects
```

### 4. Test Frontend
- Open http://localhost:5173
- Navigate to http://localhost:5173/admin/login
- Login with admin/admin123
- Verify dashboard loads

---

## 🐛 Troubleshooting

### Backend Issues

**Port Already in Use**
```bash
# Find and kill process on port 8080
# Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Linux/Mac:
lsof -ti:8080 | xargs kill -9
```

**MongoDB Connection Failed**
- Verify MongoDB Atlas IP whitelist includes your IP (0.0.0.0/0 for all)
- Check connection string in application.properties
- Ensure MongoDB Atlas cluster is running

**Maven Build Errors**
```bash
./mvnw clean install -U
```

### Frontend Issues

**Port 5173 Already in Use**
```bash
# Kill process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

**CORS Errors**
- Ensure backend is running on port 8080
- Check CORS configuration in WebMvcConfig.java
- Verify frontend API calls use correct URL

**Dependencies Not Installing**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🚢 Production Deployment

### Backend Deployment

1. **Update application.properties** for production:
```properties
# Use environment variables
spring.data.mongodb.uri=${MONGODB_URI}
jwt.secret=${JWT_SECRET}
app.cors.allowed-origins=${FRONTEND_URL}
```

2. **Build the JAR**:
```bash
./mvnw clean package -DskipTests
```

3. **Run the JAR**:
```bash
java -jar target/flipr_backend-0.0.1-SNAPSHOT.jar
```

### Frontend Deployment

1. **Update API URL** in `src/services/api.js`:
```javascript
const API_BASE_URL = process.env.VITE_API_URL || 'https://your-api-domain.com/api';
```

2. **Build for production**:
```bash
npm run build
```

3. **Deploy the `dist` folder** to your hosting service (Vercel, Netlify, etc.)

---

## 📝 Environment Variables

### Backend (.env or environment)
```
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-secure-secret-key
CORS_ORIGINS=https://your-frontend-domain.com
```

### Frontend (.env)
```
VITE_API_URL=https://your-api-domain.com/api
```

---

## 🎨 Features Implemented

✅ **Authentication System**
- JWT-based login
- Protected admin routes
- Token validation
- Logout functionality

✅ **Admin Dashboard**
- Statistics overview
- Projects management
- Leads management
- Contact submissions
- Newsletter subscribers

✅ **Public Features**
- Portfolio display
- Lead generation form
- Contact form
- Newsletter subscription

✅ **Security**
- Password encryption
- JWT tokens
- CORS protection
- Protected API endpoints

---

## 📚 Additional Resources

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [React Documentation](https://react.dev)
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [JWT Documentation](https://jwt.io/)

---

## 🆘 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify all prerequisites are installed
3. Ensure both backend and frontend are running
4. Check browser console for frontend errors
5. Check terminal/console for backend errors

---

## 📄 License

This project is for educational and portfolio purposes.

---

**Happy Coding! 🚀**
