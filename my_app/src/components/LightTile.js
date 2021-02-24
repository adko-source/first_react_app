import { Component } from 'react';
import { getRandomItemFromArray } from '../helpers.js';
import '../css/Tile.css';

const Tile = (props) => {
    
    
    return (
        <div  style={{ backgroundColor: props.colour }} className="Tile" ></div >
    )
};

export default Tile;