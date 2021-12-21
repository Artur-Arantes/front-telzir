import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './parts/Navbar';
import Planos from './pages/Planos';

function App() {
  const title = 'TELZIR';
  require('dotenv').config()
  return (
    <Router>
      <div className="App" >
        <Navbar />
        <div class="content">
          <Routes>
            <Route path="/" element={<Home title={title} />} />
            <Route path="/planos" element={<Planos title= {title}/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
