
import React, {Component} from 'react';
import Clicker from './Clicker';
import Lottery from './Lottery';
import '../App.css';

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
    this.setState(prevState => ({count: prevState.count + 1}));
  };

  getRandomIcon() {
    let currentIcons = [...this.state.icons];
    // Get random item from array
    let newIcon = currentIcons[Math.floor(Math.random()*currentIcons.length)];
    this.setState({icons: [...this.state.icons, newIcon]});
  }

  render() {
    return (
            <div className="App">
            {this.props.text}     
            <Clicker text={this.props.text} count={this.state.count} icons={this.state.icons}/>
            <button onClick={this.changeCountState}>Increase Number</button>
            <button onClick={this.getRandomIcon}>Add Random Icon</button>
    
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
