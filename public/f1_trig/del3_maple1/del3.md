<!-- MathJax loader -->
<script>
window.MathJax = {
  tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
  svg: { fontCache: 'global' }
};
</script>
<script id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<!-- Styling så alle tabelceller bliver topstilede -->
<style>
  table td {
    vertical-align: top;
  }
  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
}
* {
    color: #000000 !important;
}


</style>

<!-- ----------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------- -->


# Matematik A - Trigonometri - del 2
# Maple træning 1 

---


---

<details>
  <summary><center>Intro til Maple</br></center></summary>

# Vigtige udvalgte kommandoer, og vigtig generel info om Maple

  ## Del 1: De vigtigste kommandoer i starten af dokumentet

  Hver gang du starter på en ny opgave eller aflevering, bør du altid starte med at køre disse kommandoer på hver deres **Math-linje**. Det nulstiller Maples hukommelse og indlæser de rigtige værktøjer:

  ```maple
  restart
  ```
  *(Nulstiller alle gemte variabler, så gamle udregninger ikke spøger i dit nye dokument).*

  ```maple
  with(Gym):
  ```
  *(Indlæser Gym-pakken, som giver adgang til nem regression, plots og trigonometri i grader. Husk kolon `:` til sidst, så du skjuler den lange liste af kommandoer).*

  ---

  ## Del 2: Hvordan virker Maple? (Det minder om programmering)

  Maple er ikke bare en lommeregner; det minder meget om et **programmeringssprog**. Det er vigtigt at forstå to grundlæggende ting:

  * **Linjer eksekveres i rækkefølge:** Maple gør kun noget, når du trykker **Enter** på en Math-linje (det kaldes at *eksekvere*). Hvis du ændrer i en linje oppe i dit dokument, opdager Maple det ikke, før du trykker Enter på den linje igen.
  * **Variabler gemmes i hukommelsen:** Når du skriver `a := 5` og trykker Enter, husker Maple, at $a$ er 5 i *hele* dokumentet. 

  ### Hold orden på dine opgaver (Undgå computercrash og fejl)
  Fordi Maple husker alt, kan du nemt komme til at blande dine opgaver sammen. Hvis du har brugt variablen $a$ i Opgave 1, og du skal bruge $a$ til noget andet i Opgave 2, bliver Maple forvirret.

  1. **Brug sektioner:** Del altid dine afleveringer op i sektioner (f.eks. en sektion per opgave). Det gør dit dokument overskueligt.
  2. **Husk `restart`:** Start *altid* en ny opgave eller sektion med en `restart`-kommando. Det renser Maples hukommelse, så du starter på en frisk uden gamle variabler, der driller.

  ---

  ## Del 3: Det helt grundlæggende

  * **Definere en variabel:** `a := 5`
    *(Læg mærke til `:=`. Det betyder "sæt lig med" i Maple).*
  * **Definere en funktion:** `f(x) := 2*x + 3`
    *(Brug altid `*` for at gange. Hvis du bare skriver `2x`, kan Maple ikke forstå det).*
  * **Beregne en værdi:** `f(4)`
    *(Giver værdien af funktionen, hvor x er 4).*
  * **Hente forrige resultat:** `%`
    *(Bruges til at regne videre på det tal, Maple lige har spyttet ud).*

  ## Del 4: Ligningsløsning

  * **Løse en ligning præcist:** `solve(f(x) = 11, x)`
    *(Løser ligningen med hensyn til x. Giver ofte svar som brøker eller kvadratrødder).*
  * **Løse numerisk (Gym-pakken):** `IntervalSolve(f(x) = 11, x)`
    *(Rigtig god til svære ligninger eller uligheder. Kan begrænses til et interval, f.eks. `x = 0..90`).*

  ## Del 5: Trigonometri (Cos, Sin og Tan)

  Når Gym-pakken er indlæst, skelner Maple mellem grader og radianer ved hjælp af store og små bogstaver.

  ### Regn i GRADER (Trekantsberegning)
  Brug stort begyndelsesbogstav for at regne i grader:
  * **Cosinus:** `Cos(60)`
  * **Sinus:** `Sin(30)`
  * **Tangens:** `Tan(45)`
  * **Finde en vinkel:** `IntervalSolve(Sin(A) = 0.5, A = 0..90)`

  ### Regn i RADIANER (Trigonometriske funktioner)
  Hvis du skal arbejde med sinus- eller cosinusfunktioner (hvor x-aksen er i radianer), skal du bruge små bogstaver:
  * **Cosinus:** `cos(Pi)`
  * **Sinus:** `sin(Pi/2)`
  * **Tangens:** `tan(Pi/4)`
  * **Finde en løsning i radianer:** `IntervalSolve(sin(x) = 0.5, x = 0..2*Pi)`

  *Tip: Skriv `Pi` med stort P i Maple for at få det rigtige $\pi$-tegn.*

  ## Del 6: Plots og grafer

  * **Tegne en standard graf:** `plot(f(x), x = -10 .. 10)`
    *(Tegner f(x) i et koordinatsystem, hvor x-aksen går fra -10 til 10).*
  * **Tegne med pænt layout (Gym-pakken):** `GymPlot(f(x), x = -10 .. 10)`
    *(Laver automatisk et pænere koordinatsystem med tydelige akser og gitternet, som passer til en aflevering).*

  ## Del 7: Regression (Gym-pakken)

  Definer først dine data i to lister med firkantede parenteser, f.eks.:
  `X := [` og `Y := [`

  * **Lineær regression ($y = ax+b$):** `LinReg(X, Y)`
  * **Eksponentiel regression ($y = b \cdot a^x$):** `ExpReg(X, Y)`
  * **Potensregression ($y = b \cdot x^a$):** `PotReg(X, Y)`
  * **Polynomiel regression (f.eks. 2. grad):** `PolyReg(X, Y, 2)`

  *(Kommandoerne laver både forskrift, graf og residualplot automatisk).*

  ---

  ## 💡 4 vigtige genveje
  1. **F5:** Den absolut vigtigste tast. Skifter lynhurtigt den markerede linje eller markør mellem **Tekst**, **Math (executable)** og **Math (non-executable)**.
  2. **Ctrl + R (Mac: Cmd + R):** Tvinger en ny linje til at være en **Math-linje**.
  3. **Ctrl + T (Mac: Cmd + T):** Tvinger en ny linje til at være en **Tekst-linje**.
  4. **Alt + Enter:** Giver dig resultatet som et **decimaltal** (numerisk) i stedet for en brøk eller eksakt værdi.

</details>


---------------

<details>
  <summary><center>Screeningen laves i Maple</br></center></summary>

# Download og lav Screeningen 2025 i Maple

<a href="/download?file=/del3_maple1/screening25.pdf" download>Download Screening 25</a>


</details>
</br>


-----------------



<details>
  <summary><center>Øvelse : trigonometri/geometri tegning i Maple</center></summary>

Det er en dårlig ide at lave geometri tegninger i Maple, brug som udgangspunkt Geogebra istedet og lav screenshots du kopierer ind i Maple. 

Her er dog alligevel en lille øvelse i at tegne i Maple.

<a href="/download?file=/del3_maple1/Geo1.mw" download>Download Geometri 1</a>

</details>
</br>


-----------------
-----------------

## Lektier til næste gang : samme som til idag


