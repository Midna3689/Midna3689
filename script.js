document.addEventListener("DOMContentLoaded", function() {
    const freqSlider = document.getElementById("frequency");
    const pitchSlider = document.getElementById("pitch");
    const freqValue = document.getElementById("freqValue");
    const pitchValue = document.getElementById("pitchValue");
    const playButton = document.getElementById("playSound");

    // Initiale Werte anzeigen
    freqValue.textContent = freqSlider.value;
    pitchValue.textContent = pitchSlider.value;

    // Aktualisieren der angezeigten Werte, wenn die Regler bewegt werden
    freqSlider.addEventListener("input", function() {
        freqValue.textContent = freqSlider.value;
    });

    pitchSlider.addEventListener("input", function() {
        pitchValue.textContent = pitchSlider.value;
    });

    // Funktion zum Abspielen des Tons
    playButton.addEventListener("click", function() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        
        // Frequenz und Tonhöhe setzen
        oscillator.frequency.value = freqSlider.value;
        oscillator.detune.value = (pitchSlider.value - 1) * 100;  // Detune für die Tonhöhe

        // Wellenform und Verbindung mit Audio-Output
        oscillator.type = "sine";  // Beispiel: Sinuswelle
        oscillator.connect(audioContext.destination);
        oscillator.start();
        
        // Nach 2 Sekunden stoppen
        oscillator.stop(audioContext.currentTime + 2);
    });
});
