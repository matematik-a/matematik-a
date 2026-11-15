# 2G - Forløb 11 del.9
## Emne : Differentiation af kendte funktioner
### Materiale : PlusA Systime kap 13.6

----------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------

# Regneregler for differentiation : 

Vi mangler en vigtig regel, den sammensatte funktion

<details>
  <summary><h2>Bevis :  Hvad er differentialkvotien af en sammensat funktion - Kædereglen</h2></summary>

Vi ønkser at bevise følgende,- dette kaldes ***kædereglen*** :

vigtig detalje : læg mærke til at dette bevis indeholder en lille skjult fejl....prøv at se om du kan se den

$ \Large (f(g(x)))' = f'(g(x)) \cdot g'(x) $


differenskvotienten er

$\Large \frac{f(g(x+h))-f(g(x))}{h}  $

men kan omskrives til

$ \Large \frac{f(g(x+h))-f(g(x))}{h} \cdot \frac{g(x+h)-g(x)}{g(x+h)-g(x)}  = \Large \frac{f(g(x+h))-f(g(x))}{g(x+h)-g(x)} \cdot \frac{g(x+h)-g(x)}{h}  $

I det vi antager at både f og g er differentiable, kan vi nu tage grænseværdien når h går mod 0
Her ses at det første led er f'(g(x)) og det andet led er differentialkvotienten for g'(x)

dvs. 

$ \Large (f(g(x)))' = f'(g(x)) \cdot g'(x) $

</details>

----------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------

# Differentiation af de mest kendte funktioner :


I kapitlet er der gennemgået hvordan man differentierer de mest kendte funktioner, og der er lavet en oversigt over de forskellige funktioner og deres afledte funktioner.

Men jeg har her valgt at vise jer nogle andre beviser på hvordan man kan differentiere de mest kendte funktioner.</br>
Jeg har lagt vægt på at jeg kun bruger information,- "kendt af os".

------------------------------------------------------------

<details>
  <summary><h2>Bevis : Potensfunktion differentieret</h2></summary>

Vi ønsker at bevise at : $ \Large f(x) = x^n $ differentieret er   $ \Large f'(x) = n \cdot x^{n-1} $ 

## 1 - differenskoefficenten skrives op:

$ \LARGE \frac{(x+h)^n-x^{n}}{h} $

## 2 - det første led i tælleren er :

$ \Large (x+h)^n = (x + h) \cdot ( x + h) \cdot ( x + h) ... ( x + h) = $

Ved kun at kigge på de mulige kombinationsmuligheder der er når man ganger de forskellige led sammen i paranteserne ses det at:</br>
Der forkommer tydeligvis kun led af typen $ x^n$, da den eneste måde at få dette led på er at multiplicere x fra alle paranteserne med hinanden. </br>
Der forkommer n led af typen $ h \cdot x^{n-1}$, da der i hver parantes er et h og man ved at gange dette h med alle x fra de andre paranteser, kan gøre dette på n måder.</br>
Tilsidst fokommer der forskellige led hvor h har en eksponent der er 2 eller mere.</br>
Derved fåes:

$ \Large x^n + n \cdot h \cdot x^{n-1} + ( \text{ forskellige led } h^k \cdot x^{n-k} \text{, hvor k>=2 } ) $

## 3 - differenskoefficenten skrives op igen, og reduceres : 

$ \LARGE \frac{( x^n + n \cdot h \cdot x^{n-1} + ( \text{ forskellige led } h^k \cdot x^{n-k} \text{, hvor k>=2 } ) ) - x^{n}}{h}   =   
\LARGE \frac{ n \cdot h \cdot x^{n-1} + h \cdot ( \text{ forskellige led } h^k \cdot x^{n-k} \text{, hvor k>=1 } ) }{h}  =
\LARGE  n \cdot x^{n-1} + ( \text{ forskellige led } h^k \cdot x^{n-k} \text{, hvor k>=1 }) $

## 4 - differentialkoefficenten beregnes : 

$ \LARGE f'(x) = \lim_{h \rightarrow 0} ( n \cdot x^{n-1} + ( \text{ forskellige led } h^k \cdot x^{n-k} \text{, hvor k>=1 }) ) = n \cdot x^{n-1}$

</details>

----------------------------------------------------------------------------------------------------------------------

<details>
  <summary><h2>Bevis : Eksponential funktion med grundtal e</h2></summary>

Vi ønsker at bevise at : $ \Large f(x) = e^x $ differentieret er   $ \Large f'(x) = e^x $

## 1 - differenskoefficenten skrives op:

$ \LARGE \frac{e^{x+h}-e^{x}}{h} = \LARGE \frac{e^x \cdot e^h - e^x}{h} = \LARGE \frac{e^x \cdot ( e^h - 1)}{h} = e^x \cdot \LARGE \frac{e^h - 1}{h} $

## 2 - vi ønsker at vise at $ \Large \lim_{h \rightarrow 0} \frac{e^h - 1}{h} = 1 $

Vi laver følgende substitution af h med z:

$\Large z =  e^h - 1 $

Dvs.

$\Large z =  e^h - 1  \leftrightarrow z + 1 = e^h  \leftrightarrow  ln(z + 1) = h $

Udtrykket er nu

$\LARGE \lim_{z \rightarrow 0} \frac{z}{ln(z + 1)} = \lim_{z \rightarrow 0} \frac{1}{ln(z + 1)\cdot \frac{1}{z}} = \lim_{z \rightarrow 0} \frac{1}{ln((z + 1)^{1/z})} $

Det ses at udtrykket inde i ln er gående imod "e" når z går imod 0, da dette jo Jakob Bernoullies skrivemåde for tallet "e":  

$\LARGE \lim_{z \rightarrow 0} \frac{1}{ln((z + 1)^{1/z})} = \lim_{z \rightarrow 0} \frac{1}{ln(e)} = \lim_{z \rightarrow 0} \frac{1}{1} = 1 $

## 4 - differentialkoefficenten beregnes : 

$ \LARGE f'(x) = \lim_{h \rightarrow 0} e^x \cdot \LARGE \frac{e^h - 1}{h} = e^x \cdot 1 = e^x $

</details>

----------------------------------------------------------------------------------------------------------------------

<details> 
 <summary><h2>Bevis : Eksponential funktion med grundtal a</h2></summary>

FRA BOGEN

$ \Large a^{x} = e^{ln(a) \cdot x} $

Man kan differentiere ovenstående sammensatte funktion ved at anvende "kædereglen" som set ovenfor:


$ (e^{ln(a) \cdot x})' = e^{ln(a) \cdot x} \cdot ln(a) = a^x \cdot ln(a) $


</details>

----------------------------------------------------------------------------------------------------------------------

<details> 
 <summary><h2>Bevis : Naturlig logaritmefunktion</h2></summary>

SE BOGEN


</details>

----------------------------------------------------------------------------------------------------------------------


<details> 
 <summary><h2>Bevis : Logaritmefunktion med base "b" </h2></summary>

PRØV SELV


</details>

----------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------

## OPGAVE 1 : ØVE ALLE BEVISER SAMMEN MED EN MAKKER ... SKAL KUNNE VISES UDENAD 
næste gang skal udvalge personer lave beviserne på tavlen

## OPGAVE 2 : ØVELSE 13.6.4 og ØVELSE 13.6.5 
brug listen over kendte funktioner i bogen



