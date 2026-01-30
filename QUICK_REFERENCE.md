# 🚀 Quick Reference Card

## One-Line Start Commands

### Start Everything (Recommended)
```bash
start-all.bat
```

### Start Backend Only
```bash
cd Backend\flipr_backend && mvnw.cmd spring-boot:run
```

### Start Frontend Only
```bash
cd Frontend && npm run dev
```

---

## Access URLs

| What | URL |
|------|-----|
| **Frontend** | http://localhost:5173 |
| **Admin Login** | http://localhost:5173/admin/login |
| **Admin Dashboard** | http://localhost:5173/admin |
| **Backend API** | http://localhost:8080/api |
| **Health Check** | http://localhost:8080/api/auth/validate |

---

## Demo Credentials

```
Username: admin
Password: admin123
```

---

## Key Ports

- Frontend: **5173**
- Backend: **8080**
- MongoDB: **Atlas Cloud** (no local port)

---

## MongoDB Connection

```
mongodb+srv://flipr_drive_test:ua2SHItzVOAxwjzU@cluster0.59vmccn.mongodb.net/fliprdb?retryWrites=true&w=majority&appName=Cluster0
```

---

## Common Commands

### Backend
```bash
# Build
mvnw.cmd clean install

# Run
mvnw.cmd spring-boot:run

# Clean build
mvnw.cmd clean package

# Skip tests
mvnw.cmd spring-boot:run -DskipTests
```

### Frontend
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## API Quick Test (curl)

### Login
```bash
curl -X POST http://localhost:8080/api/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"username\":\"admin\",\"password\":\"admin123\"}"
```

### Get Projects (Public)
```bash
curl http://localhost:8080/api/public/projects
```

### Get Clients (Admin - requires token)
```bash
curl http://localhost:8080/api/admin/clients ^
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## File Locations

### Backend Config
```
Backend/flipr_backend/src/main/resources/application.properties
```

### Frontend API Config
```
Frontend/src/services/api.js
```

### Security Config
```
Backend/flipr_backend/src/main/java/com/anirudh/flipr_backend/security/SecurityConfig.java
```

---

## Troubleshooting Quick Fixes

### Port 8080 in use
```bash
# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

### Port 5173 in use
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### Backend won't connect to MongoDB
1. Check internet connection
2. Verify connection string in application.properties
3. Whitelist your IP in MongoDB Atlas (or use 0.0.0.0/0)

### Frontend CORS errors
1. Ensure backend is running on port 8080
2. Check CORS config in application.properties
3. Restart backend after changes

### Login not working
1. Check backend console for errors
2. Verify admin user created (look for ✅ message)
3. Check browser console for errors
4. Verify network tab shows 200 OK response

---

## JWT Token

### Where is it stored?
```javascript
// Browser DevTools → Console
localStorage.getItem('token')
```

### How to clear it?
```javascript
localStorage.removeItem('token')
```

### Decode token
Paste token at: https://jwt.io

---

## MongoDB Quick Queries

### Find admin user
```javascript
db.admins.findOne({ username: "admin" })
```

### Count projects
```javascript
db.projects.countDocuments()
```

### Get all leads
```javascript
db.clients.find().pretty()
```

### Clear test data
```javascript
db.clients.deleteMany({})
db.contactSubmissions.deleteMany({})
db.subscribers.deleteMany({})
```

---

## Environment Variables

### Backend
```properties
# Set in application.properties
spring.data.mongodb.uri=<YOUR_MONGODB_URI>
jwt.secret=<YOUR_SECRET_KEY>
app.cors.allowed-origins=<YOUR_FRONTEND_URL>
```

### Frontend
```javascript
// In .env file (create if needed)
VITE_API_URL=http://localhost:8080/api
```

---

## Project Structure (Quick)

```
Backend/
└── flipr_backend/
    └── src/main/java/.../
        ├── controller/    → REST endpoints
        ├── service/       → Business logic
        ├── repository/    → Database access
        ├── model/         → Data models
        ├── security/      → Auth & JWT
        └── config/        → Configuration

Frontend/
└── src/
    ├── components/        → React components
    ├── pages/            → Page components
    ├── services/         → API calls
    ├── context/          → Auth context
    └── styles/           → CSS files
```

---

## Important Files Reference

| File | Purpose |
|------|---------|
| `pom.xml` | Backend dependencies |
| `application.properties` | Backend configuration |
| `package.json` | Frontend dependencies |
| `api.js` | API integration layer |
| `AuthContext.jsx` | Authentication state |
| `SecurityConfig.java` | Security configuration |
| `JwtUtil.java` | JWT token handling |

---

## Testing URLs

### Backend
- Health: http://localhost:8080/api/auth/validate
- Projects: http://localhost:8080/api/public/projects
- Login: http://localhost:8080/api/auth/login

### Frontend
- Home: http://localhost:5173/
- Login: http://localhost:5173/admin/login
- Dashboard: http://localhost:5173/admin

---

## Default Admin

**Created automatically on first backend startup**

```
Username: admin
Password: admin123
Email:    admin@flipr.com
Role:     ADMIN
```

---

## Status Indicators

### Backend Running
Look for:
```
Started FliprBackendApplication in X.XXX seconds
```

### Frontend Running
Look for:
```
VITE ready in XXX ms
Local: http://localhost:5173/
```

### MongoDB Connected
Look for:
```
Cluster description: {type=REPLICA_SET, ...}
```

---

## Emergency Stop

### Kill All Java Processes (Windows)
```bash
taskkill /F /IM java.exe
```

### Kill Node Processes (Windows)
```bash
taskkill /F /IM node.exe
```

---

## Documentation Files

| File | Description |
|------|-------------|
| `README_INTEGRATION.md` | Integration summary |
| `INTEGRATION_GUIDE.md` | Full setup guide |
| `ARCHITECTURE.md` | System architecture |
| `VERIFICATION_CHECKLIST.md` | Testing checklist |
| `MongoDB_Setup_Guide.md` | Database setup |
| `QUICK_REFERENCE.md` | This file |

---

## Support

Stuck? Check:
1. ✅ Backend console for errors
2. ✅ Browser DevTools console
3. ✅ Network tab for API calls
4. ✅ MongoDB Atlas connection
5. ✅ Port availability
6. ✅ Documentation files above

---

## Quick Setup (First Time)

```bash
# 1. Setup (run once)
setup.bat

# 2. Start (every time)
start-all.bat

# 3. Access
# Open: http://localhost:5173/admin/login
# Login: admin / admin123
```

---

**Need more details? See INTEGRATION_GUIDE.md** 📚
