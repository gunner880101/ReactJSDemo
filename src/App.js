import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      like: false
    }
  }

  handleClick(){
    this.setState({ like:!this.state.like})
  }
  render(){
    return (<button type="button" 
      style={this.state.like ? {color: 'red'} : {color: 'black'}} 
      onClick={()=>this.handleClick()}>
      {
        this.state.like ? 'Liked' : 'Thumbs up'
      }
    </button>)
  }
}

export default App;
