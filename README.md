# Weather app using React.js (🌦️ Weatheryze)
 
**Weatheryze** is a modern, responsive weather web application built with **React** that provides real-time weather conditions, detailed metrics, and a 5-day forecast for any city in the world.  
It uses the **OpenWeatherMap API** to fetch accurate and up-to-date weather data, all wrapped in a clean, user-friendly interface.

🔗 **Live Demo**: [View Weatheryze Live](https://weatheryze.netlify.app/)  

---

## 📌 Features

- 🌍 **Search Weather by City** – Enter any city worldwide and get instant weather data.
- 🌤 **Real-Time Weather Data** – Displays temperature, feels like, wind speed, humidity, pressure, sunrise, sunset, and visibility.
- 📅 **5-Day Weather Forecast** – View upcoming weather conditions.
- 📱 **Responsive Design** – Works on all devices (mobile, tablet, desktop).
- 🎨 **Modern UI with Background Images** – Dynamic backgrounds and blurred glass effect cards.
- 🗂 **Weather Metrics in Cards** – All details shown in separate, neatly arranged cards.
- 🔄 **Scrollable Forecast on Mobile** – Grid view on desktop, scrollable row on mobile.

---

## ⚙️ Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/weatheryze.git
   cd weatheryze
   ```
2. **Install dependencies**
```bash
npm install
```
3. **Get an API Key**
- Create a free account on OpenWeatherMap.
- Get your API key and replace it in *Weather.js*.
```bash
const API_KEY = "YOUR_API_KEY";
```

4. **Run the app locally**
```bash
npm start
```

## Built With
- *React.js* – Frontend framework
- *OpenWeatherMap API* – Weather data provider
- *CSS3 & Flexbox/Grid* – Styling & layout
- *Netlify* – Hosting & deployment
