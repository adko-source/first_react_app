import { Component } from 'react';
import '../css/LightsOut.css'
import LightTile from './LightTile'
import { getRandomItemFromArray } from '../helpers.js';

class LightsOut extends Component {
    static defaultProps = {
        lightedTiles: Array.from({length: 15}),
        darkTiles: Array.from({length: 10}),
        colour: "cyan"

    };
    constructor(props) {
        super(props);
        this.generateGameLights = this.generateGameLights.bind(this);
    }

    generateGameLights() {
        return 1
    }

    render() {

        return <div className="LightsOut">
            {this.props.lightedTiles.map(() => <LightTile colour={this.props.colour}/>)}
            {this.props.darkTiles.map(() => <LightTile colour="#282829" />)}
            {this.generateGameLights()}
        </div>
    }
}       

export default LightsOut;