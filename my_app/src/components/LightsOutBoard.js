import { Component } from 'react';
import '../css/LightsOut.css'
import LightsOutCell from './LightsOutCell'
import { getRandomItemFromArray } from '../helpers.js';

class LightsOut extends Component {
    static defaultProps = {
        cells: Array.from({length: 25}),
        colour: "cyan",
      

    };
    constructor(props) {
        super(props);
        this.generateGameLights = this.generateGameLights.bind(this);
        this.flipCells = this.flipCells.bind(this);
        this.state = {
            cells: (this.props.cells.map((item, index) => <LightsOutCell key={index} id={index} colour={this.randomizeCells()} flip={this.flipCells}/>)),
            arr: [10,20,30,40,50]
        }
    };

    generateGameLights(id) {
      let newArr = [...this.state.cells];
      newArr[id] = <LightsOutCell key={id} id={id} colour={"pink"} flip={this.flipCells}/>
      console.log(newArr)
      this.setState({
        cells: [...newArr]
      }
      )
        
    }
  

    flipCells(id) {
        let copy = [...this.state.cells];
        console.log('flipCell Function called for ' + id)
        console.log(copy[id].props);
        this.setState({
            cells: copy
        }
    )
    this.generateGameLights(id);
    }

    randomizeCells() {
        const cells = ["cyan", "#282829"];
        let cell = getRandomItemFromArray(cells);
        return cell;
    }

    render() {

        return (
        <div>
            <h1>Lights Out</h1>
            <div className="LightsOut"> 
                {this.state.cells}
            </div>
        </div>
        )
    }
}       

export default LightsOut;