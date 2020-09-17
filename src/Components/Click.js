import React, { Component } from 'react'

export class Click extends Component {

  constructor(props) {
    super(props)

    this.state = {

      count: 0,

    }
    // this.funcIncrement = this.funcIncrement.bind(this);  use like this when we use funcIncrement() not  using ES6 arrow functions
  }


  // funcIncrement() {
  //   this.setState({
  //     count: this.state.count + 1
  //   }
  //   );
  // }

  funcIncrement = () => {

    this.setState({
      count: this.state.count + 1
    }
    );
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.funcIncrement}>button clicked {count} </button>
      </div>
    )
  }
}

export default Click
