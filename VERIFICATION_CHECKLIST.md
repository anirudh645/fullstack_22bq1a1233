# ✅ Integration Verification Checklist

Use this checklist to verify that your full-stack integration is working correctly.

---

## 📋 Pre-Start Checklist

### System Requirements
- [ ] Java 17 or higher installed
  - Run: `java -version`
  - Expected: `java version "17"` or higher

- [ ] Node.js 18 or higher installed
  - Run: `node --version`
  - Expected: `v18.0.0` or higher

- [ ] npm installed
  - Run: `npm --version`
  - Expected: `8.0.0` or higher

- [ ] Maven wrapper available
  - Check: `Backend/flipr_backend/mvnw.cmd` exists

---

## 🔧 Setup Checklist

### Backend Setup
- [ ] Navigate to `Backend/flipr_backend`
- [ ] MongoDB connection string configured in `application.properties`
- [ ] Run: `mvnw.cmd clean install`
- [ ] Build completes without errors
- [ ] `target` folder created with JAR file

### Frontend Setup
- [ ] Navigate to `Frontend`
- [ ] Run: `npm install`
- [ ] Installation completes without errors
- [ ] `node_modules` folder created
- [ ] No critical vulnerabilities reported

---

## 🚀 Startup Checklist

### Backend Startup
- [ ] Run: `mvnw.cmd spring-boot:run`
- [ ] Server starts without errors
- [ ] See: "Started FliprBackendApplication"
- [ ] See: "✅ Demo admin user created!" (first run only)
- [ ] Backend running on: http://localhost:8080
- [ ] No port conflicts

### Frontend Startup
- [ ] Run: `npm run dev`
- [ ] Vite server starts without errors
- [ ] See: "Local: http://localhost:5173"
- [ ] No port conflicts
- [ ] No CORS errors in console

---

## 🧪 Backend API Testing

### Test Authentication Endpoint
- [ ] Open: http://localhost:8080/api/auth/login in Postman/Thunder Client
- [ ] POST request with body:
  ```json
  {
    "username": "admin",
    "password": "admin123"
  }
  ```
- [ ] Response Status: 200 OK
- [ ] Response contains: `token`, `username`, `role`
- [ ] Token is a valid JWT string

### Test Public Project Endpoint
- [ ] GET: http://localhost:8080/api/public/projects
- [ ] Response Status: 200 OK
- [ ] Response is an array (may be empty)
- [ ] No authentication required

### Test Protected Admin Endpoint
- [ ] GET: http://localhost:8080/api/admin/clients
- [ ] Without token: Response Status: 401 or 403
- [ ] With token in header: Response Status: 200 OK
- [ ] Header format: `Authorization: Bearer <your-jwt-token>`

---

## 🎨 Frontend Testing

### Landing Page
- [ ] Open: http://localhost:5173
- [ ] Page loads without errors
- [ ] No console errors
- [ ] Navigation works
- [ ] All sections visible

### Admin Login Page
- [ ] Open: http://localhost:5173/admin/login
- [ ] Login form displays correctly
- [ ] Demo credentials shown
- [ ] Username field works
- [ ] Password field works
- [ ] Submit button visible

### Login Functionality
- [ ] Enter username: `admin`
- [ ] Enter password: `admin123`
- [ ] Click "Login"
- [ ] No console errors
- [ ] Redirected to: http://localhost:5173/admin
- [ ] Admin dashboard loads

### Admin Dashboard
- [ ] Dashboard displays after login
- [ ] AdminHeader shows username
- [ ] Logout button visible
- [ ] Navigation menu works
- [ ] All admin sections visible:
  - [ ] Statistics
  - [ ] Projects
  - [ ] Leads
  - [ ] Contacts

### Logout Functionality
- [ ] Click "Logout" button
- [ ] Redirected to login page
- [ ] Token removed from localStorage
- [ ] Cannot access /admin without logging in again

---

## 🔐 Security Testing

### Protected Routes
- [ ] Logout from admin
- [ ] Try to access: http://localhost:5173/admin
- [ ] Redirected to login page
- [ ] Login again
- [ ] Dashboard accessible after login

### Token Persistence
- [ ] Login to admin dashboard
- [ ] Refresh the page (F5)
- [ ] Still logged in (no redirect to login)
- [ ] Token present in localStorage
- [ ] Check: Open DevTools → Application → Local Storage

### JWT Token Validation
- [ ] Login and get token
- [ ] Open DevTools → Console
- [ ] Run: `localStorage.getItem('token')`
- [ ] Token should be a long string
- [ ] Decode at: https://jwt.io
- [ ] Verify payload contains username and role

---

## 🗄️ Database Testing

### MongoDB Connection
- [ ] Backend starts without connection errors
- [ ] Open MongoDB Compass
- [ ] Connect with connection string from `application.properties`
- [ ] Database `fliprdb` exists
- [ ] Collection `admins` exists
- [ ] Admin document present with username "admin"

### Admin User Verification
In MongoDB Compass or mongosh:
```javascript
db.admins.findOne({ username: "admin" })
```
- [ ] Document found
- [ ] Password is hashed (starts with `$2a$`)
- [ ] Email is `admin@flipr.com`
- [ ] Role is `ADMIN`
- [ ] Active is `true`

---

## 📊 API Integration Testing

### Test Lead Submission (Public)
Using the frontend:
- [ ] Fill out lead generation form
- [ ] Submit form
- [ ] Check backend console for request
- [ ] Check MongoDB for new client document
- [ ] Verify in admin dashboard leads section

### Test Contact Submission (Public)
Using the frontend:
- [ ] Fill out contact form
- [ ] Submit form
- [ ] Check backend console for request
- [ ] Check MongoDB for new contact document
- [ ] Verify in admin dashboard contacts section

---

## 🌐 CORS Testing

### CORS Configuration
- [ ] Frontend on port 5173
- [ ] Backend on port 8080
- [ ] No CORS errors in browser console
- [ ] API calls succeed
- [ ] Check `application.properties`:
  ```
  app.cors.allowed-origins=http://localhost:5173,http://localhost:3000
  ```

---

## 📱 Responsive Testing

### Desktop (1920x1080)
- [ ] Landing page displays correctly
- [ ] Admin dashboard displays correctly
- [ ] All elements visible
- [ ] Navigation works

### Tablet (768x1024)
- [ ] Landing page responsive
- [ ] Admin dashboard responsive
- [ ] Navigation menu adapts

### Mobile (375x667)
- [ ] Landing page mobile-friendly
- [ ] Login page mobile-friendly
- [ ] Mobile menu works

---

## 🐛 Error Handling Testing

### Invalid Login
- [ ] Try login with wrong username
- [ ] Error message displayed
- [ ] No redirect
- [ ] Try login with wrong password
- [ ] Error message displayed

### Network Errors
- [ ] Stop backend server
- [ ] Try to login from frontend
- [ ] Appropriate error message shown
- [ ] Start backend server
- [ ] Login works again

### Token Expiration (After 24 hours)
- [ ] With expired token, API calls fail
- [ ] User redirected to login
- [ ] Can login again successfully

---

## 📈 Performance Testing

### Backend Performance
- [ ] Backend starts in < 30 seconds
- [ ] API responses in < 1 second
- [ ] No memory leaks
- [ ] Check console for warnings

### Frontend Performance
- [ ] Page loads in < 3 seconds
- [ ] Smooth navigation
- [ ] No lag in UI
- [ ] Images load properly

---

## 🎯 Final Verification

### Complete Flow Test
1. [ ] Start backend server
2. [ ] Start frontend server
3. [ ] Open http://localhost:5173
4. [ ] Browse landing page
5. [ ] Navigate to http://localhost:5173/admin/login
6. [ ] Login with admin/admin123
7. [ ] View admin dashboard
8. [ ] Test all admin sections
9. [ ] Logout
10. [ ] Verify redirected to login

### All Systems Go ✅
- [ ] Backend running smoothly
- [ ] Frontend running smoothly
- [ ] Database connected
- [ ] Authentication working
- [ ] API integration working
- [ ] No errors in console
- [ ] All features functional

---

## 🚨 Troubleshooting

If any checkbox above fails, refer to:
1. [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md) - Setup and troubleshooting
2. [ARCHITECTURE.md](ARCHITECTURE.md) - System architecture details
3. Backend console - Check for error messages
4. Browser DevTools Console - Check for JavaScript errors
5. Network tab - Check API calls and responses

---

## 📝 Notes Section

### Issues Found:
```
[Write any issues you encountered here]
```

### Solutions Applied:
```
[Write solutions that worked for you]
```

### Additional Testing:
```
[Any additional tests you performed]
```

---

## ✨ Success Criteria

Your integration is complete when:
- ✅ All checkboxes above are checked
- ✅ No errors in backend console
- ✅ No errors in browser console
- ✅ Login/logout works smoothly
- ✅ Admin dashboard is accessible
- ✅ MongoDB contains admin user
- ✅ API calls succeed with proper authentication

**Congratulations! Your full-stack application is ready! 🎉**
