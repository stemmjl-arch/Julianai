function aktualisiereUhr() {
  const jetzt = new Date();
  const stunden = jetzt.getHours().toString().padStart(2, '0');
  const minuten = jetzt.getMinutes().toString().padStart(2, '0');
  const sekunden = jetzt.getSeconds().toString().padStart(2, '0');

  document.getElementById('uhr').textContent = `${stunden}:${minuten}:${sekunden}`;
}

setInterval(aktualisiereUhr, 1000);
aktualisiereUhr(); // Direkt beim Laden anzeigen
