import MarkdownIt from "https://esm.sh/markdown-it";

Deno.serve({port: 8000}, async (req) => {

    const url = new URL(req.url);

    //skal huske prikken i filnavnet - da den viser at det er en fil i den nuværende mappe

    if (url.pathname.endsWith(".pdf")) return await readPdfFile("." + url.pathname);

    if (url.pathname.endsWith(".css")) return await readCSSfile("."+url.pathname);

    if (url.pathname.endsWith(".md")) return await readMarkdownFile("."+url.pathname);

    if (url.pathname.endsWith(".png") || url.pathname.endsWith(".jpg") || url.pathname.endsWith(".jpeg")) {
        return await readImageFile("." + url.pathname);
    }

    if (url.pathname.endsWith(".html")) return await readHtmlFile("."+url.pathname);

  if (url.pathname === "/download") return await downloadFile(url);



    //hvis ingen specifik sti er angivet, returner hovedoversigten
    return await readMarkdownFile("./a/forside.md");

});

async function downloadFile(url: URL): Promise<Response> {
    const fileUrl = url.searchParams.get("file");
    if (!fileUrl) {
      return new Response("File parameter is missing", { status: 400 });
    }
  
    try {
      const filePath = "." + fileUrl;
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


// lav en funktion der kan sortere en array af n tal i stigende orden
function sortArray(arr: number[]): number[] {
    arr.sort((a, b) => a - b);
    return arr;
    
}

async function readHtmlFile(filePath: string): Promise<Response> {
    try {
      const html = await Deno.readTextFile(filePath);
      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    } catch (error) {
      console.error("Error reading HTML file:", error);
      return new Response("HTML file not found", { status: 404 });
    }
}

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
        <link rel="stylesheet" href="../style.css">
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


async function readTextFile(filePath: string): Promise<Response> {
  try {
    const text = await Deno.readTextFile(filePath);
    return new Response(text, {
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    console.error("Error reading text file:", error);
    return new Response("Text file not found", { status: 404 });
  }
}