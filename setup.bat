@echo off
echo ================================
echo Flipr Drive Project Setup
echo ================================
echo.

:: Check if Java is installed
echo [1/4] Checking Java installation...
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Java is not installed or not in PATH
    echo Please install Java 17 or higher
    exit /b 1
)
echo ✓ Java is installed

:: Check if Node.js is installed
echo [2/4] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js 18 or higher
    exit /b 1
)
echo ✓ Node.js is installed

:: Install Frontend Dependencies
echo.
echo [3/4] Installing Frontend dependencies...
cd Frontend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install frontend dependencies
    exit /b 1
)
echo ✓ Frontend dependencies installed
cd ..

:: Build Backend
echo.
echo [4/4] Building Backend...
cd Backend\flipr_backend
call mvnw.cmd clean install -DskipTests
if %errorlevel% neq 0 (
    echo ERROR: Failed to build backend
    exit /b 1
)
echo ✓ Backend built successfully
cd ..\..

echo.
echo ================================
echo Setup Complete! 🎉
echo ================================
echo.
echo To start the application:
echo.
echo 1. Start Backend (in one terminal):
echo    cd Backend\flipr_backend
echo    mvnw.cmd spring-boot:run
echo.
echo 2. Start Frontend (in another terminal):
echo    cd Frontend
echo    npm run dev
echo.
echo 3. Access the application:
echo    Frontend: http://localhost:5173
echo    Admin Login: http://localhost:5173/admin/login
echo    Backend API: http://localhost:8080/api
echo.
echo Demo Admin Credentials:
echo    Username: admin
echo    Password: admin123
echo.
pause
