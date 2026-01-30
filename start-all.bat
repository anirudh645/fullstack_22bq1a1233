@echo off
echo ================================
echo Starting Full Stack Application
echo ================================
echo.
echo This will start both Backend and Frontend servers
echo.

:: Start Backend in a new window
start "Flipr Backend" cmd /k "cd Backend\flipr_backend && mvnw.cmd spring-boot:run"

:: Wait a bit for backend to start
timeout /t 5 /nobreak

:: Start Frontend in a new window
start "Flipr Frontend" cmd /k "cd Frontend && npm run dev"

echo.
echo ================================
echo Both servers are starting!
echo ================================
echo.
echo Backend: http://localhost:8080
echo Frontend: http://localhost:5173
echo Admin Login: http://localhost:5173/admin/login
echo.
echo Demo Credentials:
echo   Username: admin
echo   Password: admin123
echo.
echo Press any key to open the frontend in your browser...
pause >nul

start http://localhost:5173
