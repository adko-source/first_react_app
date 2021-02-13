import '../css/Ball.css'


const Ball = (props) => {

    return (
        <div className="Ball">
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