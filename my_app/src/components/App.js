
import React, { Component } from 'react';
import Clicker from './Clicker';
import Lottery from './Lottery';
import '../css/App.css';
import coinTails from '../images/twonie_tails.jpg';
import coinHeads from '../images/twonie_heads.jpg';

class App extends Component {
  static defaultProps = {
    text: "HELLOOO WORLD"
  };
  constructor() {
    super();
    // Functions need to be bound to this Component
    this.changeCountState = this.changeCountState.bind(this);
    this.getRandomIcon = this.getRandomIcon.bind(this);
    // State should be on the parent component
    // and contain as little data as possible
    // use props instead when possible
    this.state = {
      count: 0,
      icons: [
        "car",
        "city",
        "cloud",
        "couch",
        "baby",
        "bone",
        "bell",
        "at"
      ]
    };
  };

  changeCountState() {
    console.log(this)
    // Pass function to setState when updating state based on the previous state
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  getRandomIcon() {
    let currentIcons = [...this.state.icons];
    // Get random item from array
    let newIcon = currentIcons[Math.floor(Math.random() * currentIcons.length)];
    this.setState({ icons: [...this.state.icons, newIcon] });
  }

  render() {
    return (
      <div className="App">
        {this.props.text}
        <Clicker text={this.props.text} count={this.state.count} icons={this.state.icons} />
        <button onClick={this.changeCountState}>Increase Number</button>
        <button onClick={this.getRandomIcon}>Add Random Icon</button>
        <Lottery />
        <Lottery title="MINI DAILY" size={4} max={10} />
        <img src={coinHeads}></img>
        <img src={coinTails}></img>
      </div>
    )
  };
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
