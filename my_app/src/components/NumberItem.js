import { Component } from 'react'


class NumberItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    // I passed a function called 'remove' as props
    // from the parent component so it's available here
    // this way you can keep child components stateless
    handleRemove() {
        this.props.remove(this.props.num);
    };

    render() {
        return (
            <li>
                {this.props.num}
                <button onClick={this.handleRemove}>X</button>
            </li>

        )
    };
};

export default NumberItem;