import React, { Component } from 'react'
import SubBell from './sub.jpg'
import SubedBell from './subscribedd.png'


export default class StateChangeCompo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Welcome to my channel Please hit subscribe button",
      btnText: "Subscribe",
      imageURL: SubBell

    }
  }
  cssStyle = {
    color: "blue",
    fontSize: 35

  }
  btnStyle = {
    color: "red",
    textStyle: "italic"
  }
  btnClick = () => {
    this.setState({
      message: "please hit bell icon",
      btnText: "Subscribed"
    })
  }

  onSub = () => {
    this.setState({
      message: "thanks for subscribing",
      btnText: "subscribed",
      imageURL: SubedBell
    })
  }
  render() {
    return (
      <div>
        <h1 style={this.cssStyle}>{this.state.message}</h1>
        <button onClick={this.btnClick} style={this.btnStyle}>{this.state.btnText}</button>
        <img onClick={this.onSub} src={this.state.imageURL} style={{ width: "30px", height: "30px" }} />
      </div>
    )
  }
}
