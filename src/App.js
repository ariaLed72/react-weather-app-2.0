import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Diego" />
        <footer>
          Project by{" "}
          <a
            href="https://zippy-dango-d04e9d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ariana Ledezma
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ariaLed72/react-weather-app-2.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
