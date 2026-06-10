# Del-forklaring i bevis for rodreglen: $ \sqrt[n]{a} = a^{1/n} $

Dette er et forsøg på at overbevise læseren om at ligningen med $ n \ge 2 $:

$ (\sqrt[n]{a})^n = (a^{1/n})^n$

Betyder at følgende er sandt, for $a > 0$ og for $ a < 0 $ når n er ulige:

$ \sqrt[n]{a} = a^{1/n} $

Dette svarer til at løse ligningen $ x^n = y^n $, men vi ved at denne ligning kan have flere løsninger, derfor deler vi beviset op i flere tilfælde i forskellige domæner af $a$ og $n$. For n ser vi på om n er lige eller ulige, da ulige eksponenter har en unik løsning, mens lige eksponenter kan have flere.

## Del 1 : a > 0  og n er et naturligt tal

hvis vi betragter de forskellige tal $ x = \sqrt[n]{a} $ og $ y = a^{1/n} $, kan vi opstille ligningen:
$ x^n = y^n $ , da funktionen $ f(t) = t^n $ er strengt voksende for $ t > 0 $ og $ n \in N $, har ligningen kun en løsning i det positive tal domæne. Vi "definerer" derfor $ y = a^(1/n) > 0 $ og at vi ved at  $ x=  \sqrt[n]{a} > 0 $, derfor må:
$ \sqrt[n]{a} = a^{1/n} $

## Del 2 : a < 0 og n er ulige

hvis vi betragter de forskellige tal $ x = \sqrt[n]{a} $ og $ y = a^{1/n} $, kan vi opstille ligningen:
$ x^n = y^n $ , da funktionen $ f(t) = t^n $ er strengt voksende for alle reelle tal $ t $ når $ n $ er ulige, har ligningen kun en løsning, derfor må:
$ \sqrt[n]{a} = a^{1/n} $

## Del 3 : a < 0 og n er lige

I dette tilfælde giver rodreglen ikke mening i de reelle tal, da $ \sqrt[n]{a} $ ikke er defineret for negative tal når n er lige. Derfor kan vi ikke bevise rodreglen i dette tilfælde.