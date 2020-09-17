import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalCompo from './Components/FunctionalCompo';
import { ClassCompo, ClassCompoTwo } from './Components/ClassCompo';
import Click from './Components/Click';
import Counter from './Components/Counter';

function App() {
  return (
    <div >
      <h2>aaa</h2>
      <h1>Adoo </h1>
      <FunctionalCompo />
      <ClassCompo />
      <ClassCompoTwo />
      <Click />
      <Counter />
    </div>
  );
}

export default App;
