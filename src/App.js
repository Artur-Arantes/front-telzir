import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './parts/Navbar';
import Register from './pages/Register';
import Planos from './pages/Planos';

function App() {
  const title = 'TELZIR';
  return (
    <Router>
      <div className="App" >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title={title} />} />
          <Route path="/login" element={<Login title={title} />} />
          <Route path="/register" element={<Register title={title} />} />
          <Route path="/product" element={<Planos title= {title}/>}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;