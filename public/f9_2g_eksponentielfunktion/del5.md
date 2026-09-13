# 2G - Forløb 9 del.5

### Materiale : PlusA Systime, kap 3.6 + 3.7 + 10.4

------

## To-punkts bestemmelse af eksponentiel fkt., eksponentiel-regression og log-koordinatsystem.

--------------------------------------------------------------------------------------------------------------------------------------------

## 3.6 Bestemmelse af eksponentel funktion ud fra 2 punkter

Eftersom de eksponentiel-funktioner vi kigger på er på formen $ b \cdot a^x $ er det tydeligt at der kun skal to kendte punkter til at bestemmes a og b. Da vi på denne måde har 2 ligninger med 2 ubekendte:

<div style="border: 1px solid black; padding: 10px;">

Dette ligningssyetem skal løses :

$  y_0 = b \cdot a^{x_0} \wedge \large y_1 = b \cdot a^{x_1} $

</div>

</br>

--------------------------------------------------------------------------------------------------------------------------------------------

## 3.7 Eksponentiel-regression

Det er et krav i projektet at I skal bestemme de formler der er nødvendige for at kunne bestemme "a" og "b" for eksponentiel-funktionen.

I dette kapitel bruger man bare et værktøj til at bestemme regressionen, så fremhæves her hvordan man kan lave eksponentiel-regression i Maple med Gym-pakken:

<div style="border: 1px solid black; padding: 10px;">

```
with(Gym):

L1 := [1, 2, 3, 4]:

L2 := [2.5, 5.1, 10.2, 20.4]:

ExpReg(L1,L2)
```

</div>


for mere information, lav markering af ExpReg i Maple højre-klik og læs eksemplerne i forklaringen

--------------------------------------------------------------------------------------------------------------------------------------------

## 10.4 Logaritmiske koordinatsystemer

<img src="/f9_2g_eksponentielfunktion/log_scale.png" alt="Description" style="float: left; margin-right: 15px; max-width: 100%;">

<img src="/f9_2g_eksponentielfunktion/log_koordinatsystem.png" alt="Description" style="float: left; margin-right: 15px; max-width: 100%;">

<div style="clear: both;"></div>

### Hvad er en logaritmisk akse ?

På det første billede ses en visualisering af hvordan man konstruerer en traditionel logaritmisk akse vha. 10-tals-logaritmen.

Til højre på billedet ses den "lineære akse" som viser eksponenten eller x, denne akse har lige lang afstand imellem alle tal

Til venstre på billedet ses den "logaritmiske akse" hvor alle tal er $ y=10^x$, afstanden imellem hvert tal på denne akse fåes fra den "lineære akse" dvs. afstandene fra 0 svarer til "$log(y)$" og deraf dens navn "logaritmisk akse"

### Hvorfor er den smart ?

Hvis man plotter en eksponentielfunktion ind i et enkelt-logaritmisk koordinatsystem, vil alle punkterne ligge på en ret linje. Dette ses tydeligt nedenfor. 

Når man tager logaritmen på den logaritmiske akse, bliver eksponenten \(x\) til en faktor, \(\log(a)\) bliver linjens hældning, og \(\log(b)\) bliver skæringen med y-aksen.

Så ved at omregne eller transformere værdierne for a, b og y med logaritmen, kan man nu behandle eksponentielfunktionen som om den var en ret linje.

<div style="border: 1px solid black; padding: 10px;">

$ log(y) = log(b) + log(a) \cdot x $

</div>







--------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------

## Lav følgende opgaver - præsenteres næste gang

**3.6.4** Bestemmelse af eksponentielfunktion vha. to punkter

**3.7.1** Eksponentiel regresssion vha. maple eller andet værktøj

**10.4.3** Træning i logaritmiske akser

--------------------------------------------------------------------------------------------------------------------------------------------






