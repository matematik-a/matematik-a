# Forløb 3 - Analytisk Plangeometri

## Del 3 :  Cirklens ligning

-----------------------------------------------------------------------------

### Materiale fra plus A, systime - Kap 7.3

-----------------------------------------------------------------------------


<!doctype html>
<html lang="da">
<head>
  <meta charset="utf-8" />
  <title>Canvas: cirkel + punkt</title>
  <style>
    canvas { border: 1px solid #ccc; }
  </style>
</head>
<body>

<canvas id="myCanvas" width="600" height="400"></canvas>

<script>
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

draw(50,50)

function draw(mx,my){

  //omregn mx og my så de ligger på cirklen men i samme retning
  const Lx = mx - 300;
  const Ly = my - 200;
  const dist = Math.sqrt(Lx * Lx + Ly * Ly);
  if (dist > 0) {
    mx = 300 + (Lx / dist) * 120;
    my = 200 + (Ly / dist) * 120;
  }


  //clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cx = 300 , cy = 200, r = 120;
  // Cirkel
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.stroke();
  // Punkt (lille udfyldt cirkel)
  ctx.beginPath();
  ctx.arc(cx, cy, 5, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();                 // udfylder punktet
  ctx.stroke(); 
  //bruger punkt
  ctx.beginPath();
  ctx.arc(mx, my, 5, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();                 // udfylder punktet
  ctx.stroke();

   // Indstil skrifttype og farve
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";

  // Skriv tekst ved (x,y) i pixels

  const dx = mx - cx;
  const dy = my - cy;
  const distance = Math.sqrt(dx * dx + dy * dy);
  ctx.fillText('cirklens ligning:      (x  - xc)² + (y  - yc)² = r²', 10, 30);
  ctx.fillStyle = "red";

  ctx.fillText('(xc,yc)',305,195)
  
  ctx.fillStyle = "black";

  // skriv xc og yc og r med rød og resten med sort
  // i formlen ctx.fillText(`(${mx|0}- 300)² + (${my|0}- 200)² = 120²`, 300, 390);
 const x0 = 300, y0 = 390;

ctx.font = "16px Arial";
ctx.textAlign = "left";
ctx.textBaseline = "alphabetic";

let x = x0;

// 1) "(mx - "
ctx.fillStyle = "black";
let t = `(${mx|0}- `;
ctx.fillText(t, x, y0);
x += ctx.measureText(t).width;

// 2) cx (rød)
ctx.fillStyle = "red";
t = String(cx);
ctx.fillText(t, x, y0);
x += ctx.measureText(t).width;

// 3) ")² + (my - "
ctx.fillStyle = "black";
t = `)² + (${my|0}- `;
ctx.fillText(t, x, y0);
x += ctx.measureText(t).width;

// 4) cy (rød)
ctx.fillStyle = "red";
t = String(cy);
ctx.fillText(t, x, y0);
x += ctx.measureText(t).width;

// 5) ")² = "
ctx.fillStyle = "black";
t = `)² = `;
ctx.fillText(t, x, y0);
x += ctx.measureText(t).width;

// 6) r (rød)
ctx.fillStyle = "red";
t = String(r);
ctx.fillText(t, x, y0);
x += ctx.measureText(t).width;

// 7) "²"
ctx.fillStyle = "black";
ctx.fillText("²", x, y0);



  //


 //tegn linje fra centrum til bruger punkt
  ctx.beginPath();
  ctx.fillStyle = "red";
ctx.strokeStyle = "red";
ctx.moveTo(cx, cy);
  ctx.lineTo(mx, my);
  ctx.stroke();

 // skriv r halvvejs imellem centrum og bruger punkt
  const midX = (cx + mx) / 2;
  const midY = (cy + my) / 2;
  ctx.fillText(`r`, midX, midY);

// skriv (x,y) af bruger punkt
  ctx.fillStyle = "black";

  ctx.fillText(`(x,y)`, mx + 10, my - 10);
  ctx.strokeStyle = "black";

}



  canvas.addEventListener("click", (e) => {
    // robust måde (virker også hvis canvas er skaleret med CSS)
        const rect = canvas.getBoundingClientRect();


//get mouse coordinates from e
        const cx = e.clientX - rect.left;
        const cy = e.clientY - rect.top;

    draw(cx,cy)


  });


</script>

</body>
</html>

--------------------------------------------------------

### Hvad er cirklens ligning ?

Som det ses på figueren ovenfor er cirklens ligning en direkte konsekvens af ***afstandsformlen for punkt til punkt***. Den beskriver alle punkter, der har en bestemt afstand, dvs. radius, fra centrum.

Sagt på en anden måde - ved at låse afstanden "r" og det ene punkt "centrum (xc,yc)" - er den mængde af punkter der opfylder ligningen  en cirkel.

***Øvelse***
Prøv at trykke forskellige steder på figuren og afprøve, hvordan afstanden fra centrum til brugerens punkt altid er lig med radius.

---------------------------------------------------------

### Omskrivning til cirklens ligning?

løsning på øvelse 7.3.5.1 : Denne opgave går ud på at omrive en ligning til linjens ligning for at bestemme centrum og radius 

$ x^2 + y^2 - 12x + 2y - 106 = 0 $ 

Vi arangerer nu ligningen således:</br>
1... alle led med x i en parantes </br>
2... alle led med y i en parentes </br>
3... alle konstanter over på højre side </br>

$ ( x^2 - 12x ) +  ( y^2 + 2y ) =  106 $ 

Vi husker nu kvadratsætning 1 og 2. og skriver de manglende led ind i paranteserne for at lave det komplette kvadrat.</br>
Og husker at addere de samme tal til højre side af ligningen.

$ ( x^2 - 2 \cdot 6 \cdot x + 36 ) +  ( y^2 + 2 \cdot 1 \cdot y + 1 ) =  106 + 36 + 1 $

Dette giver nu

$ (x - 6)^2 + (y + 1)^2 = 143 $

Heraf ses at ***radius er $ \sqrt{143} $*** og ***centrum er $(6, -1)$***.

---------------------------------------------------------

### Lav øvelserne i kapitel 7.3

---------------------------------------------------------



