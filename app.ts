const PORT = 8080;

// 1. Start din main.ts server i baggrunden asynkront
(async () => {
  try {
    await import("./main.ts");
  } catch (err) {
    console.error("Fejl ved opstart af baggrundsserver:", err);
  }
})();

// 2. Giv serveren 500ms til at vågne op på din M3 Mac
await new Promise((resolve) => setTimeout(resolve, 500));

const url = `http://127.0.0.1:${PORT}/`;
console.log(`Matematik-A serveren kører offline på: ${url}`);
console.log("Åbner automatisk din browser... (Tryk Ctrl+C i denne terminal for at lukke appen)");

// 3. ÅBN BROWSEREN AUTOMATISK: Dette omgår 100% alle din Macs app-blokeringer!
// Vi bruger Macs indbyggede 'open' kommando til at starte browseren
const command = new Deno.Command("open", {
  args: [url],
});

try {
  await command.output();
} catch (error) {
  console.error("Kunne ikke åbne browseren automatisk. Du kan tilgå siden manuelt på:", url, error);
}

// Vi lader Deno-processen køre i baggrunden, så serveren ikke lukker, før du trykker Ctrl+C
// Vi laver et uendeligt vent-loop til serveren
await new Promise(() => {});
