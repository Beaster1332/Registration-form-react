import React, { Component } from "react";
import Submit from "../Submit/Submit";

class Form extends Component {
    render () {
        return (
            <div style={{textAlign: "center"}}>
                <h1>Войти</h1>
                <div className="formText">
                    <label for="email">Ваш E-mail</label>
                    <input type="email" id="email" placeholder="@"/>
                    <label for="pass">Ваш пароль</label>
                    <input type="password" placeholder="***"/>
                </div>
                <Submit />
            </div>
        )
    }
}

export default Form;