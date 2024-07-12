import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import All_routes from './All_routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <All_routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
