import logo from "./logo.svg";
import "./App.css";
import { HeaderComponent } from "./components/HeaderComponent";
import { SearchComponent } from "./components/SearchComponent";
import { LoginComponent } from "./components/LoginComponent";
import { MarqueSliderComponent } from "./components/MarqueSliderComponent";
import { CitySliderComponent } from "./components/CitySliderComponent";
import { CardComponent } from "./components/CardComponent";

import "../src/Style/css/App.css";

function App() {
  return (
    <div class="app">
      <HeaderComponent />
      <SearchComponent />
      <CardComponent />
      {/* <MarqueSliderComponent />
      <CitySliderComponent />*/}
    </div>
  );
}

export default App;
