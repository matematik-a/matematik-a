## Del 6 : Vektorregning i Maple

-----------------------------------------------------------------------------

Man skriver vektorer i Maple ved at bruge vinkelparenteser, og adskille komponenterne med kommaer. For eksempel, for at definere vektorerne $\vec{a}$ og $\vec{b}$:

```maple

a := <1, 2>;
b := <3, 4>;

```

Når man skal lave prikproduktet af to vektorer i Maple, kan man skrive punktum mellem de to vektorer:

```maple
dot_product := a . b;

```

For at beregne længden af en vektor i Maple, kan man bruge funktionen `norm` eller tage kvadratroden af summen af kvadraterne af komponenterne:

```maple
# Tallet 2 angiver at det er en 2D vektor, og at vi ønsker den euklidiske norm
length_a := norm(a,2);

length_b := sqrt(a[1]^2 + a[2]^2);

```

Mange gange kan det være nyttigt at plotte vektorer eller punkter i Maple for at visualisere dem. Dette gøre således vha. plots pakken:

```maple
with(plots):

plot_A := pointplot([2, 5], color = red):

#læg mærke til width, tykkelsen på pilen bliver alt for tyk, hvis man ikke sætter den ned
plot_OA := arrow([2, 5], width = 0.05):

#man kan også plotte vektoren direkte....
plot_OA2 := arrow(a, width = 0.05):

#flere plots kan kombineres ved at sætte dem i en liste
display(plot_A, plot_OA, plot_OA2)

#området der plottes kan justeres med view 
display(plot_A, plot_OA, plot_OA2, view = [-1..5, -1..5])

```


