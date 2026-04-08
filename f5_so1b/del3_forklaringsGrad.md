
# Forløb 5 - SO1b - Du bliver hvad du spiser

## Del 3 :  Hvad er forklaringsgraden?

-----------------------------------------------------------------------------

## Repetition forståelses-spørgsmål:

- Hvad betyder xy-plot?
- Hvad betyder hat tegnet over  $ \hat{a} $ og  $ \hat{b} $ ?
- Hvad betyder indeks i på både $ \hat{y_i} $ og $ x_i $ ?
- Hvad betyder $ \bar{x} $ og $ \bar{y} $ ?
- Hvad betyder $ S(\hat{a},\hat{b}) $ ? Forklar det med dine egne ord.
- Hvad betyder $ \sum_{i=1}^n $ ? Giv et eksempel på hvordan symbolet bruges i praksis.

-----------------------------------------------------------------------------

### Materiale fra forklaringsgrad : [https://www.matematikfysik.dk/mat/noter_tillaeg/tillaeg_lineaer_regression_kvadratsummer_forklaringsgrad.pdf](https://www.matematikfysik.dk/mat/noter_tillaeg/tillaeg_lineaer_regression_kvadratsummer_forklaringsgrad.pdf)

### Materiale om Residualer : [https://www.matematikfysik.dk/mat/noter_tillaeg/tillaeg_residualer_grundforloeb.pdf](https://www.matematikfysik.dk/mat/noter_tillaeg/tillaeg_residualer_grundforloeb.pdf)  

-----------------------------------------------------------------------------
<table border="1" cellpadding="8" cellspacing="0">

  <tr>
    <td><strong>Definition (R²)</strong></td>
    <td>
      Et tal mellem 0 og 1, der beskriver hvor godt "den rette linje" kan beskrive dataen. Jo tættere på 1, jo bedre passer linjen <br><br>
      $ \Large R^2 = 1 - \frac{\sum (y_i - (ax_i+b))^2}{\sum (y_i-\bar y)^2} $
    </td>
  </tr>
  <tr>
    <td><strong>Fortolkning (R²)</strong></td>
    <td>
      $ \Large  tæller =  \sum (y_i - (ax_i+b))^2$  ... "fejl" ift. den lineære model <br><br>
      $ \Large  nævner = \sum (y_i-\bar y)^2 $     ... "fejl" ift. gennemsnittet<br><br>
      Hvis "tælleren" = "nævner" er modellen ikke bedre end gennemsnittet
    </td>
  </tr>

  <tr>
    <td><strong>Residualer</strong></td>
    <td>
      Residualer er forskellen mellem de observerede y-værdier og de forudsagte y-værdier fra den lineære model. <br><br>
      $ \Large e_i = y_i - (ax_i + b) $ <br><br>
      Et residualplot kan hjælpe med at vurdere, om den lineære model er passende for dataen. Se materiale om residualer
    </td>

</table>

-----------------------------------------------------------------------------

## Residualer i Maple vha. Gymnasiepakken

```javascript

with(Gym);
ListeX := [1, 2, 3, 4, 5];
ListeY := [1, 4, 5, 9, 11];


# Denne kommando kan plotte residualerne for dig
plotResidualer(ListeX, ListeY, LinReg);

```

Plottet ses nedenfor:

![residualplot](/f5_so1b/residualPlot.png)
