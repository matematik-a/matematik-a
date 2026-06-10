# Forløb 5 - SO1b - Du bliver hvad du spiser

## Del 1 :  Hvad er lineær regression?

-----------------------------------------------------------------------------

### Materiale fra grundfoløbs teori : 

[https://matgf.deno.dev/matrialer/Teo25.pdf](https://matgf.deno.dev/matrialer/Teo25.pdf)

### Materiale fra emu : 

[Lineær regression_A_niveau FINAL.pdf](https://www.emu.dk/sites/default/files/2019-03/Line%C3%A6r%20regression_A_niveau%20FINAL.pdf)  

-----------------------------------------------------------------------------

## Lineær regression - vha. mindste kvadraters metode

<p>Lineær regression bruges til at finde en sammenhæng mellem to størrelser i data, f.eks. fra et forsøg. 
Den gør det muligt at forudsige én variabel ud fra en anden og vurdere, hvor godt den rette linje passer til målingerne.</p>

<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <td><strong>Lineær regression</strong></td>
    <td>Finder den rette linje, der bedst forklarer sammenhængen mellem x og y ved at minimere summen af kvadrerede afvigelser.</br></br> Indeks "i" angiver bare hvlken nummer måling der er tale om:</br></br>
$ \Large \hat{y_i} = \hat{a} \cdot x_i + \hat{b} $
    </td>
  
  </tr>
  <tr>
    <td><strong>Mindste kvadraters metode</strong></td>
    <td>At finde $ \hat{a} $ og $ \hat{b} $, så summen af kvadrerede afvigelser mellem de observerede punkter og den lineære model bliver så lille som muligt.<br></br>
      Mindste kvadraters sum skal være så lille som overhovedet muligt:<br></br>
      $ \Large S(\hat{a},\hat{b}) = \sum_{i=1}^n \big( y_i - \hat{y_i} \big)^2 $
    </td>
  </tr>
<tr>
  <td><strong>Hældning</strong></td>
  <td>
    $  \Large \bar{x} $  og $ \Large \bar{y} $ er begge gennemsnit </br></br>
    $  \LARGE \hat{a} = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^n (x_i - \bar{x})^2} $
  </td>
</tr>
<tr>
  <td><strong>Skæring</strong></td>
  <td>
    $ \Large \hat{b} = \bar{y} - \hat{a} \cdot \bar{x} $
  </td>
</tr>
</table>


-----------------------------------------------------------------------------

## Lineær regression i Maple vha. Gymnasiepakken

Du skal bruge kommandoen "Lineær regression" i gymnasiepakken - den finder både $ \hat{a} $ og $ \hat{b} $ for dig, og du kan også få den til at tegne data og den rette linje for dig.
Her er et par  eksempeler på hvordan du kan bruge kommandoen i maple:

```javascript

with(Gym);
ListeX := [1, 2, 3, 4, 5];
ListeY := [2, 3, 5, 7, 11];

#dette vil give dig både a og b i outputtet, og du kan også få den til at tegne data og den rette linje for dig
LinReg(ListeX, ListeY);

```

Du kan også gemme regressions linjen i en funktion, så du kan bruge den til at forudsige y-værdier for nye x-værdier - ektrapolere eller interpolere:

```javascript
with(Gym);
ListeX := [1, 2, 3, 4, 5];
ListeY := [2, 3, 5, 7, 11];
f(x):=LinReg(ListeX, ListeY,x);
```


Lav opgave 2.15 fra nedenstående materiale vha. gymnasiepakken
[https://matgf.deno.dev/matrialer/Opg25.pdf](https://matgf.deno.dev/matrialer/Opg25.pdf)