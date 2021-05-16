import logo from "./logo.svg";
import "./App.css";
import { HeaderComponent } from "./components/HeaderComponent";
import { StoreComponent } from "./components/StoreComponent";
import { SearchComponent } from "./components/SearchComponent";
import { LoginComponent } from "./components/LoginComponent";
import { MarqueSliderComponent } from "./components/MarqueSliderComponent";
import { CitySliderComponent } from "./components/CitySliderComponent";
import { CardComponent } from "./components/CardComponent";
import { FpImgSlider } from "./components/FpImgSlider";

import "../src/Style/css/App.css";
import "../src/Style/css/all.min.css";
import "../src/Style/css/fontawesome.min.css";

function App() {
  return (
    <div class="app">
      <link rel="stylesheet" href="style css" />
      <HeaderComponent />
      {
        <SearchComponent />
        //<CardComponent />
        //<MarqueSliderComponent />
        //<CitySliderComponent />
      }

      <div className="row center">
        <FpImgSlider />
        <StoreComponent />
      </div>
    </div>
  );
}

export default App;
