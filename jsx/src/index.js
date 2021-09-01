//Import React & React Dom libraries
import React from 'react';
import ReactDOM from 'react-dom'


const getButtonText = ()=> "Click on me!"
//Create a react component
const App = () => {
    const buttonText = "Click me";
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
        </div>
    )
}

// Take the react component and show on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);