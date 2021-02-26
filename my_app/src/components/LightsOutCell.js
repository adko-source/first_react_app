import '../css/Tile.css';

const Tile = (props) => {
    
    
    return (
        <div onClick={props.flip.bind(null, props.id)} style={{ backgroundColor: props.colour }} className="Tile" ></div >
    )
};

export default Tile;