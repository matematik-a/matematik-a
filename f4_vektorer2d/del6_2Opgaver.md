<style>
    pre {
        background-color: #beb3b3;
        padding: 10px;
        border-radius: 5px;
        font-family: 'Courier New', Courier, monospace;
    }
</style>

# Forløb 4 - Vektorer i 2D

## Del 6 : Maple opgaveregning - med bla. prikproduktet, determinant og vektorprojektion

-----------------------------------------------------------------------------

[formelsamnling webmatematik](https://www.webmatematik.dk/media/1367277/matematikcenteraniveau.pdf)

-----------------------------------------------------------------------------

#### Her er de vigtigste maple kommandoer:

```maple

# Det er en god ide at slette hukommelsen inden I starter på opgaverne, så Maple ikke bliver forvirret over tidligere definerede variable
    restart;

# Definer vektorer
    vekA := <t, 2>;
    vekB := <3, t+1>;

# Prikprodukt fra gym pakken
    with(Gym):
    dot_product := dotP(vekA, vekB);

# Længden af en vektor
    length_a := len(vekA)

# Man kan tegne vektorer i Maple, det er en god ide at gøre det for at forstå opgaverne bedre
# Det kan dog være tidsbesparende at tegne dem vha. draw "menu- insert" eller bare anvende draw på i et eksisterende plot
    with(plots):
    plot_A := pointplot([2, 5], color = red):
    plot_OA := arrow([2, 5], width = 0.05):
    display(plot_A, plot_OA);

```


-----------------------------------------------------------------------------

## Fra bogen : Plus A, systime - lærerplan 2024

#### I skal løse nedenstående opgaver - vha. Maple... Løsningsmetoder og formler skal selvfølgelig angives - men I må gerne bruge solve til at løse ligningerne.

#### Hver 30 min - præsentere vi/I en opgave for klassen

![](/f4_vektorer2d/opg12_9.png)

![](/f4_vektorer2d/opg12_10.png)

![](/f4_vektorer2d/opg12_11.png)

![](/f4_vektorer2d/opg12_12.png)

## Fra bogen : Mat A stx - lærerplan 2024

![](/f4_vektorer2d/opg7_99.png)

![](/f4_vektorer2d/opg7_100.png)