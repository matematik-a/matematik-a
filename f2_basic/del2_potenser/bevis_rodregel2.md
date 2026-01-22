## Rodreglen og brøkeksponenter

> **Bemærk (vigtigt):**  
> Dette er ikke et “bevis fra bunden”.  
> I praksis hænger rodreglen tæt sammen med, hvordan man **definerer** brøkeksponenter.  
> Derfor er teksten her mest en forklaring på, hvorfor reglen er naturlig og giver mening.

Vi vil gerne vise rodreglen for n-te rødder:

$$
\sqrt[n]{a} = a^{1/n}
$$

Vi opdeler i tilfælde, fordi definitionen af $\sqrt[n]{a}$, og dermed også $a^{1/n}$, afhænger af, om $a$ er positiv eller negativ:

- **Tilfælde 1:** $a>0$ og $n\in\mathbb{N}$  alle n-te rødder findes i $\mathbb{R}$
- **Tilfælde 2:** $a<0$ og $n$ er **ulige** ulige rødder findes i $\mathbb{R}$

---

## Tilfælde 1: $a>0$ og $n\in\mathbb{N}$

Lad $a$ være et positivt reelt tal og $n$ et naturligt tal.

Vi går ud fra, som en del af potensreglerne, at man kan regne med brøkeksponenter sådan her:

$$
(a^m)^n = a^{m\cdot n}
$$

Sætter vi $m=\frac{1}{n}$, får vi:

$$
(a^{1/n})^n = a^{(1/n)\cdot n} = a^1 = a
$$

Altså gælder:

$$
(a^{1/n})^n = a
$$

Samtidig er den n-te rod defineret sådan, at $\sqrt[n]{a}$ er det **positive** tal, der opfylder:

$$
(\sqrt[n]{a})^n = a
$$

Nu har vi altså to **positive** tal, $a^{1/n}$ og $\sqrt[n]{a}$, som begge opfylder ligningen:

$$
x^n = a
$$

Men for $x>0$ er funktionen $f(x) = x^n$ strengt voksende, så ligningen $x^n=a$ har **højst én** positiv løsning.

Derfor må:

$$
a^{1/n} = \sqrt[n]{a}
$$

---

## Tilfælde 2: $a<0$ og $n$ er ulige

Lad $a$ være et negativt reelt tal og $n$ et ulige naturligt tal.

Når $n$ er ulige, er funktionen $f(x)=x^n$ strengt voksende på hele $\mathbb{R}$.
Derfor kan ligningen $x^n=a$ højst have én reel løsning.

Hvis a<0 er løsningen ikke være ikke-negativ, og vi må have $x<0$.

Da $x^n$, for ulige $n$, kan antage alle reelle værdier, findes der også en løsning,
og den er altså entydig og negativ.

Den n-te rod $\sqrt[n]{a}$ er netop den løsning, altså:

$$
(\sqrt[n]{a})^n = a
$$

Og på samme måde, for ulige $n$, tænker vi $a^{1/n}$ som det tal, der opfylder:

$$
(a^{1/n})^n = a
$$

Da løsningen til $x^n=a$ er entydig, må de to tal være ens:

$$
a^{1/n} = \sqrt[n]{a}
$$

---

## Konklusion

Vi har dermed vist rodreglen i de tilfælde, hvor den giver mening i de reelle tal:

- For $a>0$ og alle $n\in\mathbb{N}$
- For $a<0$ og ulige $n$

$$
\boxed{\sqrt[n]{a} = a^{1/n}}
$$
