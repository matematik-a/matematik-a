
## Del 8 A: Maple træning - lignings løsning 

-----------------------------------------------------------------------------

### Materiale fra plus A, systime - Kap 7.3

-----------------------------------------------------------------------------

I dag træner vi i at løse ligninger i Maple. Det er en vigtig færdighed at kunne bruge Maple til at løse ligninger, da det kan hjælpe jer med at løse mere komplekse problemer, som I måske er svært at løse manuelt.

Og desuden er Maple et tilladt værktøj til eksamen, så det er vigtigt at I er fortrolige med det!

-----------------------------------------------------------------------------

Brugbare Maple kommandoer :

`solve(ligning, variabel)` - Løser en ligning for en given variabel.

`solve({ligning1, ligning2, ...}, {variabel1, variabel2, ...}, explicit);` - Løser et system af ligninger for flere variabler. `explicit` tvinger Maple til at give ALLE løsningerne.

`eval(udtryk, variabel = værdi)` - Evaluerer et udtryk ved at erstatte en variabel med en bestemt værdi.

`discrim(polynomium, variabel)` - Beregner diskriminanten for et polynomium, hvilket kan hjælpe med at bestemme antallet af løsninger.

`implicitplot(udtryk)` - tegner grafen for et eller fler implicit udtryk, hvilket kan være nyttigt for at visualisere løsningerne.

`lhs(udtryk)` og `rhs(udtryk)` - Returnerer henholdsvis venstre og højre side af et udtryk, hvilket kan være nyttigt for at manipulere ligninger.

`evalf(udtryk)` - Evaluerer et udtryk og retunerer et numerisk resultat, hvilket kan være nyttigt for at få en mere præcis løsning.

-----------------------------------------------------------------------------

### Jeg laver følgende eksempel på opgaveløsning i maple :

Tangenten linje med ligningen $y = a \cdot x + 2$ tangerer cirklen med ligningen $(x - 3)^2 + (y - 4)^2 = 5$. Find værdien af "a".

-----------------------------------------------------------------------------

#### Opgave A

Beregn cirkel radius og centrum ud fra tre punkter, der alle ligger på cirklens periferi:

$A=(1,2), B=(3,4), C=(5,7)$

#### Opgave B

Find tangent der tangerer disse to cirkler:

$(x + 3)^2 + y^2 - 5 = 0$

$(x - 2)^2 + y^2 - 5 = 0$