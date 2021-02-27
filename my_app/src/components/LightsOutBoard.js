import { Component } from 'react';
import '../css/LightsOut.css'
import LightsOutCell from './LightsOutCell'
import { getRandomItemFromArray } from '../helpers.js';

class LightsOut extends Component {
    static defaultProps = {
        cells: Array.from({length: 25}),
        colour: "cyan",
      

    };
    constructor(props) {
        super(props);
        this.toggleLights = this.toggleLights.bind(this);
        this.toggleNeighboursLights = this.toggleNeighboursLights.bind(this);
        this.checkForWin = this.checkForWin.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.state = {
            cells: (this.props.cells.map((item, index) => <LightsOutCell key={index} id={index} colour={this.randomizeLights()} flip={this.toggleLights}/>)),
            win: false,
        }
    };

    toggleLights(id) {
      console.log('Light number ' + id + ' clicked')
      let newArr = [...this.state.cells];
      switch(newArr[id].props.colour) {
          case "cyan":
            newArr[id] = <LightsOutCell key={id} id={id} colour={"#282829"} flip={this.toggleLights}/>;
          break;
          case "#282829":
            newArr[id] = <LightsOutCell key={id} id={id} colour={"cyan"} flip={this.toggleLights}/>;
          break;
      };
      this.setState({
        cells: [...newArr]
      });
      this.toggleNeighboursLights(id, newArr);
    }

    toggleNeighboursLights(id, arr) {
        switch(id) {
            case 0:
              arr[1] = <LightsOutCell key={1} id={1} colour={arr[1].props.colour === "cyan" ? "#282829" : arr[1].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[5] = <LightsOutCell key={5} id={5} colour={arr[5].props.colour === "cyan" ? "#282829" : arr[5].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 1:
              arr[0] = <LightsOutCell key={0} id={0} colour={arr[0].props.colour === "cyan" ? "#282829" : arr[0].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[2] = <LightsOutCell key={2} id={2} colour={arr[2].props.colour === "cyan" ? "#282829" : arr[2].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[6] = <LightsOutCell key={6} id={6} colour={arr[6].props.colour === "cyan" ? "#282829" : arr[6].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 2:
              arr[1] = <LightsOutCell key={1} id={1} colour={arr[1].props.colour === "cyan" ? "#282829" : arr[1].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[3] = <LightsOutCell key={3} id={3} colour={arr[3].props.colour === "cyan" ? "#282829" : arr[3].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[7] = <LightsOutCell key={7} id={7} colour={arr[7].props.colour === "cyan" ? "#282829" : arr[7].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 3:
              arr[2] = <LightsOutCell key={2} id={2} colour={arr[2].props.colour === "cyan" ? "#282829" : arr[2].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[4] = <LightsOutCell key={4} id={4} colour={arr[4].props.colour === "cyan" ? "#282829" : arr[4].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[8] = <LightsOutCell key={8} id={8} colour={arr[8].props.colour === "cyan" ? "#282829" : arr[8].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 4:
              arr[3] = <LightsOutCell key={3} id={3} colour={arr[3].props.colour === "cyan" ? "#282829" : arr[3].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[9] = <LightsOutCell key={9} id={9} colour={arr[9].props.colour === "cyan" ? "#282829" : arr[9].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 5:
              arr[0] = <LightsOutCell key={0} id={0} colour={arr[0].props.colour === "cyan" ? "#282829" : arr[0].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[6] = <LightsOutCell key={6} id={6} colour={arr[6].props.colour === "cyan" ? "#282829" : arr[6].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[10] = <LightsOutCell key={10} id={10} colour={arr[10].props.colour === "cyan" ? "#282829" : arr[10].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 6:
              arr[1] = <LightsOutCell key={1} id={1} colour={arr[1].props.colour === "cyan" ? "#282829" : arr[1].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[5] = <LightsOutCell key={5} id={5} colour={arr[5].props.colour === "cyan" ? "#282829" : arr[5].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[7] = <LightsOutCell key={7} id={7} colour={arr[7].props.colour === "cyan" ? "#282829" : arr[7].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[11] = <LightsOutCell key={11} id={11} colour={arr[11].props.colour === "cyan" ? "#282829" : arr[11].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 7:
              arr[2] = <LightsOutCell key={2} id={2} colour={arr[2].props.colour === "cyan" ? "#282829" : arr[2].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[8] = <LightsOutCell key={8} id={8} colour={arr[8].props.colour === "cyan" ? "#282829" : arr[8].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[6] = <LightsOutCell key={6} id={6} colour={arr[6].props.colour === "cyan" ? "#282829" : arr[6].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[12] = <LightsOutCell key={12} id={12} colour={arr[12].props.colour === "cyan" ? "#282829" : arr[12].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 8:
              arr[3] = <LightsOutCell key={3} id={3} colour={arr[3].props.colour === "cyan" ? "#282829" : arr[3].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[9] = <LightsOutCell key={9} id={9} colour={arr[9].props.colour === "cyan" ? "#282829" : arr[9].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[13] = <LightsOutCell key={13} id={13} colour={arr[13].props.colour === "cyan" ? "#282829" : arr[13].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[7] = <LightsOutCell key={7} id={7} colour={arr[7].props.colour === "cyan" ? "#282829" : arr[7].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 9:
              arr[4] = <LightsOutCell key={4} id={4} colour={arr[4].props.colour === "cyan" ? "#282829" : arr[4].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[8] = <LightsOutCell key={8} id={8} colour={arr[8].props.colour === "cyan" ? "#282829" : arr[8].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[14] = <LightsOutCell key={14} id={14} colour={arr[14].props.colour === "cyan" ? "#282829" : arr[14].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 10:
              arr[5] = <LightsOutCell key={5} id={5} colour={arr[5].props.colour === "cyan" ? "#282829" : arr[5].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[11] = <LightsOutCell key={11} id={11} colour={arr[11].props.colour === "cyan" ? "#282829" : arr[11].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[15] = <LightsOutCell key={15} id={15} colour={arr[15].props.colour === "cyan" ? "#282829" : arr[15].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 11:
              arr[6] = <LightsOutCell key={6} id={6} colour={arr[6].props.colour === "cyan" ? "#282829" : arr[6].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[10] = <LightsOutCell key={10} id={10} colour={arr[10].props.colour === "cyan" ? "#282829" : arr[10].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[16] = <LightsOutCell key={16} id={16} colour={arr[16].props.colour === "cyan" ? "#282829" : arr[16].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[12] = <LightsOutCell key={12} id={12} colour={arr[12].props.colour === "cyan" ? "#282829" : arr[12].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 12:
              arr[11] = <LightsOutCell key={11} id={11} colour={arr[11].props.colour === "cyan" ? "#282829" : arr[11].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[13] = <LightsOutCell key={13} id={13} colour={arr[13].props.colour === "cyan" ? "#282829" : arr[13].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[7] = <LightsOutCell key={7} id={7} colour={arr[7].props.colour === "cyan" ? "#282829" : arr[7].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[17] = <LightsOutCell key={17} id={17} colour={arr[17].props.colour === "cyan" ? "#282829" : arr[17].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 13:
              arr[12] = <LightsOutCell key={12} id={12} colour={arr[12].props.colour === "cyan" ? "#282829" : arr[12].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[18] = <LightsOutCell key={18} id={18} colour={arr[18].props.colour === "cyan" ? "#282829" : arr[18].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[14] = <LightsOutCell key={14} id={14} colour={arr[14].props.colour === "cyan" ? "#282829" : arr[14].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[8] = <LightsOutCell key={8} id={8} colour={arr[8].props.colour === "cyan" ? "#282829" : arr[8].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 14:
              arr[13] = <LightsOutCell key={13} id={13} colour={arr[13].props.colour === "cyan" ? "#282829" : arr[13].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[9] = <LightsOutCell key={9} id={9} colour={arr[9].props.colour === "cyan" ? "#282829" : arr[9].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[19] = <LightsOutCell key={19} id={19} colour={arr[19].props.colour === "cyan" ? "#282829" : arr[19].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 15:
              arr[16] = <LightsOutCell key={16} id={16} colour={arr[16].props.colour === "cyan" ? "#282829" : arr[16].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[10] = <LightsOutCell key={10} id={10} colour={arr[10].props.colour === "cyan" ? "#282829" : arr[10].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[20] = <LightsOutCell key={20} id={20} colour={arr[20].props.colour === "cyan" ? "#282829" : arr[20].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 16:
              arr[15] = <LightsOutCell key={15} id={15} colour={arr[15].props.colour === "cyan" ? "#282829" : arr[15].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[17] = <LightsOutCell key={17} id={17} colour={arr[17].props.colour === "cyan" ? "#282829" : arr[17].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[11] = <LightsOutCell key={11} id={11} colour={arr[11].props.colour === "cyan" ? "#282829" : arr[11].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[21] = <LightsOutCell key={21} id={21} colour={arr[21].props.colour === "cyan" ? "#282829" : arr[21].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 17:
              arr[16] = <LightsOutCell key={16} id={16} colour={arr[16].props.colour === "cyan" ? "#282829" : arr[16].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[18] = <LightsOutCell key={18} id={18} colour={arr[18].props.colour === "cyan" ? "#282829" : arr[18].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[12] = <LightsOutCell key={12} id={12} colour={arr[12].props.colour === "cyan" ? "#282829" : arr[12].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[22] = <LightsOutCell key={22} id={22} colour={arr[22].props.colour === "cyan" ? "#282829" : arr[22].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 18:
              arr[17] = <LightsOutCell key={17} id={17} colour={arr[17].props.colour === "cyan" ? "#282829" : arr[17].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[19] = <LightsOutCell key={19} id={19} colour={arr[19].props.colour === "cyan" ? "#282829" : arr[19].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[13] = <LightsOutCell key={13} id={13} colour={arr[13].props.colour === "cyan" ? "#282829" : arr[13].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[23] = <LightsOutCell key={23} id={23} colour={arr[23].props.colour === "cyan" ? "#282829" : arr[23].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 19:
              arr[18] = <LightsOutCell key={18} id={18} colour={arr[18].props.colour === "cyan" ? "#282829" : arr[18].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[14] = <LightsOutCell key={14} id={14} colour={arr[14].props.colour === "cyan" ? "#282829" : arr[14].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[24] = <LightsOutCell key={24} id={24} colour={arr[24].props.colour === "cyan" ? "#282829" : arr[24].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 20:
              arr[15] = <LightsOutCell key={15} id={15} colour={arr[15].props.colour === "cyan" ? "#282829" : arr[15].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[21] = <LightsOutCell key={21} id={21} colour={arr[21].props.colour === "cyan" ? "#282829" : arr[21].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 21:
              arr[20] = <LightsOutCell key={20} id={20} colour={arr[20].props.colour === "cyan" ? "#282829" : arr[20].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[22] = <LightsOutCell key={22} id={22} colour={arr[22].props.colour === "cyan" ? "#282829" : arr[22].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[16] = <LightsOutCell key={16} id={16} colour={arr[16].props.colour === "cyan" ? "#282829" : arr[16].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 22:
              arr[21] = <LightsOutCell key={21} id={21} colour={arr[21].props.colour === "cyan" ? "#282829" : arr[21].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[23] = <LightsOutCell key={23} id={23} colour={arr[23].props.colour === "cyan" ? "#282829" : arr[23].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[17] = <LightsOutCell key={17} id={17} colour={arr[17].props.colour === "cyan" ? "#282829" : arr[17].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 23:
              arr[24] = <LightsOutCell key={24} id={24} colour={arr[24].props.colour === "cyan" ? "#282829" : arr[24].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[18] = <LightsOutCell key={18} id={18} colour={arr[18].props.colour === "cyan" ? "#282829" : arr[18].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[22] = <LightsOutCell key={22} id={22} colour={arr[22].props.colour === "cyan" ? "#282829" : arr[22].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
            case 24:
              arr[19] = <LightsOutCell key={19} id={19} colour={arr[19].props.colour === "cyan" ? "#282829" : arr[19].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[13] = <LightsOutCell key={13} id={13} colour={arr[13].props.colour === "cyan" ? "#282829" : arr[13].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
              arr[23] = <LightsOutCell key={23} id={23} colour={arr[23].props.colour === "cyan" ? "#282829" : arr[23].props.colour === "#282829" && "cyan"} flip={this.toggleLights}/>;
            break;
        };
        this.setState({
            cells: [...arr]
        });
        console.log(this.checkForWin(arr));
    };

    randomizeLights() {
        const cells = ["cyan", "#282829"];
        let cell = getRandomItemFromArray(cells);
        return cell;
    };

    checkForWin(arr) {
        let cells = arr;
        //  If every cell component colour prop is grey set win to true
        if(cells.every(cell => cell.props.colour === "#282829")) {
            this.setState({win: true})
        };
    };

    restartGame() {
        this.setState({
            cells: (this.props.cells.map((item, index) => <LightsOutCell key={index} id={index} colour={this.randomizeLights()} flip={this.toggleLights}/>)),
            win: false
        })
    };

    render() {
        // Win is either true or false
        let win = this.state.win;
        return (
        <div>
            <h1>Lights Out</h1>
            <div className={!win  ? "LightsOut" : null} > 
                {win ? <img src="https://media.giphy.com/media/NEvPzZ8bd1V4Y/source.gif" /> : this.state.cells}
            </div>
            <button onClick={this.restartGame}>Restart Game</button>
        </div>
        )
    }
}; 

export default LightsOut;