import React, { Component } from 'react';
import './App.css';
import Button from './Button'

// // class mode
// class Nav extends Component {
//   constructor() {
//     super()
//   }

//   render() {
//     return (
//       <div style={{ color: 'white', backgroundColor: 'black' }}>Skipper</div>
//     )
//   }
// }

// function mode
// const Button = () => {
//   return (
//     <button type="button">from Button component</button>
//   )
// }
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      like: false
    }
  }

  handleClick() {
    this.setState({ like: !this.state.like })
  }
  render() {
    return (
      <div>
        <Nav></Nav>
        {/* <Button></Button> */}
        <Button></Button>
        <button type="button"
          style={this.state.like ? { color: 'red' } : { color: 'black' }}
          onClick={() => this.handleClick()}>
          {
            this.state.like ? 'Liked' : 'Thumbs up'
          }
        </button>
      </div>
    )
  }
}

export default App;
