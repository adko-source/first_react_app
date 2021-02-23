import { Component } from 'react';
import NumberItem from './NumberItem';



class NumberList extends Component {
    static defaultProps = {

    };
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.state = {
            nums: [1, 2, 3, 4, 5, 6]

        };
    };

    removeItem(item) {
        console.log('Removing item ' + item);
        let filteredNums = this.state.nums.filter(i => i !== item);
        console.log(filteredNums);
        this.setState({ nums: filteredNums });
    };

    render() {
        // nums will return an array of components
        let nums = this.state.nums.map(num => <NumberItem key={num} num={num} remove={this.removeItem} />);
        return (
            <section>
                <ul style={{ listStyleType: "none" }}>{nums}</ul>
            </section>



        )

    };
};

export default NumberList;