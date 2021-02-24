import { useState } from 'react';
import { getRandomItemFromArray } from '../helpers.js';
import '../css/WisdomDispenser.css';


let wordsOfWisdom = [
    "The only wisdom is knowing you know nothing",
    "Be kind",
    "You got this"
];

function keyUpHandler(event) {
    //console.log({ wisdom });
    console.log(event);
    if (event.code === "KeyU") {
        console.log("WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
        alert("woo! :)");
    };
}

function WisdomDispener(props) {

    let wisdom = getRandomItemFromArray(wordsOfWisdom);
    return (
        <div className="WisdomDispenser" onMouseEnter={() => console.log(wisdom)}>
            <textarea onKeyUp={keyUpHandler}></textarea>
            <p>Type U for WOO</p>
        </div>
    )
};

export default WisdomDispener;

