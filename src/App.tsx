import './App.css';
import { Navbar } from './presentation/components/navbar';
import { Home } from './presentation/pages/home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
