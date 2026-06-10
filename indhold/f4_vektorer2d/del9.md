# Forløb 4 - Vektorer i 2D

## Del 8 : linjens ligning, vinkler mellem linjer, afstand fra punkt til linje, polære koordinater, cirkler

---------------------------

## Kap-12.4.2 Sætning 2

$ Normalvektoren :  \vec{n} = \begin{pmatrix} a \\\ b \end{pmatrix} $ $ \text{Retningsvektor fra (x0,y0) til (x,y) : } \vec{PP_0} = \begin{pmatrix} x - x_0 \\\ y - y_0 \end{pmatrix} $

$ \vec{n} \cdot \vec{PP_0} = 0  $

$ \text{Linjens ligning generel form, implicit form: } $

$ \Large a \cdot x + b \cdot y + c = 0 $ $ \Large \text{ hvor } c = a\cdot x_0 - b\cdot y_0 $

## Kap-12.4.3 Vinklen mellem to linjer

$ \text{Vinklen mellem to linjer med retningsvektorer } \vec{r_1} \text{ og } \vec{r_2} \text{ er givet ved: } $

$ \Large \cos(\theta) = \Large \frac{\vec{r_1} \cdot \vec{r_2}}{|\vec{r_1}| \cdot |\vec{r_2}|} $

## Kap-12.4.4 Afstanden mellem punkt og linje

### Nyt bevis for afstandsformlen

$ \text{Punktet P0 (x0,y0) på linjen og punktet P1 (x1,y1) og normalvektoren } \vec{n} = \begin{pmatrix} a \\ b \end{pmatrix} $

$ \text{Dvs. afstanden er defineret som afstanden af } \vec{PP_1} \text{ projektionen på } \vec{n} $

$ \Large dist(P,l) =  \frac{\vec{PP_1} \cdot \vec{n}}{|\vec{n}|}  = \frac{| ax_1 + by_1 - ax_0 - by_0 |}{\sqrt{a^2 + b^2}} = \frac{| ax_1 + by_1 + c |}{\sqrt{a^2 + b^2}} $


---------------------------

## Løs opgaver fra bogen : plus A, systime - lærerplan 2024

### 12.4.8, 12.4.9, 12.4.11, --- 12.4.15, 12.4.16 og 12.4.17