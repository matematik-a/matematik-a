# 2G - Forløb 11 del.3
## Emne : Grænseværdier fortsat
### Materiale : PlusA Systime kap 13.0 til 13.1

----------------------------------

----------------------------------

Sidst fik vi defineret grænseværdier og regnede på simple opgaver. Men hvilke overordnede regler gælder der for omskrivninger, før man kan konkludere, at der er tale om en grænseværdi?

F.eks. er dette IKKE en rigtige måde at regne grænseværdien på:  

DETTE ER FORBUDT : $ \Large \lim_{x \to \infty } \frac{x + 5}{ x}  =  \frac{\infty}{\infty} = 1$

Se følgende tabel, som indeholder de udtryk, der SKAL omskrives (venstre kolonne), og de udtryk, I gerne må bruge til at finde en logisk grænseværdi (højre kolonne):

| ikke gyldige "grænse-udtryk"                    |  gyldige "grænse-udtryk"           |
| ----------------------------------------------- | ---------------------------------- |
| $\frac{\pm 0}{ \pm 0}$                          | $ \frac{konstant}{\pm \infty} $    |
| $\frac{\pm \infty}{\pm \infty}$                 | $ \frac{\pm \infty}{konstant}$     |
| $\infty - \infty$                               | $ \frac{konstant}{\pm \text{"gående mod 0"}}$ | 
|                                                 | $ konstant $                        |

Da vores udtryk fra før (uden omskrivning) lander i den ulovlige røde zone, skal vi først omskrive det, indtil det ligner en af de sikre grønne situationer fra højre kolonne:

DETTE ER OK : $ \Large \lim_{x \to \infty } \frac{x + 5}{ x}  =  \lim_{x \to \infty } (\frac{x}{x} + \frac{5}{ x})  =  \lim_{x \to \infty } (1 + \frac{5}{ x}) = 1 $


---------------------------------------



| Opgave (Find grænseværdien) | 🔴 Farlig zone - Før omskrivning | Matematisk trick / Hint |
| :--- | :--- | :--- |
| $\lim_{x \to \infty} \left( \sqrt{x^2 + x} - x \right)$ | $\infty - \infty$ | Omform til brøk ,- og fjern kvadratrod |
| $\lim_{x \to 1} \frac{\frac{1}{x} - 1}{x - 1}$ | $\frac{0}{0}$ | Prøv at reducere $(x-1)$ væk. |
| $\lim_{x \to 0} \frac{\sqrt{x + 4} - 2}{x}$ | $\frac{0}{0}$ | Gang med det modsat-tegnede udtryk i tæller og nævner for at fjerne kvadratrod. |
| $\lim_{x \to 3} \frac{x^2 - 9}{x^2 - 5x + 6}$ | $\frac{0}{0}$ | Faktoriser tæller (3. kvadratsetning) og nævner for reducere brøk |

-------------------------------------------
-------------------------------------------




