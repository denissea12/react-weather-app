import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dallas" />
        <footer>
          This Project was coded by{" "}
          <a href="https://www.shecodes.io/graduates/131305-denisse-ramirez">
            Denisse Ramirez
          </a>{" "}
          and is
          <a
            href="https://github.com/denissea12/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
