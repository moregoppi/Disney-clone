import React, { Component } from 'react'
import Buttonbottom from './images/cta-logo-two.png'
import './landingpage.css'
import Logocta from './images/cta-logo-one.svg'

class Landingpage extends Component {
    // navigatetoNextPage = () => {
    //     this.props.history.push('/homepage')
    // }
    render() {
        return (
            <div class='landingpage'>
                <div>
                <img src={Logocta} id='buttonbottom' alt="" />
                </div>
                <div id='button-container'>
                    <button id='getit'>GET ALL THERE</button>
                </div>
                <div id='text-container'>
                    <small id='text1'>Get Premier Access to Rays and the Last Dragon for an additional fee with a disney+ subscription.</small>
                </div>
                <div id='text-container2'>
                    <small id='text2'>As of 03/26/21, the price of Disney Bundle will increase by $1</small>
                </div>
                <div id='image-container'>
                    <img src={Buttonbottom} id='buttonbottom' alt="" />
                </div>
            </div>
        )
    }
}

export default Landingpage