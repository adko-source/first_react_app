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
        this.flipCell = this.flipCell.bind(this);
        this.state = {
            
        }
    };

    generateGameLights() {
      
    }

    flipCell(id) {
        console.log('flipCell Function called for ' + id)
    }

    randomizeCells() {
        const cells = ["cyan", "#282829"];
        let cell = getRandomItemFromArray(cells);
        return cell;
    }

    render() {

        return <div className="LightsOut"> 
            {this.props.cells.map((item, index) => <LightsOutCell key={index} id={index} colour={this.randomizeCells()} flip={this.flipCell}/>)}
        </div>
    }
}       

export default LightsOut;