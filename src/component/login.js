import React, { Component} from 'react'
import '../css/login.css'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
            <React.Fragment>
                <form className="login-loginForm" action="/homepage/" method="get">
                    <div className="login-email">
                        <label htmlFor="login-email">email</label>
                        <input type="text" id="login-email" name="userEmail"/>
                    </div>
                    <div className="login-password">
                        <label htmlFor="login-password">password</label>
                        <input type="password" id="login-pass" name="password" minLength="8" required/>
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </React.Fragment>
        )
    }
}