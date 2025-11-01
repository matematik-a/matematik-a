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

    //hvis ingen specifik sti er angivet, returner hovedoversigten
    return await readMarkdownFile("./a/forside.md");

});

// lav en funktion der kan sortere en array af n tal i stigende orden
function sortArray(arr: number[]): number[] {
    arr.sort((a, b) => a - b);
    return arr;
    
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
      <body>
        <main class="markdown-body">
          ${content}
        </main>
      </body>
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