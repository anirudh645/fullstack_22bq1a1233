@echo off
echo ================================
echo Starting Flipr Drive Backend
echo ================================
echo.

cd Backend\flipr_backend

echo Starting Spring Boot application...
echo Backend will be available at: http://localhost:8080
echo.
echo Demo Admin Credentials:
echo   Username: admin
echo   Password: admin123
echo.

call mvnw.cmd spring-boot:run
