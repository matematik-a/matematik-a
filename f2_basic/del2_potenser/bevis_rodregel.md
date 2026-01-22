## Advarsel: Dette er ikke noget godt bevis - men mere en følgeslutning af en definition


Vi vil gerne  bevise rodreglen for n-te rødder : 

$ \sqrt[n]{a} = a^{1/n} $
 
Vi starter med at konkludere at det ikke er muligt at bevise rodreglen for alle n og a på én gang.
Derfor deler vi beviset op i to dele :

- a > 0 og n er et vilkårligt naturligt tal
- a < 0 og n er et ulige naturligt tal, da det er ikke muligt at tage lige rødder af negative tal i de reelle tal

### Del 1 : a > 0 og n er et vilkårligt naturligt tal
Lad a være et positivt reelt tal og n et naturligt tal.

Vi går ud fra at følgender er givet, via potensreglerne :
$ (a^m)^n = a^{m \cdot n} $  og hvis m= 1/n at $ (a^{1/n})^n = a^{1/n \cdot n} = a^1 = a $ 

Og funktionen $ f(x) = x^n $ er en omvendt funktion til $ g(x) = \sqrt[n]{x} $ dvs.
$ \sqrt[n]{a^n} = a $

vi sætter ligeværdighederne lig hinanden :

$ (a^{1/n})^n = \sqrt[n]{a^n} $

Vi tager nu n-te rod på begge sider, og d a> 0 er både potensen og roden positiv, så vi kan fjerne n-te potens og n-te rod :

$ a^{1/n} = \sqrt[n]{a} $

### Del 2 : a < 0 og n er et ulige naturligt tal
Lad a være et negativt reelt tal og n et ulige naturligt tal.

Vi kan bruge sammen fremgangsmåde som sidste og nå til følgende :

$ (a^{1/n})^n = \sqrt[n]{a^n} $

Men da n er ulige og a er negativ, så er både potensen og roden negative, så derfor kan vi kan også her fjerne n-te potens og n-te rod.

$ a^{1/n} = \sqrt[n]{a} $

Dermed er rodreglen bevist for de to tilfælde.