import React, { useState } from "react";
import './index.css'

import reserveBG from '../../../assets/tstrazeni-reserveus.png'
import ReserveUsBtn from "../../atoms/reserveUsBtn";

const HomeReserveUs = () => {
    const [hoverColor, setHoverColor] = useState('#D3B308')
    // onMouseEnter={() => {
    //     setHoverColor('rgba(255,215,2,0.67)')
    // }}
    // onMouseLeave = {() => {
    //     setHoverColor('#D3B308')
    // }} 
    return(
        <div className="home-reserve-container">
            <img src={reserveBG} alt='bg' />

            <div className="reserve-us-btn-container">
               <ReserveUsBtn 
                onMouseEnter={() => {
                    setHoverColor('rgba(255,215,2,0.67)')
                }}
                onMouseLeave = {() => {
                    setHoverColor('#D3B308')
                }} className="reserve-us-btn"  width="200" height="200" color={hoverColor}/>
               <div className="reserve-us-text-div">
                    <h2><p>R</p>ezerviraj</h2>
                    <h2>nas</h2>
               </div>
            </div>

        </div>
    )
}

export default HomeReserveUs