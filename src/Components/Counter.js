import React, { Component } from 'react'



export default class Counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }
  IncrementCount = () => {

    this.setState({
      count: this.state.count + 1

    });
  }

  render() {
    return (
      <div>
        <button onMouseEnter={this.IncrementCount}>Count increment by hovering:{this.state.count}</button>
      </div>
    )
  }
}
