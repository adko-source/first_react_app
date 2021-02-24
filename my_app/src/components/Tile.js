import { Component, useState } from 'react';
import { getRandomItemFromArray } from '../helpers.js';
import '../css/Tile.css';

// class Tile extends Component {
//     constructor(props) {
//         super(props);
//         this.propColours = this.props.colours;
//         // this.initialColour = this.propColours[Math.floor(Math.random() * this.propColours.length)];
//         this.initialColour = getRandomIndex(this.propColours);
//         this.state = {
//             colour: this.initialColour,
//         };
//         this.handleClick = this.handleClick.bind(this);
//         this.changeColour = this.changeColour.bind(this);
//     };

//     changeColour() {
//         let newColour;
//         // Get new colour if same as current state colour
//         do {
//             newColour = getRandomIndex(this.propColours);

//         } while (newColour === this.state.colour);
//         this.setState({ colour: newColour });
//     };

//     handleClick() {
//         this.changeColour();
//     };

//     render() {
//         return <div onClick={this.handleClick} className="Tile" style={{ backgroundColor: this.state.colour }}></div>
//     };
// };

const Tile = (props) => {
    const propColours = props.colours;
    const firstColour = getRandomItemFromArray(propColours);
    const [intialColour, setColour] = useState(firstColour);

    function changeColour() {
        let newColour;
        do {
            newColour = getRandomItemFromArray(propColours);
            console.log(newColour);
        } while (intialColour === newColour);
        setColour(newColour);

    }

    function clickHandler() {
        changeColour();
    }
    return (
        <div onClick={clickHandler} style={{ backgroundColor: intialColour }} className="Tile" ></div >
    )
};

export default Tile;