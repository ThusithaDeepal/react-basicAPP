import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalCompo from './Components/FunctionalCompo';
import { ClassCompo, ClassCompoTwo } from './Components/ClassCompo';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ClassPropCompo from './Components/ClassPropCompo';
import FunctionalPropComponent from './Components/FunctionalPropComponent';
import StateChangeCompo from './Components/StateChangeCompo';

function App() {
  return (
    <div >
      {/* <h2>aaa</h2>
      <h1>Adoo </h1>
      <FunctionalCompo />
      <ClassCompo />
      <ClassCompoTwo />
      <Click />
      <Counter />
      <hr />
      <ClassPropCompo name="jhon" place="colombo" />
      <ClassPropCompo name="jhon2" place="colombo2" />

      <ClassPropCompo name="kam" place="jaffna">
        <p>This is child props this.props.children</p>
      </ClassPropCompo>

      <hr />
      <FunctionalPropComponent name="sam1" school="vcc1" />
      <FunctionalPropComponent name="sam2" school="vcc2">
        <h3>his is child props this.props.children</h3>
      </FunctionalPropComponent> */}

      <StateChangeCompo />
    </div>
  );
}

export default App;
