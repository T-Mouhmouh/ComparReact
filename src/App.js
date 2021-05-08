import logo from "./logo.svg";
import "./App.css";
import { HeaderComponent } from "./components/HeaderComponent";
import { SearchComponent } from "./components/SearchComponent";
import { LoginComponent } from "./components/LoginComponent";
import { MarqueSliderComponent } from "./components/MarqueSliderComponent";
import { CitySliderComponent } from "./components/CitySliderComponent";

import "../src/Style/css/App.css";

function App() {
  return (
    <div class="app">
      <HeaderComponent />
      <SearchComponent />
      <MarqueSliderComponent />
      <CitySliderComponent />
    </div>
  );
}

export default App;
