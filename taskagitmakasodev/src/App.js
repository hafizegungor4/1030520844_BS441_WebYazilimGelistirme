import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage";
import {Route, Routes} from "react-router-dom";
import Game from './components/Game'
import AgainstTime from "./components/AgainstTime";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Game" element={<Game />} />
            <Route path="/AgainstTime" element={<AgainstTime/>} />
        </Routes>
    </div>
  );
}

export default App;
