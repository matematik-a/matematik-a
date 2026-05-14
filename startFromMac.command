#!/bin/bash

cd "$(dirname "$0")"

# 1. Åbn dit program i baggrunden (&)
# Erstat 'firefox' med 'code', 'chromium', eller stien til dit program
./compileDenoApple &

# 2. Vent et par sekunder for at sikre at webserveren er startet
# Du kan justere '2' til flere sekunder, hvis det er nødvendigt
sleep 2

# 3. Åbn default browser på localhost:8000
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open http://localhost:8000
else
    # Linux
    xdg-open http://localhost:8000
fi
