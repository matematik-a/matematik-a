# Projekt: Simulering af henfald, eksponentielle sammenhænge og logaritmisk transformation

---

<details>
<summary>Rapportens struktur</summary>

### Forside
Her skal I have en forside, som indeholder navnet på rapporten og gruppemedlemmerne.

### Indledning
I dette afsnit skal I have en kort beskrivelse af opgaven. Her skal I danne jer et overblik ud fra de oplysninger, der er givet. Det kan være situationer, hvor nogle oplysninger mangler. Det kan betyde, at I skal inddrage nødvendige oplysninger selv, gøre jer nogle antagelser - som skal formuleres præcist - eller formulere nogle forudsætninger, som er nødvendige til løsning af opgaven.

### Metode
I dette afsnit skal I beskrive den planlagte fremgangsmåde til løsning af opgaven. Hvis I er kommet frem til, at opgaven kan løses på flere måder, kan I eventuelt argumentere for, hvorfor den ene er valgt frem for den anden.

### Teori
I dette afsnit skal I inddrage og begrunde den teori, som bruges til løsning af de forskellige opgaver. Det betyder blandt andet, at I skal vælge et bevis for en benyttet formel/sætning og gennemføre beviset.

### Besvarelse
I dette afsnit løses opgaven. Her skal alle beregninger dokumenteres, og relevante illustrationer vises. Her har I mulighed for at indsætte grafer og uddybe relevante teoriafsnit med konkrete eksempler.

### Diskussion
I dette afsnit diskuterer I de resultater, som I er nået frem til, og vurderer, hvorvidt disse er korrekte i forhold til opgaven.
</details>

----

<details>
<summary>Bedømmelseskriterier</summary>

I denne opgave lægger vi særligt vægt på:
* **Formalisme:** At skrive og opstille korrekt matematik.
* **En god teoridel:** Teorien skal både omfatte de overordnede principper og et formelt matematisk bevis.

</details>

----

<details>
<summary>Øvelser/Opgaver</summary>

------------------------------------------------------------------------------
------------------------------------------------------------------------------

## Øvelse 0: 
## Simulering af radiaktivt henfald
Radioaktivt henfald er et fænomen hvor radiaktive atomkerne under udsendelse af radiaktiv stråling omdannes, dvs. henfalder, til nyt atom.
Processen sker tilfældigt og kan derfor simuleres vha. terningkast.
Vælg et radiaktivt atom, også kaldet nuklid evt. fra nuklid-tabellen i fysikbogen : Orbit A HTX, kapitel 7.3:
[https://orbithtxa.systime.dk/?id=177](https://orbithtxa.systime.dk/?id=177)

Udtænk derefter et simuleret-henfalds-forsøg, hvor der enten anvendes rigtige eller simulerede terninger, brug evt. programmet nedenfor. Sskab et passende og realistisk datasæt med mindst 10 data-punkter. 

Agrumenter og vis matematisk hvorfor jeres simulering er en god matematisk model af det virklige fænomen.

----------------

**Simpel terning-simulator:**
Skriv antal af ønskede terninger i tekst-feltet:
<input type="number" id="inputAntal" value=600>
<button onclick="kastTerninger()">Kast terningerne</button>
<p id="demo" style= "background: lightgray"></p>

<script>
kastTerninger();
function kastTerninger() {
    let antal = document.getElementById("inputAntal").value;
    let slag = [0,0,0,0,0,0];
    let resultat = "";
    for(let i=0 ; i < Number(antal) ; i++){
        let terning =  Math.floor(Math.random() * 6 + 1); 
        slag[terning-1] = slag[terning-1] + 1  
    }
    document.getElementById("demo").innerHTML = "Resultat af terninge-kastet er | 1'ere:" +slag[0]+ " |  2'ere:" + slag[1] + " |  3'ere:" + slag[2]+ " |  4'ere:" + slag[3] + " |  5'ere:" + slag[4] + " | 6'ere:" + slag[5] +  " | "; 
}
</script>

------------------------------------------------------------------------------
------------------------------------------------------------------------------

## Øvelse 1 + 2: 
## Eksponentielle sammenhænge og logaritmisk transformation

I skal nu lave de øvelser der er beskrevet i nedenstående projekt, med den undtagelse at i anvender jeres egen data fra "øvelse 0" istedet for den gives i øvelse 2  :

[Hvad er matematik? 1 |Projekter: Kapitel 8. Projekt 8.5 Linearisering og anvendelsen af logaritmiske koordinatsystemer](https://lru.praxis.dk/Lru/microsites/hvadermatematik/hem1download/kap8_Projekt_8.5_Linearisering_og_anvendelsen_af_logaritmiske_koordinatsystemer.pdf)

------------------------------------------------------------------------------
------------------------------------------------------------------------------

</details>
