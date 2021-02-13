import React, { Component } from 'react';
import Ball from './Ball';

class Lottery extends Component {
    static defaultProps = {
        title: "LOTTO",
        size: 6,
        max: 40
    };
    constructor(props) {
        super(props);
        this.state = {
            // Create empty array with a given length
            lottoNums: Array.from({ length: this.props.size }),
        };
        this.generateLotto = this.generateLotto.bind(this);
        this.increaseNum = this.increaseNum.bind(this);

    };

    // When updating an array or obj in state 
    // make a copy with the spread operator and add to that
    changeValue() {
        let newValue = [1, 2, 3];
        this.setState({ value: [...this.state.oldValue, ...newValue] })
    };
    // When adding to a number pass current state as an argument
    increaseNum() {
        this.setState((prevState) => ({ num: prevState.num + 1 }))
    };

    generateLotto() {
        let lottoSize = Math.min(6, this.props.size);
        let numberMax = this.props.max;
        let newNums = [];
        for (let i = 0; i < lottoSize; i++) {
            let newNum = Math.floor(Math.random() * numberMax) + 1;
            newNums.push(newNum);

        };
        this.setState({ lottoNums: [...newNums] });
    };



    render() {
        const lottoNums = this.state.lottoNums;
        return (
            <div>
                {<h1>{this.props.title}</h1>}
                <p>{lottoNums.map(num => <Ball number={num} />)}</p>
                <button onClick={this.generateLotto}>Generate</button>

            </div>
        );
    };
}

export default Lottery;