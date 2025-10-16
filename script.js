navigator.geolocation.watchPosition(
  (pos) => {
    const { latitude, longitude, accuracy } = pos.coords;

    if (accuracy < 15) { // só mostra se precisão for boa
      document.querySelector('#modelo').setAttribute('visible', true);
      const dist = calcularDistancia(latitude, longitude, destino.lat, destino.lon);
      distanciaEl.textContent = `📏 Distância: ${dist.toFixed(1)} m`;
    } else {
      distanciaEl.textContent = `⏳ Aguardando GPS preciso (${accuracy.toFixed(0)} m de erro)`;
      document.querySelector('#modelo').setAttribute('visible', false);
    }
  },
  (err) => console.warn('Erro GPS:', err),
  { enableHighAccuracy: true }
);
distanciaEl.innerHTML = `
  Distância: ${dist.toFixed(1)} m<br>
  Precisão GPS: ±${accuracy.toFixed(1)} m
`;
