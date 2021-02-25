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
            cells: (this.props.cells.map((item, index) => <LightsOutCell key={index} id={index} colour={this.randomizeCells()} flip={this.flipCells}/>))

            
        }
    };

    generateGameLights(id, arr) {
      for(let i = 0; i < arr.length ; i++) {
        if(id === 1) {
            this.setState(cs => cs.cells[1] = [...cs.cells, <LightsOutCell key={id} id={id} colour={"pink"} flip={this.flipCells}/>] )
        }
      }
    }

    flipCells(id) {
        let copy = [...this.state.cells];
        console.log('flipCell Function called for ' + id)
        console.log(copy[id].props);
        this.setState({
            cells: copy
        }
        
    )
    }

    randomizeCells() {
        const cells = ["cyan", "#282829"];
        let cell = getRandomItemFromArray(cells);
        return cell;
    }

    render() {

        return <div>
        <h1>Lights Out</h1>
        <div className="LightsOut"> 
                    
                    {this.state.cells}
        </div>
        </div>
    }
}       

export default LightsOut;