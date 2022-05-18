import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom'

import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
// import data from './mock.json'


function App() {
  const initialState = JSON.parse(window.localStorage.getItem('dataArray')) || []
  const [dataArray, setData] = useState(initialState);


  useEffect(() => {
    window.localStorage.setItem('dataArray', JSON.stringify(dataArray))
  }, [dataArray])

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Main dataArray={dataArray} setData={setData}/>
        <Footer dataArray={dataArray}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
