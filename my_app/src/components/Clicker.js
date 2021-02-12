import React, {Component} from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        let icons = this.props.icons;

        return(
            <div>
            <p>Text is: {this.props.text}</p>
            <p>Count is: {this.props.count}</p>
            {this.props.count === 7 && <p>7!</p>}
            <p>{icons.map(i => <i class={`fas fa-${i}`}></i>)}</p>
            </div>
              )
    };
};

export default Clicker;