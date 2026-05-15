# først lukker jeg eventuelle forbindelser på port 8000
kill -9 $(lsof -t -i:8000) 2>/dev/null

#!/bin/bash
cd "$(dirname "$0")"

# 1. Åbn dit program i baggrunden (&)
./compileDenoApple &

# 2. Vent et par sekunder for at sikre at webserveren er startet
sleep 2

# 3. Åbn default browser på localhost:8000
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open http://localhost:8000
else
    # Linux
    xdg-open http://localhost:8000
fi
