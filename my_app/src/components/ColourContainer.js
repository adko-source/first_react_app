import React, { Component } from 'react';
import Tile from './Tile.js'
import '../css/ColourContainer.css'


class ColourContainer extends Component {
    static defaultProps = {
        colours: [
            "red",
            "green",
            "purple",
            "lime",
            "teal",
            "orange",
            "cyan",
            "pink",
            "lightblue",
            "blue",
            "yellow",
            "saffron",
            "violet",
            "tomato",
            "skyblue",
            "limegreen"
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