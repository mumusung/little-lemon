import React from 'react'
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import Section from './section';
import Card from './Card'
function App() {
  return (
    <div className="app-container">
      <div className="header-nav-container">
        <Header />
        <Nav />
      </div>
      <div className="main-container">
        <Main />
      </div>
      <div className='section-container'>
        <Section />
      </div>
      <div className=''>
        <Card 
        title='Card title'
        body='lorem'/>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
