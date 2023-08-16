import React, { Component } from 'react'
import './navbar.css'
import Logo from './images/logo.png'

class navbar extends Component {
    render() {
        return (
            <div id='head'>
                <nav id='navbar'>
                    <img src={Logo} id='logo' alt="" />
                    <a type='button' id='login' href='https://leetcode.com/problemset/database/'>Login</a>
                </nav>
            </div>
        )
    }
}

export default navbar
