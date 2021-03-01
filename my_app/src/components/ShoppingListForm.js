import { useState } from 'react';

function ShoppingListForm(props) {
    function handleSubmit(evt) {
        evt.preventDefault();
        let item = evt.target[0].value;
        let qty = evt.target[1].value;
        props.update([...props.list, {item: item , qty: qty}])
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="item">Item:</label>
            <input id="item" type="text" placeholder="Item" ></input>
            <label htmlFor="qty">Qty:</label>
            <input id="qty" type="text" placeholder="Qty" ></input>
            <button>Add to List</button>
        </form>
    )
};

export default ShoppingListForm;