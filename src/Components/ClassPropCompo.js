import React, { Component } from 'react';



class ClassPropCompo extends Component {


  render() {

    return (
      <div>
        <h1>This is class component with props</h1>
        <h2>I'm {this.props.name} from {this.props.place}</h2>
        <h3>{this.props.children}</h3>
      </div>

    );
  }
}

export default ClassPropCompo;