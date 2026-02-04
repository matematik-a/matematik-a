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

draw(400,400)

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
  ctx.fill();                 // udfylder punktet
  ctx.stroke(); 
  //bruger punkt
  ctx.beginPath();
  ctx.arc(mx, my, 5, 0, Math.PI * 2);
  ctx.fill();                 // udfylder punktet
  ctx.stroke();

   // Indstil skrifttype og farve
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";

  // Skriv tekst ved (x,y) i pixels

  const dx = mx - cx;
  const dy = my - cy;
  const distance = Math.sqrt(dx * dx + dy * dy);
  ctx.fillText(`Cirklensligning er afstandsformlen`, 10, 20);
  ctx.fillText('(x  - xc)²       + (y  - yc)²       = r²', 10, 45);
  
  ctx.fillText('(xc,yc)',305,195)

  ctx.fillText(`(${mx|0}- 300)² + (${my|0}- 200)² = 120²`, 300, 390);

 //tegn linje fra centrum til bruger punkt
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(mx, my);
  ctx.stroke();

 // skriv r halvvejs imellem centrum og bruger punkt
  const midX = (cx + mx) / 2;
  const midY = (cy + my) / 2;
  ctx.fillText(`r`, midX, midY);

// skriv (x,y) af bruger punkt
  ctx.fillText(`(x,y)`, mx + 10, my - 10);
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
