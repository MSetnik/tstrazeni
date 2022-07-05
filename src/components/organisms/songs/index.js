import React from "react";
import './index.css'
import background from '../../../assets/instrumentiBackground.png'
import placeholder from '../../../assets/songPlaceholder.png'
import song2placeholder from '../../../assets/tstrazeni-home-1.png'
import song3placeholder from '../../../assets/home-content3.png'
import song4placeholder from '../../../assets/tstrazeni-reserveus.png'

import SongCard from "../../molecules/songCard";

const Songs = () => {
    return(
        <div className="songs-container">
            <img style={{zIndex: 99}} src={background} alt="bg" />

            <div className="songs-grid-container row align-items-center row-cols-xs-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 justify-content-center pys-1">
                <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <SongCard songName={'momacka noc'} linkToSong={'https://www.youtube.com/watch?v=OkDSMxXZQrI'} imgUri={song4placeholder}/>
                </div>
                <div className="col  col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 justify-content-center">
                    <SongCard songName={'bijeli bozic'} linkToSong={'https://www.youtube.com/watch?v=fnwHDo6eQ0A'} imgUri={placeholder} />
                </div>

                <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <SongCard songName={'majci za rodendan (Cover)'} linkToSong={'https://www.youtube.com/watch?v=xRmqo6w7Xw8'} imgUri={song2placeholder}/>
                </div>

                <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <SongCard songName={'dvije ljubavi'} linkToSong={'https://www.youtube.com/watch?v=-JbHPiOuoOQ'} imgUri={song3placeholder}/>
                </div>
            </div>

        </div>
    )
}

export default Songs