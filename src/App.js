import header from "./pokeappHeader.png";
import "./App.css";
import { Cards } from "./Components/Cards";
import lista from "./data";

function App() {
  return (
    <div className="App">
      <header>
        <img src={header} alt="header" />
      </header>
      <div>
        <hr />
        <Cards lista={lista} />
      </div>
    </div>
  );
}

export default App;
