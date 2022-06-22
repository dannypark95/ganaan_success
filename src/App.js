import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='all-center'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route exact path='/about' element={<About />} />
              <Route exact path='/order' element={<Order />} />
              <Route exact path='/checkout' element={<Checkout />} />
              <Route exact path='/submit' element={<Submit />} />
              <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
