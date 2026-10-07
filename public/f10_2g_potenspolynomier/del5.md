# 2G - Forløb 10 del.5
## Emne : Polynomier, monotoniforhold, parallelforskyding, polynomiel regression
### Materiale : PlusA Systime kap 5.0 til 5.3

---------------------------------------------------
----------------------------------

<details>
  <summary>5.4 Polynomier og Lidt om Monotoniforhold</summary>

| Formlen for et n-gradspolynomium er:                                        |
| --------------------------------------------------------------------------- |
| $ \Large f(x) = a_n x^n + a_{n-1} x^{n-1} + \ldots + a_1 x + a_0 $          |
|    hvor $a_n \neq 0$ og $n \in \mathbb{N}$.                                 |


| Sætning 1 : Rødder i polynomiet                                             |
| --------------------------------------------------------------------------- |
|$ \Large \text{Et n-te grads polynomium har højst n rødder.}$                |
| **Definition rod :** En værdi $x_0$ er en rod i polynomiet $f(x)$, hvis $f(x_0) = 0$. |

| Begreber - monotoniforhold   | forklaring                          |
| ---------------------------- | ----------------------------------- |
| **monotoniforhold**          |  hvor funktionen er voksende og aftagende |
| **voksende**                 |  hvis x er voksende er y voksende   |
| **aftagende**                |  hvis x er voksende er y aftagende |
| **konstant**                 |  hvis x ændres er y konstant       |
| **ekstremum**                |  et maksimum eller minimum          |
| **lokalt ekstremum/minimum/maksimum** |  et maksimum eller minimum, der kun gælder i et interval |
| **globalt ekstremum/minimum/maksimum** |  et maksimum eller minimum, der gælder i hele definitionsmængden |

![extrema.png](/public/f10_2g_potenspolynomier/extrema.png)

## Spørgsmål : Hvad hvis $ Dm(f) = [a,e[$ , ville funktionen på billedet så have et globalt maksimum? Forklar hvorfor.

Monotoniforhold og funktionsanalyse er et særdelses vigtigt når man arbejder med differentialregning. Det er vigtigt at kunne bestemme hvor en funktion er voksende og aftagende. Dette kan man gøre ved at finde den afledte funktion og se på dens fortegn.

</details>

<!------------------------------------------------------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------------------------------------------->
</br>

<details>
  <summary>5.5 Parallelforskydning</summary>

| Parallelforskydning af et polynomium | forklaring                          |
| ----------------------------------- | ----------------------------------- |
| Forskydning i y-retningen             |  $f(x) + k$ forskyder grafen opad med k enheder |
| Forskydning i x-retningen             |  $f(x - k)$ forskyder grafen mod højre med k enheder |


</details>

<!------------------------------------------------------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------------------------------------------->
</br>


<details>
  <summary>5.6 Polynomiel regression</summary>

## Polynomiel regressions formel :

Det er ikke en del af kapitel, at forklare hvordan man laver polynomiel regression. Så derfor er man henvist til andre kilder:

Her wikipedia : [https://en.wikipedia.org/wiki/Polynomial_regression](https://en.wikipedia.org/wiki/Polynomial_regression)

Hvor der udledes en formel for det estimerede polynomiums koefficienter, således.

X er designmatricen, Y er vektoren af observationer, $\hat{\beta}$ er vektoren af estimerede koefficienter og $\epsilon$ er fejlleddet:

$ \mathbf{Y} =  \mathbf{X} \cdot \vec{\beta} + \vec{\epsilon} $

epsilon er fejlleddet, som man ikke kan undgå i en regression. Men fuldstændig normalfordelt og kan derfor ignoreres.

$ \mathbf{Y} =  \mathbf{X} \cdot \hat{\beta}$

Nu begynder matrix magien


$ \mathbf{X}^T \cdot  \mathbf{Y} = \mathbf{X}^T \cdot \mathbf{X} \cdot \hat{\beta}$


$ ( \mathbf{X}^T \cdot \mathbf{X} )^{-1} \cdot \mathbf{X}^T \cdot  \mathbf{Y} = ( \mathbf{X}^T \cdot \mathbf{X} )^{-1} \cdot (\mathbf{X}^T \cdot \mathbf{X}) \cdot \hat{\beta}$

$ \hat{\beta} = ( \mathbf{X}^T \cdot \mathbf{X} )^{-1} \cdot \mathbf{X}^T \cdot  \mathbf{Y}$

----------------------------------------------------------------------------------------------------------------------

## Faldgrupper : 

### Generelt gælder, at jo højere grad polynomiet har jo bedre vil polynomiet beskrive vores data.

</br>

</details>

----------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------

<details>
  <summary>Opgaver</summary>

## opgave 5.4.6 - gennemgåes på tavlen

## opgave 5.4.8 - gennemgåes på tavlen

## opgave 5.4.9

## opgave 5.5.1

## opgave 5.5.4

## opgave 5.6.1

-------------------------------------------

## Lav eksamenssættet - og aflever - når eksamensættet er afleveret kan du holde fri!!


<detals>
