import React, { Component } from "react";

class Submit extends Component {
    render () {
        const btnStyles = {
            width: '100px',
            height: '40px',
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '10px'
        };
        return (
            <button style={btnStyles}>Вход</button>
        )
    }
}

export default Submit;