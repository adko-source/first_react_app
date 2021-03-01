import { useState } from 'react';
import ShoppingListForm from './ShoppingListForm';


function ShoppingList(props) {
    // Set default props
    const {items = [{item: "Eggs", qty: 12}, {item: "Eggs", qty: 110} ]} = props;
    const [list, updateList] = useState(items);
    function handleClick(evt) {
        // Make a copy of state array
        let listCopy = [...list];
        // Create new array without index that was clicked
        let newList = listCopy.filter(i => i != listCopy[evt.target.id] )
        // Update state with new list
        updateList(newList);
    };

    return(
    <div>
        <h1>Shopping List</h1>
        <ol style={{margin: "auto", width: "100px"}}>
        {list.map((i, index) => <li key={index}>{i.item} {i.qty} <button key={index} id={index} onClick={handleClick}>X</button></li>)}
        </ol>
    <ShoppingListForm update={updateList} list={list}/>
    </div>
    )
}

export default ShoppingList;