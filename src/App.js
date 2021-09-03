import './index.css';
import PopupButton from "./components/PopupButton";

function App() {
  return (
    <div className="flex-container">
      <div className="left-side">
        <header className="app-header"> Checklist App
          <p></p>
        </header>
        <PopupButton />
      </div>
     <div className="right-side"></div>
    </div>
  );
}

export default App;
