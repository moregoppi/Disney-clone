import React, { Component } from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import Bading1 from './images/badging4.jpg'
import Bading2 from './images/badging.jpg'
import Bading3 from './images/badging2.jpg'
import Bading4 from './images/badging3.jpg'
import Bading5 from './images/badging5.jpg'
import Bading6 from './images/badging6.jpg'
import Bading7 from './images/badging7.jpg'

class homepage extends Component {
  render() {
        return (
        <div>
            <p><img src={Bading1} className='Slider'/></p>
            <p><img src={Bading2} className='Slider'/></p>
            <p><img src={Bading3} className='Slider'/></p>
            <p><img src={Bading4} className='Slider'/></p>
            <p><img src={Bading5} className='Slider'/></p>
            <p><img src={Bading6} className='Slider'/></p>
            <p><img src={Bading7} className='Slider'/></p>
        </div>
        )
    }
}

export default homepage