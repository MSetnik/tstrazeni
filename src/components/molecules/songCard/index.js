import React from "react";
import './index.css'
import placeholder from '../../../assets/songPlaceholder.png'

const SongCard = () => {
    return(
        <div className="song-card-container ">
            <div className="song-image-div">
                <img alt="bg" src={placeholder} />
                <div className="song-img-overlay" />
            </div>

            <div className="songs-text-div">
                <h1>TS Trazeni</h1>
                <h2>Dvije ljubavi</h2>
            </div>
        </div>
    )
}

export default SongCard