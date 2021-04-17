import logo from "./logo.svg";
import "./App.css";
import { HeaderComponent } from "./components/HeaderComponent";
import { SearchComponent } from "./components/SearchComponent";
import "../src/Style/css/App.css";

function App() {
  return (
    <div class="app">
      <HeaderComponent />
      <SearchComponent />
    </div>
  );
}

export default App;
