@echo off
echo Verificando Node.js...
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Node.js no está instalado. Por favor, instala Node.js primero.
    pause
    exit /b 1
)

echo Verificando npm...
where npm >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo npm no está instalado. Por favor, instala Node.js primero.
    pause
    exit /b 1
)

echo Instalando dependencias...
call npm install
if %ERRORLEVEL% neq 0 (
    echo Error al instalar las dependencias.
    pause
    exit /b 1
)

echo Instalando TailwindCSS...
call npx tailwindcss init -p
if %ERRORLEVEL% neq 0 (
    echo Error al instalar TailwindCSS.
    pause
    exit /b 1
)

echo.
echo Instalación completada exitosamente!
echo.
echo Para iniciar la aplicación, ejecuta:
echo npm start
pause 