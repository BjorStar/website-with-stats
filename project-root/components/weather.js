// ===============================
//  WEATHER MODULE FÖR ALLA SOM KOLLAR
// ===============================

const WEATHER_API_KEY = "c9b394246ad6da8210c970fd4961d04c";   // <-- Byt ut!
const CITY = "Stockholm";                    // <-- Ändra om du vill

export async function loadWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&lang=se&appid=${WEATHER_API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        // Hämta elementet i HTML
        const weatherEl = document.getElementById("weather");

        // Om API:et ger fel
        if (data.cod !== 200) {
            weatherEl.innerHTML = "Kunde inte hämta väder.";
            return;
        }

        // Ikon från OpenWeatherMap
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        // Skriv ut väderinfo
        weatherEl.innerHTML = `
            <div class="flex items-center gap-4">
                <img src="${icon}" alt="Väderikon" class="w-16 h-16">
                <div>
                    <p class="text-2xl font-semibold">${data.main.temp}°C</p>
                    <p>${data.weather[0].description}</p>
                    <p class="text-sm opacity-70">${data.name}</p>
                </div>
            </div>
        `;
    } catch (error) {
        console.error("Väderfel:", error);
        document.getElementById("weather").innerText = "Fel vid hämtning av väder.";
    }
}
