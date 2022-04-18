import { Routes, Route } from 'react-router-dom';
import './App.scss';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
