import React from "react";
import './index.css'
import background from '../../../assets/instrumentiBackground.png'
import PerformancesTable from "../../molecules/performancesTable";
import SongCard from "../../molecules/songCard";

const Songs = () => {
    return(
        <div className="songs-container">
            <img style={{zIndex: 99}} src={background} alt="bg" />


            <div className="songs-grid-container row row-cols-3 justify-content-center ">
                <div className="col">
                    <SongCard />
                </div>
                <div className="col">
                    <SongCard />
                </div>

                <div className="col">
                    <SongCard />
                </div>

                <div className="col">
                    <SongCard />
                </div>
            </div>

        </div>
    )
}

export default Songs