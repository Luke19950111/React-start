import React from "react";
import ReactDOM from "react-dom";

function App(props){
  return (
    <div>
      <Box1 name='aaa'/>
      <Box2 name='bbb'/>
    </div>
  )
}

class Box1 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      number: 0
    }
  }
  add(){
    this.setState({
      number: this.state.number + 1
    })
  }
  minus(){
    this.setState({
      number: this.state.number - 1
    })
  }
  render(){
    return (
      <div>
        <span>{this.state.number}</span>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={()=>this.minus()}>-</button>
        {this.props.name}
      </div>
    )
  }
}

class Box2 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      number: 0
    }
  }
  add(){
    this.setState({
      number: this.state.number + 1
    })
  }
  minus(){
    this.setState({
      number: this.state.number - 1
    })
  }
  render(){
    return(
      <div>
        <span>{this.state.number}</span>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
        {this.props.name}
      </div>
    )
  }
}

rander()

function rander(){
  ReactDOM.render(
    <App/>,
    document.getElementById("root")
  )
}
