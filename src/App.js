 import logo from './logo.svg';
 import './App.css';
 import Box from "./Box"
import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function App() {

  return (
    
      //  <main>
      //  <Box name="김성윤" num="1"/>
      //  <Box name="김세진" num="2"/>
      //  <Box name="김주영" num="3"/>
      //  <Box name="장석환" num="4"/>
      //  </main>
      <main>
        <Box name="Login"/>
      </main>
       
  );
}

export default App;
