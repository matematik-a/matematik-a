# 2G - Forløb 11 del.3
## Emne : Grænseværdier fortsat & Projektudvidelse med grænseværdier
### Materiale : PlusA Systime kap 13.0 til 13.1

----------------------------------

----------------------------------

## Regneregler for grænseværdier

Vi talte ikke om det sidst, men gik ud fra der galt nogle regneregler for grænseværdier. Her er de vigtigste:


| Regel | Matematisk formel | Beskrivelse |
| :--- | :--- | :--- |
| **Konstant** | $\lim_{x \rightarrow a} k = k$ | Grænseværdien af en konstant er konstanten selv. |
| **Variabel** | $\lim_{x \rightarrow a} x = a$ | Grænseværdien af $x$ er lig med det punkt $a$, som $x$ går mod. |
| **Konstantfaktor** | $\lim_{x \rightarrow a} (k \cdot f(x)) = k \cdot \lim_{x \rightarrow a} f(x)$ | En konstant faktor $k$ kan sættes uden for grænseværdien. |
| **Sumregel** | $\lim_{x \rightarrow a} (g(x) + f(x)) = \lim_{x \rightarrow a} g(x) + \lim_{x \rightarrow a} f(x)$ | Grænseværdien af en sum er summen af grænseværdierne. |
| **Differensregel** | $\lim_{x \rightarrow a} (g(x) - f(x)) = \lim_{x \rightarrow a} g(x) - \lim_{x \rightarrow a} f(x)$ | Grænseværdien af en differens er differensen af grænseværdierne. |
| **Produktregel** | $\lim_{x \rightarrow a} (g(x) \cdot f(x)) = \lim_{x \rightarrow a} g(x) \cdot \lim_{x \rightarrow a} f(x)$ | Grænseværdien af et produkt er produktet af grænseværdierne. |
| **Kvotientregel** | $\lim_{x \rightarrow a} \frac{g(x)}{f(x)} = \frac{\lim_{x \rightarrow a} g(x)}{\lim_{x \rightarrow a} f(x)}$ | Grænseværdien af en brøk er kvotienten af grænseværdierne, såfremt $\lim_{x \rightarrow a} f(x) \neq 0$. |



## Omskrivning til gyldige grænseværdier

Sidst fik vi defineret grænseværdier og regnede på simple opgaver. Men hvilke overordnede regler gælder der fo HHVORNÅR vi laver omskrivninger, før man kan konkludere, at der er tale om en grænseværdi?

F.eks. er dette IKKE en rigtige måde at regne grænseværdien på:  

DETTE ER FORBUDT : $ \Large \lim_{x \to \infty } \frac{x + 5}{ x}  =  \frac{\infty}{\infty} = 1$

Se følgende tabel, som indeholder de udtryk, der SKAL omskrives (venstre kolonne), og de udtryk, I gerne må bruge til at finde en logisk grænseværdi (højre kolonne):

| ikke gyldige "grænse-udtryk" - omskriv!                                           |  gyldige "grænse-udtryk"           |
| --------------------------------------------------------------------------------- | ---------------------------------- |
| $ \lim_{x \to x_0 } \frac{f(x)}{g(x)} \rightarrow \frac{\pm 0}{ \pm 0}$           | $ \lim_{x \to x_0 } \frac{f(x)}{g(x)} \rightarrow  \frac{konstant}{\pm \infty}   \rightarrow 0 $  |
| $ \lim_{x \to x_0 } \frac{f(x)}{g(x)} \rightarrow \frac{\pm \infty}{\pm \infty}$  | $ \lim_{x \to x_0 } \frac{f(x)}{g(x)} \rightarrow  \frac{\pm \infty}{konstant} \rightarrow \pm \infty $     |
| $ \lim_{x \to x_0 } f(x) - g(x) \rightarrow \infty - \infty$                      | $ \lim_{x \to x_0 } \frac{f(x)}{g(x)} \rightarrow  \frac{konstant}{\pm \text{"gående mod 0"}} \rightarrow \pm \infty$ | 
|                                                                                   | $ \lim_{x \to x_0 } \frac{f(x)}{g(x)} \rightarrow  konstant $                        |

Da vores udtryk fra før (uden omskrivning) lander i den ulovlige røde zone, skal vi først omskrive det, indtil det ligner en af de sikre grønne situationer fra højre kolonne:

DETTE ER OK : $ \Large \lim_{x \to \infty } \frac{x + 5}{ x}  =  \lim_{x \to \infty } (\frac{x}{x} + \frac{5}{ x})  =  \lim_{x \to \infty } (1 + \frac{5}{ x}) = 1 $


---------------------------------------

## OPGAVER

| Opgave (Find grænseværdien)                             | 🔴 Farlig zone - Før omskrivning | Matematisk trick / Hint |
| :---                                                    | :---                             | :--- |
| $\lim_{x \to \infty} \left( \sqrt{x^2 + x} - x \right)$ | $ \lim_{x \to x_0 } f(x) - g(x) \rightarrow \infty - \infty$                | Omform til brøk ,- og fjern kvadratrod |
| $\lim_{x \to 1} \frac{\frac{1}{x} - 1}{x - 1}$          | $ \lim_{x \to x_0 } \frac{f(x)}{g(x)} \rightarrow \frac{\pm 0}{ \pm 0}$                   | Prøv at reducere $(x-1)$ væk. |
| $\lim_{x \to 0} \frac{\sqrt{x + 4} - 2}{x}$             | $ \lim_{x \to x_0 } \frac{f(x)}{g(x)} \rightarrow \frac{\pm 0}{ \pm 0}$                   | Gang med det modsat-tegnede udtryk i tæller og nævner for at fjerne kvadratrod. |
| $\lim_{x \to 3} \frac{x^2 - 9}{x^2 - 5x + 6}$           | $ \lim_{x \to x_0 } \frac{f(x)}{g(x)} \rightarrow \frac{\pm 0}{ \pm 0}$                   | Faktoriser tæller (3. kvadratsetning) og nævner for reducere brøk |

-------------------------------------------
-------------------------------------------

## Projektudvidelse med grænseværdier

[Projektudvidelse hjælpeark maple](/f11_2g_diff/Prjektudvidelse2.pdf)


