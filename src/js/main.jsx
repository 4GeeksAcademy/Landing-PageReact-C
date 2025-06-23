import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Jumbotron from './components/Jumbotron.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Jumbotron/>
    <Card/>
    <Footer/>
  </React.StrictMode>,
)
