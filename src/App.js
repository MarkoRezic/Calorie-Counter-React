import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import UnosInformacija from './components/UnosInformacija';
import Diary from './components/Diary';
import EditFood from './components/EditFood';
import EnterFood from './components/EnterFood';
import MakeFood from './components/MakeFood';
import Settings from './components/Settings';
import Progress from './components/Progress';
import Nutrition from './components/Nutrition';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/unos-informacija" element={<UnosInformacija />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/edit-food" element={<EditFood />} />
          <Route path="/enter-food" element={<EnterFood />} />
          <Route path="/make-food" element={<MakeFood />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
