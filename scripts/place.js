const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

function calculateWindChill(T, v){
  return 13.12 + (0.6215 * T) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * T * Math.pow(v, 0.16));
}

(function applyWindChill(){
    const temp = Number(document.getElementById('temp-value').textContent);
    const wind = Number(document.getElementById('wind-value').textContent);
    const windChill= document.getElementById('wind-chill');
    if(temp <= 10 && wind > 4.8){
        windChill.textContent = `${Math.round(calculateWindChill(temp, wind))} °C`;
    } else {
        windChill.textContent = 'N/A';
    }
})();