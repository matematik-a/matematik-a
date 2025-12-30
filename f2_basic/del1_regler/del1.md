# Forløb 2 - Tal og Ligninger 

## Del 1 :  Grundlæggende om mængder og regneregler

-----------------------------------------------------------------------------

### Materiale fra plus A, systime:
- 2.1.4 Talmængder
- 2.1.1 Brøker
- 2.1.3 Reduktion

-----------------------------------------------------------------------------

### Talmængder

Hele matematikken bygger på, at vi arbejder med forskellige talmængder—og at reglerne for regning afhænger af, hvilken mængde vi er i.
Det er vigtigt, fordi det afgør, hvilke regneoperationer der giver mening, og om en ligning overhovedet kan have en løsning.

I gymnasiet arbejder vi primært med følgende talmængder:
- Naturlige tal: \( \mathbb{N} = \{1, 2, 3, \ldots\} \)
- Hele tal: \( \mathbb{Z} = \{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\} \)
- Rationelle tal:  \( \mathbb{Q} = \frac{a}{b} \mid a, b \in \mathbb{Z}, b \neq 0 \)
- Reelle tal: \( \mathbb{R} \) indeholder alle tal på tallinjen, inkl. irrationelle tal som \( \sqrt{2} \) og \( \pi \)
- Komplekse tal: \( \mathbb{C} = \{a + bi \mid a, b \in \mathbb{R}, i^2 = -1\} \)

Men udover disse talmængder kan man indenfor de reelle tal kigge på delmængder som:
- Irrationelle tal: \( \mathbb{I} = \mathbb{R} \setminus \mathbb{Q} \), tal der ikke kan skrives som brøk
- Algebriske tal: \( \mathbb{A} \) Tal der er løsninger til polynomielle ligninger med rationale koefficienter.
- Transcendente tal: \( \mathbb{T} \) Tal der ikke er algebriske, som \( e \) og \( \pi \).

### Regneregler og regnehierarki 
Når vi regner med tal, er der nogle grundlæggende regler, vi skal følge for at sikre, at vores beregninger er korrekte. Disse regler kaldes regneregler og inkluderer:

De tre regnelove, som gælder for addition og multiplikation i alle talmængder - kun vist for addition:
- **Associative regler**: "gruppering, må man sætte parantes uden at ændre rækkefølge" \( \big{(} a + b \big{)} + c  =   a +  \big{(} b  + c \big{)}   \)
- **Kommutative regler**: "rækkefølge, må man ændre rækkefølgen uden at ændre resultatet" \( a + b = b + a \) 
- **Distributive regler**: "fordeling, kan man gange ind i parentes" \( a \cdot \big{(} b + c \big{)} = a \cdot b + a \cdot c \)

Derudover er der nogle specielle regler om **neutrale (identitets-)** og **inverse** elementer, som er knyttet til hver regneoperation.  
Her for addition og multiplikation:
- **Identitetsregler (neutral-element):** \(a + 0 = a\) og \(a \cdot 1 = a\)
- **Inversregler:** \(a + (-a) = 0\) og \(a \cdot \frac{1}{a} = 1\) for \(a \neq 0\)  
  *(Bemærk: \(0\) har ingen multiplikativ invers.)*

Derudover er der et regnehierarki, som bestemmer rækkefølgen af operationer i en udtryk:
1. Parenteser
2. Eksponenter : potenser og rødder
3. Multiplikation og division : fra venstre mod højre
4. Addition og subtraktion : fra venstre mod højre

Derudover gælder der specielle regler for brøker:
- For at lægge brøker sammen, skal de have samme nævner: \( \frac{a}{c} + \frac{b}{c} = \frac{a + b}{c} \)
- For at trække brøker fra hinanden, skal de også have samme nævner: \( \frac{a}{c} - \frac{b}{c} = \frac{a - b}{c} \)
- For at gange brøker, ganger man tællerne og nævnerne: \( \frac{a}{b} \cdot \frac{c}{d} = \frac{a \cdot c}{b \cdot d} \)
- For at dividere brøker, ganger man med den omvendte: \( \frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c} = \frac{a \cdot d}{b \cdot c} \) for \( c \neq 0 \)

--------------------------------------------------

[Øvelser]( opgaver1.md )
