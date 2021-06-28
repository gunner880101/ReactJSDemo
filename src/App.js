import logo from './logo.svg';
import './App.css';
import add, {substract} from './add'

console.log(add(1, 2))
console.log(substract(1, 2))

class Animal{
  constructor(){
    this.type = 'animal'
  }
}

class Human extends Animal{
  constructor(height){
    super()
    this.height = height
  }
}

console.log(new Human(162))

function App() {
  var arr = [1,2,3,4,5]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1 style={{color: 'red'}}>
        This is my first React code, Fantastic!!!
      </h1>
      {
        arr.map((v,k) => {
          return <li>{v}</li>
        })
      }
      {/* This is comment */}
      <h5>
        <label htmlFor="input">
          <h2>INPUT</h2>
          <input type="text" id="input"/>
        </label>
      </h5>
    </div>
  );
}

export default App;
