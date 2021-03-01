import { useState } from 'react';

function Form(props) {

    const [username, updateUserName] = useState("");
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");

    function handleChange(evt) {
        let inputType = evt.target.type;
        let newInput = evt.target.value;
        console.log(newInput)
        switch(inputType) {
            case "text":
                updateUserName(newInput);
            break;
            case "email":
                updateEmail(newInput);
            break;
            case "password":
                updatePassword(newInput);
            break;
        }; 
    };

    function handleSumbit(evt) {
        evt.preventDefault();  // Prevents page from reloading
        alert('You typed ' + username);
        updateUserName("");
    };
    
    return(
        <form onSubmit={handleSumbit}>
            <label htmlFor="username">Username: </label>
            <input id="username" placeholder="Please enter username" onChange={handleChange} type="text" value={username}></input>
            <label htmlFor="email">Email: </label>
            <input id="email" placeholder="Please enter email" onChange={handleChange} type="email" value={email}></input>
            <label htmlFor="password">Password: </label>
            <input id="password" placeholder="Please enter password" onChange={handleChange} type="password" value={password}></input>
            <button>Sumbit!</button>
        </form>
    )
}

export default Form;