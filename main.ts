// @ts-ignore: Stopper TypeScript i at brokke sig over eksterne typer under compile
import MarkdownIt from "https://esm.sh/markdown-it";


///////////////////////////////////////////////////////////////////////////////////////////////////

// Denne linje fikser stien universelt (virker på Deno Deploy, i terminalen og som .exe!)
const baseDir = import.meta.dirname || ".";


///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// DEPLOY VERSION AF SERVEREN //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

Deno.serve({port: 8000},async (_req) => {
  //Dette er adresesen der kommer ind
  const url = new URL(_req.url);
  //Hvis stien er en "md" eller "css" fil, så skal den læses og vises
  if (url.pathname.endsWith(".pdf")) return await readPdfFile(`${baseDir}/public${url.pathname}`);
  if (url.pathname.endsWith(".md")) return await readMarkdownFile(`${baseDir}/public${url.pathname}`);
  if (url.pathname.endsWith(".css")) return await readCSSfile(`${baseDir}/public${url.pathname}`);
  if (url.pathname === "/download"){
    return await downloadFile(url, _req);
  } 
  if (url.pathname.endsWith(".png") || url.pathname.endsWith(".jpg") || url.pathname.endsWith(".jpeg")) {
    const urlref : string = fixWrongFilePath(url, _req);
    return await readImageFile(`${baseDir}/public${urlref}`);
  }
  //I alle andre tilfælde, vises forsiden
  return await readMarkdownFile(`${baseDir}/public/a/forside.md`);
});

/////// korrekt sti - til filer...
/*function fixWrongFilePath(url:URL, _req:Request): string {
     let  urlref = _req.headers.get("referer");
    //fejrn den sidtse del af urlref efter det sidste "/" så vi kun har stien tilbage, og ikke hele urlen
        if(urlref) urlref = urlref.substring(0, urlref.lastIndexOf('/')); 
        let origin = url.origin;
        let filename = url.pathname.split("/").pop();
        // erstat origin delen af urlref med origin, så vi kan tjekke om det er den samme side der har bedt om billedet
        if (urlref && origin) {
            urlref = urlref.replace(origin, "")+`/${filename}`;
        }else{
            urlref = url.pathname;
        }
      
      return urlref;
}*/
/////// korrekt sti - til filer... fra Gemini
function fixWrongFilePath(url: URL, _req: Request): string {
  const urlref = _req.headers.get("referer");
  const filename = url.pathname.split("/").pop();

  if (urlref) {
    // Lav referer om til et rigtigt URL-objekt. 
    // Så trækker den automatisk stien ud uden domænet/origin!
    const refererUrl = new URL(decodeURIComponent(urlref));
    let path = refererUrl.pathname;
    
    // Fjern filnavnet på den .md side vi stod på
    path = path.substring(0, path.lastIndexOf('/'));
    
    // Sæt billedets filnavn på mappen
    return `${path}/${filename}`;
  }
  
  return decodeURIComponent(url.pathname);
}



////////download funktion
async function downloadFile(url: URL, _req:Request): Promise<Response> {
    let fileUrl = url.searchParams.get("file");
      
    const fileUrl1 = fixWrongFilePath(url, _req);
    const fileUrl2 = fileUrl1 !== null ? fileUrl1.substring(0, fileUrl1.lastIndexOf('/')) : "";
    const fileUrl3 = fileUrl !== null ? fileUrl.split("/").pop() : "";
    fileUrl = fileUrl2 + "/" + fileUrl3;
    
    if (!fileUrl) {
      return new Response("File parameter is missing", { status: 400 });
    }
  
    try {
      const filePath = `${baseDir}/public${fileUrl}`;

      const file = await Deno.readFile(filePath);
      
      const fileName = fileUrl.split("/").pop() || "downloaded_file";

      return new Response(file, {
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": `attachment; filename="${fileName}"`,
        },
      });
    } catch (error) {
      console.error("Error downloading file:", error);
      return new Response("File not found", { status: 404 });
    }
}

///// PDF funktion
async function readPdfFile(filePath: string): Promise<Response> {
  try {
    const pdf = await Deno.readFile(filePath);
    return new Response(pdf, {
      headers: { "Content-Type": "application/pdf" },
    });
  } catch (error) {
    console.error("Error reading PDF file:", error);
    return new Response("PDF file not found", { status: 404 });
  }
}

///// Image funktion
async function readImageFile(filePath: string): Promise<Response> {

  try {
    const image = await Deno.readFile(filePath);
    const contentType = filePath.endsWith(".png")
      ? "image/png"
      : filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")
      ? "image/jpeg"
      : "application/octet-stream"; 
    return new Response(image, {
      headers: { "Content-Type": contentType },
    });
  } catch (error) {
    console.error("Error reading image file:", error);
    return new Response("Image not found", { status: 404 });
  }
}

///// css funktion 
async function readCSSfile(filePath: string): Promise<Response> {
  try {
    const css = await Deno.readTextFile(filePath);
    return new Response(css, {
      headers: { "Content-Type": "text/css" },
    });
  } catch (error) {
    console.error("Error reading CSS file:", error);
    return new Response("CSS file not found", { status: 404 });
  }
}

///// markdown funktion 
 async function readMarkdownFile(filePath: string): Promise<Response> {

    try {
      const markdown = await Deno.readTextFile(filePath);
      const md = new MarkdownIt({ html: true });
      const content = md.render(markdown);
  
      const html = `
      <!DOCTYPE html>
      <html lang="da">
      <head>
        <meta charset="UTF-8">
        <title>MAT A</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <script>
      window.MathJax = {
        tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
        svg: { fontCache: 'global' }
      };
      </script>
      <script id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
      </script>


      <body>
        <main class="markdown-body">
          ${content}
        </main>
      </body>

      <!---- lav js der farver baggrunden på rækker der indeholder datoer der er passeret ---->
      <script>
        const today = new Date();
        const rows = document.querySelectorAll("table tr");
        rows.forEach(row => {
          const dateCell = row.querySelector("td:nth-child(2)");
          if (dateCell) {
              
              const dateText = dateCell.textContent.trim();
            const [day, month] = dateText.split('/').map(Number);
            const rowDate = new Date(today.getFullYear(), month - 1, day);
            if (rowDate < today) {
              dateCell.style.color = "#ffffffc5"; // lys blå for fremtidige datoer
              console.log("Future date found:", dateText);
              
            }
          }
        });
      </script>

      </html>
    `;
  
  
      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    } catch (error) {
      console.error("Error reading markdown file:", error);
      return new Response("Markdown file not found", { status: 404 });
    }


}

///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// COMPILED STANDALONE VERSION AF SERVEREN ////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// KALD FUNKTIONEN HER: Åbn browseren så snart serveren er startet op
// Vi tjekker isStandalone, så den KUN åbner browseren på folks computere, og IKKE på Deno Deploy!
if (Deno.build.standalone) {
  openBrowser("http://localhost:8000");
}

async function openBrowser(url: string) {
  const os = Deno.build.os;
  let cmd: string[] = [];

  if (os === "windows") {
    // Windows kræver 'cmd /c start' for at åbne en URL
    cmd = ["cmd", "/c", "start", url];
  } else if (os === "darwin") {
    // Mac bruger 'open'
    cmd = ["open", url];
  } else if (os === "linux") {
    // Linux bruger 'xdg-open'
    cmd = ["xdg-open", url];
  } else {
    return; // Hvis det er et ukendt OS, gør vi intet
  }

  try {
    const command = new Deno.Command(cmd[0], { args: cmd.slice(1) });
    await command.output();
  } catch (error) {
    console.error("Kunne ikke åbne browseren automatisk:", error);
  }
}
