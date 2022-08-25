import React from 'react'
import Destinations from './components/Destinations';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Choose from './components/Choose';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <Destinations />
       <Search />
       <Choose />
       <Carrousel />
       <Footer />
    </div>
  );
}

export default App;
