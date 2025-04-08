import logo from './logo.svg';
import './App.css';
import { startTransition } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return(
    <>
   <Navbar/>
    <h1>this is app component</h1>
    <Footer/>
    </>

  )
}

export default App;
