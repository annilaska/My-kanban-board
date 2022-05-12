import React from 'react';
import './App.css';
import { useState } from 'react';
import {BrowserRouter} from 'react-router-dom'

import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import mockData from './mock.json'


function App() {
  const [dataArray, setData] = useState(mockData);

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
