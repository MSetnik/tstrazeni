import React from "react";
import './index.css'

import reserveBG from '../../../assets/tstrazeni-reserveus.png'
import ReserveUsBtn from "../../atoms/reserveUsBtn";

const HomeReserveUs = () => {
    return(
        <div className="home-reserve-container">
            <img src={reserveBG} alt='bg' />

            <div className="reserve-us-btn-container">
               <ReserveUsBtn className="reserve-us-btn"  width="200" height="200"/>
               <div className="reserve-us-text-div">
                    <h2><p>R</p>ezerviraj</h2>
                    <h2>nas</h2>
               </div>
            </div>

        </div>
    )
}

export default HomeReserveUs