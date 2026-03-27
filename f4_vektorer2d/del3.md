# Forløb 4 - Vektorer i 2D

## Del 3 : Definition af basisvektorer /  bevis regneregler, tværvektor og længde

-----------------------------------------------------------------------------

### Materiale fra plus A, systime - Kap 12.1.2

<!-- javascript, der tegner et grid område som jeg kan anvende til at visualisere vektorer på tavlen med projektoren -->

<canvas id="myCanvas" width="300" height="300" style="border:1px solid #000000;">   
</canvas>
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// Tegn grid
for (var x = 0; x <= 400; x += 20) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 400);
}
for (var y = 0; y <= 400; y += 20) {
    ctx.moveTo(0, y);
    ctx.lineTo(400, y);
}   
ctx.strokeStyle = "#ddd";
ctx.stroke();
</script>



-----------------------------------------------------------------------------

Vigtigste forudsætninger for at lave beviserne 

> *Spørgsmål 1: Hvad er basisvektorer og hvordan kan de bruges til vektorer?*

> *Spørgsmål 2: Hvad er tværvektoren og hvordan ser formlen ud for den?*

> *Spørgsmål 3: Hvad er længden af en vektor og hvordan beregnes den?*

> *Spørgsmål 4: Hvordan er vores nye "legeplads" $\mathbb{R}^2$ forskellig fra $\mathbb{R}$?*

-----------------------------------------------------------------------------

## Første Del : lav følgende beviser -> god ide at øve , da jeg giver karakterer NÆSTE gang vi beviser

I får cirka 15 minutter til hvert bevis - jeg vælger løbende hvem der gennemgår beviserne for mig

***Tag udgangspunkt i - Definition 4 : Vektoreren bekrevet vha. basisvektorer - i kapitel 12.1.2***

> Bevis 1 - for regneregel addition

> Bevis 2 - for regneregel subtraktion

> Bevis 3 - for regneregel multiplikation med skalar

> Bevis 4 - for tværvektor

> Bevis 5 - for længde af vektor

-----------------------------------------------------------------------------

## Anden Del : lav øvelse 12.1.11 og 12.1.16

> I får resten af timen til at lave disse øvelser



