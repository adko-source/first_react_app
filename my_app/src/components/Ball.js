
import React, { Component } from 'react';
import Lottery from './Lottery';

const Ball = (props) => {

    return (
        <div>
            {props.number}
        </div>
    )

}

// class Ball extends Component {
//     constructor() {
//         super();
//     }
//     render() {
//         return (<div>
//             {this.props.number}
//         </div>)
//     }
// }

export default Ball;