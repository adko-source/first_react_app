import React, {Component} from 'react';

class Lottery extends Component {
    static defaultProps = {
        title: "LOTTO",
        size: 6
    };
    constructor(props) {
    super(props);
    this.state = {
        lottoNums: []
    };
    this.generateLotto = this.generateLotto.bind(this);
    
    };

    generateLotto() {
       let lottoSize = this.props.size;
       let newNums = [];
       for(let i = 0; i < lottoSize; i++) {
            let newNum = Math.floor(Math.random()*100);
            newNums.push(newNum);
            
       };
       this.setState({lottoNums: [...newNums]});
    
       
       
    };
    
    render() {
        const lottoNums = this.state.lottoNums;
        return(<div>
                {<h1>{this.props.title}</h1>}
              <p>{lottoNums.map(num => " " + num)}</p>
              <button onClick={this.generateLotto}>Generate</button>
              </div>);
    };
}

export default Lottery;