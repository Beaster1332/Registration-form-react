import React, { Component } from "react";
import '../App.css';
import Form from './Form.js';

class App extends Component {
  render() {
    const containerCenter = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    };
    return (
        <div style={containerCenter}>
            <Form />
        </div>
    )
  }
}

export default App;