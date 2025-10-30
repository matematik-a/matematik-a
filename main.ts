import MarkdownIt from "https://esm.sh/markdown-it";

Deno.serve({port: 8000}, async (req) => {

    const url = new URL(req.url);
    
    const safePath = sanitizePath(url.pathname);
    if (!safePath) {
        return await readMarkdownFile("forside.md");
    }

    if (safePath.endsWith(".pdf")) return await readPdfFile(safePath);

    if (safePath.endsWith(".css")) return await readCSSfile(safePath);

    if (safePath.endsWith(".md")) return await readMarkdownFile(safePath);

    if (safePath.endsWith(".png") || safePath.endsWith(".jpg") || safePath.endsWith(".jpeg")) {
        return await readImageFile(safePath);
    }

    //hvis ingen specifik sti er angivet, returner hovedoversigten
    return await readMarkdownFile("forside.md");

});

function sanitizePath(pathname: string): string | null {
    try {
        if (pathname === '/' || pathname === '') {
            return null;
        }
        
        let cleanPath = decodeURIComponent(pathname.startsWith('/') ? pathname.slice(1) : pathname);
        
        if (!cleanPath) {
            return null;
        }
        
        const segments = cleanPath.split('/').filter(segment => {
            return segment !== '' && segment !== '.' && segment !== '..';
        });
        
        if (cleanPath.includes('..') || cleanPath.includes('//') || cleanPath.startsWith('/')) {
            return null;
        }
        
        const safePath = segments.join('/');
        
        if (safePath.startsWith('/') || safePath.includes('..')) {
            return null;
        }
        
        const allowedExtensions = ['.md', '.css', '.png', '.jpg', '.jpeg', '.pdf'];
        const hasAllowedExtension = allowedExtensions.some(ext => safePath.toLowerCase().endsWith(ext));
        
        if (!hasAllowedExtension) {
            return null;
        }
        
        return './' + safePath;
    } catch {
        return null;
    }
}


async function readMarkdownFile(filePath: string): Promise<Response> {

    try {
      const markdown = await Deno.readTextFile(filePath);
      const md = new MarkdownIt({ html: true });
      let content = md.render(markdown);
      content = content.replace(/<script[^>]*>.*?<\/script>/gsi, '')
              .replace(/on\w+="[^"]*"/gi, '')
              .replace(/javascript:/gi, '');
  
      const html = `
      <!DOCTYPE html>
      <html lang="da">
      <head>
        <meta charset="UTF-8">
        <title>prog valghold</title>
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