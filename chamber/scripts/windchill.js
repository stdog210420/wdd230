function calculateWindChill() {
    // Get input values
    const temperature = parseFloat(document.getElementById('temperature').value);
    const windSpeed = parseFloat(document.getElementById('windSpeed').value);
  
    // Check if input values meet the specification limits
    if (temperature <= 10 && windSpeed > 3.0) {
      // Calculate wind chill factor
      const windChill = calculateWindChillFactor(temperature, windSpeed);
      document.getElementById('windChillResult').textContent = `Wind Chill Factor: ${windChill.toFixed(2)} °C`;
    } else {
      document.getElementById('windChillResult').textContent = 'N/A';
    }
  }

  function calculateWindChillFactor(temperature, windSpeed) {
    // Formula to calculate wind chill factor
    const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    return windChill;
  }