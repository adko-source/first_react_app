import React, { Component } from 'react';
import Clicker from './Clicker';
import Lottery from './Lottery';
import CoinFlip from './CoinFlip';
import NumberList from './NumberList';
import ColourContainer from './ColourContainer';
import WisdomDispener from './WisdomDispenser';
import Hangman from './Hangman';
import LightsOutBoard from './LightsOutBoard';
import Form from './Form';
import '../css/App.css';
import axios from 'axios';
import ShoppingList from './ShoppingList';
import ShoppingListForm from './ShoppingListForm';
import reportWebVitals from '../reportWebVitals';

class App extends Component {
  static defaultProps = {
    text: "State Exercices"
  };
  constructor() {
    super();
    // Functions need to be bound to this Component
    this.changeCountState = this.changeCountState.bind(this);
    this.getRandomIcon = this.getRandomIcon.bind(this);
    this.removeLastIcon = this.removeLastIcon.bind(this);
    this.getData = this.getData.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
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
      ],
      inputValue: ""
    };
  };

  changeCountState() {
    console.log(this)
    // Pass function to setState when updating state based on the previous state
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  getRandomIcon() {
    // Create copy of icons array
    let currentIcons = [...this.state.icons];
    // Get random item from array
    let newIcon = currentIcons[Math.floor(Math.random() * currentIcons.length)];
    this.setState({ icons: [...this.state.icons, newIcon] });
  };

  removeLastIcon() {
    let currentIconsCopy = [...this.state.icons];
    let newList = currentIconsCopy.pop(-1);
    console.log(currentIconsCopy);
    console.log(newList);
    this.setState({ icons: [...currentIconsCopy] });
  };

  updateInputValue(e) {
    this.setState(
      {
        inputValue: e.target.value
      }
    )
  }

  async getData() {
    try {
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data.title);
    }
    catch (err) {
     console.log(err.message)
    }
  };

  render() {
    return (
      <div className="App">
        <ShoppingList />
        <LightsOutBoard />
        <Form update={this.updateInputValue} input={this.state.inputValue}/>
        {this.props.text}
        <NumberList />
        <button onClick={this.getData}>Get Data</button>
        <Clicker text={this.props.text} count={this.state.count} icons={this.state.icons} />
        <button onClick={this.changeCountState}>Increase Count</button>
        <button onClick={this.getRandomIcon}>Add Random Icon</button>
        <button onClick={this.removeLastIcon}>Remove Icon</button>
        <WisdomDispener />
        <Lottery />
        <Lottery title="MINI DAILY" size={4} max={10} />
        <CoinFlip />
        <ColourContainer />
        <Hangman />
      </div>
    )
  };
};

export default App;
