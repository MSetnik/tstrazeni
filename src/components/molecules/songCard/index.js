import React from "react";
import './index.css'
import placeholder from '../../../assets/songPlaceholder.png'
import playBtn from '../../../assets/play-btn.png'

const SongCard = ({songName, linkToSong, imgUri = placeholder}) => {
    return(
        <div className="song-card-container ">
            <div className="song-image-div">
                <img alt="bg" src={imgUri} />
                <div className="song-img-overlay"> 
                    <a href={linkToSong} target='_blank' rel="noreferrer">
                        <img alt='bg' src={playBtn} />
                    </a>
                </div>
            </div>

            <div className="songs-text-div">
                <h1>TS Trazeni</h1>
                <h2>{songName}</h2>
            </div>
        </div>
    )
}

export default SongCard