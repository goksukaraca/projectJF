import './index.css';
import PopupButton from "./components/PopupButton";
import SelectFrom from './components/SelectForm';

function App() {
  return (
    <div className="App">
      <header className="App-header"> Checklist App
      </header>
      <p></p>
        <PopupButton />
      <form>
        <SelectFrom />
      </form>
    </div>
  );
}

export default App;
