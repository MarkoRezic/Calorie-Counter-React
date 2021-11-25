import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
