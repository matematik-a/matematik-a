@echo off

for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8000') do taskkill /f /pid %%a

:: 1. Skift arbejdsmappe til der hvor batch-filen er gemt
cd /d "%~dp0"

:: 2. Start dit program i baggrunden (erstat med 'min-hjemmeside.exe' hvis det er en exe-fil)
start "" "compileDenoWin.exe"

:: 3. Vent 2 sekunder på at Deno-serveren starter
timeout /t 2 /nobreak >nul

:: 4. Åbn standardbrowseren på localhost
start http://localhost:8000
