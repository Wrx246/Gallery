import { lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import st from './App.scss';
import Header from './components/Header/Header';
import Preloader from './UI/Preloader/Preloader';

const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const ImageDetails = lazy(() => import('./components/ImageDetails/ImageDetails'));


function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={
        <div style={{height: '500px'}} className="d-flex align-items-center justify-content-center">
          <Preloader />
        </div>}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/:id' element={<ImageDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
