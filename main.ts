import MarkdownIt from "npm:markdown-it";

// Liste over alle de undermapper, dine billeder og PDF'er kan ligge i inde i /indhold/
const UNDER_MAPPER = [
  "f1_trig", 
  "f2_basic", 
  "f3_aplan", 
  "f4_vektorer2d", 
  "f5_so1b", 
  "f6_aarspove", 
  "f7_ekstra", 
  "formelsamling", 
  "projekter",
  "a"
];

const baseDir = import.meta.dirname || ".";

export function buildMarkdownHtml(markdown: string): string {
  const md = new MarkdownIt({ html: true });
  const content = md.render(markdown);

  return `
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
    <script id="MathJax-script" async src="https://jsdelivr.net"></script>
    <body>
      <main class="markdown-body">
        ${content}
      </main>
    </body>
    </html>
  `;
}

Deno.serve({ port: 8080, hostname: "127.0.0.1" }, async (req) => {
  const url = new URL(req.url);
  const pathname = url.pathname;

  // 1. HÅNDTER GENEREL DOWNLOAD STAG (fx /download?file=/afleveringer/afl1.pdf)
  if (pathname === "/download") {
    const fileUrl = url.searchParams.get("file");
    if (!fileUrl) return new Response("File parameter is missing", { status: 400 });
    
    const fileName = fileUrl.split("/").pop() || "downloaded_file";
    const cleanPath = fileUrl.startsWith("/") ? fileUrl.slice(1) : fileUrl;

    // Prøv først i roden af indhold/
    try {
      const file = await Deno.readFile(`${baseDir}/indhold/${cleanPath}`);
      return new Response(file, {
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": `attachment; filename="${fileName}"`,
        },
      });
    } catch (_err) {
      // Hvis ikke fundet, søg igennem alle undermapperne inde i indhold/
      for (const mappe of UNDER_MAPPER) {
        try {
          const file = await Deno.readFile(`${baseDir}/indhold/${mappe}/${cleanPath}`);
          return new Response(file, {
            headers: {
              "Content-Type": "application/octet-stream",
              "Content-Disposition": `attachment; filename="${fileName}"`,
            },
          });
        } catch (_e) {
          // Prøv næste mappe
        }
      }
    }
    return new Response("Download-filen blev ikke fundet i appen.", { status: 404 });
  }

  // 2. HÅNDTER FORSIDEN
  let targetPathname = pathname === "/" ? "/a/forside.md" : pathname;
  const fuldSti = `${baseDir}/indhold` + targetPathname;

  try {
    // 3. HÅNDTER MARKDOWN FILER
    if (fuldSti.endsWith(".md")) {
      const txt = await Deno.readTextFile(fuldSti);
      return new Response(buildMarkdownHtml(txt), {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    // 4. HÅNDTER STILE (CSS og PDF-visning direkte)
    if (fuldSti.endsWith(".css") || fuldSti.endsWith(".pdf")) {
      const file = await Deno.readFile(fuldSti);
      const mime = fuldSti.endsWith(".css") ? "text/css; charset=utf-8" : "application/pdf";
      return new Response(file, { headers: { "Content-Type": mime } });
    }

    // 5. INTELLIGENT SØGNING EFTER BILLEDER (Fikser fejlene med del1_trekanter)
    if (pathname.match(/\.(png|jpg|jpeg)$/i)) {
      try {
        // Prøv først den direkte sti
        const file = await Deno.readFile(fuldSti);
        return new Response(file, { headers: { "Content-Type": "image/png" } });
      } catch (_err) {
        // Hvis billedet ikke lå direkte, søger vi igennem undermapperne
        const cleanImgPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;
        for (const mappe of UNDER_MAPPER) {
          try {
            const file = await Deno.readFile(`${baseDir}/indhold/${mappe}/${cleanImgPath}`);
            return new Response(file, { headers: { "Content-Type": "image/png" } });
          } catch (_e) {
            // Prøv næste undermappe
          }
        }
      }
    }

    // Hvis filtypen er ukendt, men findes, så send den afsted
    const file = await Deno.readFile(fuldSti);
    return new Response(file, { headers: { "Content-Type": "application/octet-stream" } });

  } catch (_err) {
    return new Response("Filen blev ikke fundet i offline-appen.", { status: 404 });
  }
});
