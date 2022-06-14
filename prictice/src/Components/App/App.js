import React, { Component } from "react";
import './App.css';
import Form from '../Form/Form.js';
import '../Form/Form.css';
import '../Submit/Submit.css';

class App extends Component {
  render() {
    return (
        <div className="containerCenter">
            <Form />
        </div>
    )
  }
}

export default App;