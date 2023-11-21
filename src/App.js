import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Location from './Pages/Location';
// import Episode from './Pages/Episode';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/location' element={<Location />} />
        {/* <Route path='/episode' element={<Episode />} /> */}
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
