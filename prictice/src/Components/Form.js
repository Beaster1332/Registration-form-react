import React, { Component } from "react";
import Submit from "./Submit";

class Form extends Component {
    render () {
        return (
            <div style={{textAlign: "center"}}>
                <h1>Войти</h1>
                <div>
                    <label for="email">Ваш E-mail</label>
                    <br />
                    <input type="email" id="email" placeholder="@"/>
                    <br />
                    <label for="pass">Ваш пароль</label>
                    <br />
                    <input type="password" placeholder="***"/>
                </div>
                <Submit />
            </div>
        )
    }
}

export default Form;