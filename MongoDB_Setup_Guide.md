# MongoDB Data Initialization Script
# This script will help you insert demo data into your MongoDB Atlas database

## Prerequisites
- MongoDB Atlas account
- MongoDB Compass or mongosh installed

## Connection String
```
mongodb+srv://flipr_drive_test:ua2SHItzVOAxwjzU@cluster0.59vmccn.mongodb.net/fliprdb?retryWrites=true&w=majority&appName=Cluster0
```

## Using MongoDB Compass

1. Open MongoDB Compass
2. Connect using the connection string above
3. Select the `fliprdb` database
4. Use the following collections and data:

### 1. Admins Collection

**Collection Name:** `admins`

**Sample Document:**
```json
{
  "username": "admin",
  "password": "$2a$10$YourBCryptHashedPasswordHere",
  "email": "admin@flipr.com",
  "role": "ADMIN",
  "active": true,
  "createdAt": "2026-01-30T10:00:00",
  "lastLoginAt": null
}
```

**Note:** The admin user will be automatically created when you start the Spring Boot application with:
- Username: `admin`
- Password: `admin123`

### 2. Projects Collection

**Collection Name:** `projects`

**Sample Documents:**
```json
[
  {
    "title": "E-Commerce Platform",
    "description": "A modern e-commerce solution with real-time inventory management",
    "category": "Web Development",
    "technologies": ["React", "Node.js", "MongoDB"],
    "imageUrl": "/uploads/project1.jpg",
    "featured": true,
    "completedDate": "2026-01-15T00:00:00",
    "clientName": "TechStore Inc",
    "projectUrl": "https://example.com/project1"
  },
  {
    "title": "Mobile Banking App",
    "description": "Secure mobile banking application with biometric authentication",
    "category": "Mobile Development",
    "technologies": ["React Native", "Firebase", "Node.js"],
    "imageUrl": "/uploads/project2.jpg",
    "featured": true,
    "completedDate": "2026-01-10T00:00:00",
    "clientName": "FinanceBank",
    "projectUrl": "https://example.com/project2"
  },
  {
    "title": "AI Dashboard Analytics",
    "description": "Machine learning powered analytics dashboard for business insights",
    "category": "Data Science",
    "technologies": ["Python", "TensorFlow", "React"],
    "imageUrl": "/uploads/project3.jpg",
    "featured": false,
    "completedDate": "2025-12-20T00:00:00",
    "clientName": "DataCorp",
    "projectUrl": "https://example.com/project3"
  }
]
```

### 3. Clients/Leads Collection

**Collection Name:** `clients`

**Sample Documents:**
```json
[
  {
    "name": "John Smith",
    "email": "john.smith@example.com",
    "phone": "+1-555-0123",
    "company": "Tech Innovations Inc",
    "projectType": "Web Development",
    "budget": "10000-25000",
    "timeline": "2-3 months",
    "description": "Need a custom CRM system for our sales team",
    "status": "NEW",
    "submittedAt": "2026-01-28T14:30:00",
    "notes": null
  },
  {
    "name": "Sarah Johnson",
    "email": "sarah.j@startup.com",
    "phone": "+1-555-0456",
    "company": "StartupXYZ",
    "projectType": "Mobile App",
    "budget": "25000-50000",
    "timeline": "3-6 months",
    "description": "Looking to develop a social networking mobile app",
    "status": "CONTACTED",
    "submittedAt": "2026-01-25T10:15:00",
    "notes": "Follow up scheduled for next week"
  }
]
```

### 4. Contact Submissions Collection

**Collection Name:** `contactSubmissions`

**Sample Documents:**
```json
[
  {
    "name": "Michael Brown",
    "email": "michael.b@example.com",
    "subject": "Partnership Inquiry",
    "message": "I'm interested in discussing a potential partnership opportunity.",
    "submittedAt": "2026-01-29T16:45:00",
    "read": false
  },
  {
    "name": "Emily Davis",
    "email": "emily.davis@company.com",
    "subject": "Project Consultation",
    "message": "Would like to schedule a consultation for our upcoming project.",
    "submittedAt": "2026-01-28T09:20:00",
    "read": true
  }
]
```

### 5. Newsletter Subscribers Collection

**Collection Name:** `subscribers`

**Sample Documents:**
```json
[
  {
    "email": "subscriber1@example.com",
    "subscribedAt": "2026-01-20T12:00:00",
    "active": true
  },
  {
    "email": "subscriber2@example.com",
    "subscribedAt": "2026-01-22T15:30:00",
    "active": true
  },
  {
    "email": "subscriber3@example.com",
    "subscribedAt": "2026-01-25T08:45:00",
    "active": true
  }
]
```

## Using mongosh (MongoDB Shell)

1. Install mongosh: https://www.mongodb.com/docs/mongodb-shell/install/
2. Connect to your database:
```bash
mongosh "mongodb+srv://flipr_drive_test:ua2SHItzVOAxwjzU@cluster0.59vmccn.mongodb.net/fliprdb"
```

3. Insert sample projects:
```javascript
db.projects.insertMany([
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "/uploads/project1.jpg",
    featured: true,
    completedDate: new Date("2026-01-15"),
    clientName: "TechStore Inc",
    projectUrl: "https://example.com/project1"
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    category: "Mobile Development",
    technologies: ["React Native", "Firebase", "Node.js"],
    imageUrl: "/uploads/project2.jpg",
    featured: true,
    completedDate: new Date("2026-01-10"),
    clientName: "FinanceBank",
    projectUrl: "https://example.com/project2"
  }
]);
```

4. Insert sample clients:
```javascript
db.clients.insertMany([
  {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1-555-0123",
    company: "Tech Innovations Inc",
    projectType: "Web Development",
    budget: "10000-25000",
    timeline: "2-3 months",
    description: "Need a custom CRM system for our sales team",
    status: "NEW",
    submittedAt: new Date(),
    notes: null
  }
]);
```

## Verification

After inserting data, verify by running:
```javascript
// Count documents in each collection
db.admins.countDocuments()
db.projects.countDocuments()
db.clients.countDocuments()
db.contactSubmissions.countDocuments()
db.subscribers.countDocuments()

// View sample data
db.projects.find().limit(3)
db.clients.find().limit(3)
```

## Important Notes

1. **Admin User**: Will be automatically created when you start the Spring Boot application
   - Username: `admin`
   - Password: `admin123`

2. **Update MongoDB URI**: Make sure the connection string in `application.properties` matches your actual MongoDB Atlas cluster

3. **Security**: Change the default admin password in production!

4. **Image URLs**: Update the imageUrl paths to match your actual uploaded files or use placeholder images

5. **Date Format**: MongoDB stores dates in ISODate format. The Java application handles this automatically.
