import './index.css';
import PopupButton from "./components/PopupButton";

function App() {
  return (
    <div className="flex-container">
      
        <header className="app-header"></header>
        <div className="left-side">
          <h2>Checklist App</h2>
        <PopupButton />
      </div>
    </div>
  );
}

export default App;
