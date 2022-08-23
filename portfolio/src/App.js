import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'


function App() {

  return (

    <>

      <Header />

      <section className='flex justify-center h-screen bg-gradient-to-tl from-sky-700 to-indigo-800 text-stone-300'>
        <Routes>
          <Route path='/' element={<About />}>
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='contact' element={<Contact />} />
            <Route path='resume' element={<Resume />} />
          </Route>
        </Routes>
      </section>

      <Footer />
    </>
  );
}

export default App;
