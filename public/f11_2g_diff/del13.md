# Alternative beviser for differentations regneregler

## Kædereglen - samme bevis som i bevis-samlingen systime

$ (f(g(x))' = f'(g(x)) \cdot g(x) $

Bevis omskrivning af differenskovotienten ,- med det forbehold at $g(x+h)-g(x)$ ikke er nul...

$ \frac{f(g(x+h)) - g(x)}{h} \textcolor{blue}{{\Large =}}    \frac{f(g(x+h)) - g(x)}{h} \cdot \frac{g(x+h) - g(x)}{g(x+h) - g(x)} \textcolor{blue}{{\Large =}}  \frac{f(g(x+h)) - g(x)}{g(x+h) - g(x)} \cdot \frac{g(x+h) - g(x)}{h} $

$\lim_{n \to \infty} \frac{f(g(x+h)) - g(x)}{g(x+h) - g(x)} \cdot \frac{g(x+h) - g(x)}{h} \textcolor{blue}{{\Large =}}  f'(g(x)) \cdot g(x)$

## Produktreglen - bevist vha. differentialkvotient for log & kædereglen

Hvis de differentierer ln(f(x)), fåes vh.a kædereglen og differentialkvotion for ln(x) at $ (ln(f(x)))' = \frac{f'(x)}{f(x)} $

$ ln(h(x)) = ln(f(x) \cdot g(x)) \textcolor{blue}{{\Large \Leftrightarrow}}  ln(h(x)) = ln(f(x)) + ln(g(x))  $

$  (ln(h(x)))' = (ln(f(x)))' + (ln(g(x)))'  \textcolor{blue}{{\Large \Leftrightarrow}} \frac{h'(x)}{h(x)} = \frac{f'(x)}{f(x)} + \frac{g'(x)}{g(x)}$

Vi multiplicerer med $ f(x) \cdot g(x) $ på begge sider, læg mærke til at $ h(x) = f(x) \cdot g(x)$

$ \frac{h'(x)}{h(x)} = \frac{f'(x)}{f(x)} + \frac{g'(x)}{g(x)} \textcolor{blue}{{\Large \Leftrightarrow}}  h'(x) = f'(x) \cdot g(x) + g'(x) \cdot f(x) $


## Kvotientreglen - bevist ud fra produktreglen

$ h(x) = \frac{f(x)}{g(x)}   \textcolor{blue}{{\Large \Leftrightarrow}}  h(x) \cdot g(x) = f(x)    \textcolor{blue}{{\Large \Leftrightarrow}}     h'(x) \cdot g(x) + h(x) \cdot g'(x)= f'(x)    \textcolor{blue}{{\Large \Leftrightarrow}}  $

$ h'(x)  =  \frac{f'(x) - g'(x) \cdot h(x)}{g(x)}  \textcolor{blue}{{\Large \Leftrightarrow}}    h'(x)  =  \frac{f'(x) - g'(x) \cdot \frac{f(x)}{g(x)}}{g(x)}  \textcolor{blue}{{\Large \Leftrightarrow}}   h'(x) = \frac{f'(x) \cdot g(x) - g'(x) \cdot f(x)}{g(x)^2} $

