import React, { Component } from 'react';
import Tile from './Tile.js'
import '../css/ColourContainer.css'


class ColourContainer extends Component {
    static defaultProps = {
        colours: [
            "#ff8600",
            "#AEB8FE",
            "#27187E",
            "#AEB8FE",
            "#E83151",
            "#387780",
            "#D2CCA1",
            "#004E98",
            "#36382E",
            "#8C271E",
            "#FFB7C3",
            "#BCF4DE",
            "#34623F",
            "#FCFDAF",
            "#FFFC31", 
            "#3EC300",
            "#FF1D15",
            "#7F0799",
           
        ],
        tiles: 16,
    };
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        let colours = this.props.colours;
        let tiles = Array.from({ length: this.props.tiles });
        console.log(tiles);
        return (
            <section className="ColourContainer">
                {tiles.map((i, index) => <Tile key={index} colours={colours} />)}
            </section>

        )
    }
}

export default ColourContainer;