# Forløb 4 - Vektorer i 2D

## Del 3 :  Vektorer i ?

-----------------------------------------------------------------------------

### Materiale fra plus A, systime - Kap 12.1.2

#### Definition af basisvektorer

#### Beviser for regneregler med vektorer

#### Bevis for tværvektor

#### Bevis for længde af vektor

<!-- javascript, der tegner et grid område som jeg kan anvende til at visualisere vektorer på tavlen med projektoren -->

<canvas id="myCanvas" width="400" height="400" style="border:1px solid #000000;">   
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

> Hvad er basisvektorer og hvordan kan de bruges til vektorer?

> Hvad er tværvektoren og hvordan ser formlen ud for den?

> Hvad er længden af en vektor og hvordan beregnes den?

-----------------------------------------------------------------------------

## 1. Modul : Lav følgende beviser

Cirka 15 til 20  minutter til hvert bevis - jeg vælger løbende hvem der gennemgår beviserne for mig

***Tag udgangspunkt i - Definition 4 : Vektoreren bekrevet vha. basisvektorer - i kapitel 12.1.2***

> 1. Bevis for regneregel addition
> 2. Bevis for regneregel subtraktion
> 3. Bevis for regneregel multiplikation med skalar
> 4. Bevis for tværvektor
> 5. Bevis for længde af vektor

-----------------------------------------------------------------------------

## 2. Modul : 