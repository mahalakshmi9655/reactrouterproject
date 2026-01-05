import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import View from "./components/View";
import Datainsert from "./components/Datainsert";
import Help from "./components/Help";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='' element={<Home></Home>}>Home</Route>
      <Route path='/View' element={<View></View>}>View</Route>
      <Route path='/Datainsert' element={<Datainsert></Datainsert>}>Datainsert</Route>
      <Route path='/Help' element={<Help></Help>}>Help</Route>
      <Route path='/Contact' element={<Contact></Contact>}>Contact</Route>
    </Routes>
    </>
  )
}

export default App

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
