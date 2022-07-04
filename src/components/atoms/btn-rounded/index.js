import { useEffect, useState } from "react"
import './index.css'
import {FaCalendarPlus} from 'react-icons/fa'

const BtnRounded = ({color= 'rgba(255,215,2,0.77)', text, onClick = () => {}}) => {
    const [hover,setHover] = useState(false)
    const [hoverColor,setHoverColor] = useState(color)

    const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth)

      window.addEventListener('resize', () => {
        setWindowInnerWidth(window.innerWidth)
      }) 
 

    return(
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '600',
        fontSize: '14px',
        fontFamily: 'Roboto, sans-serif', 
        letterSpacing: '2px',
        marginBottom: '4px',
        cursor: hover ?'pointer' : 'default'
    }}
    onClick={onClick}
    onMouseEnter={() =>{ 
      setHover(true)
      setHoverColor('rgba(255,215,2,0.67)')
    }}
    onMouseLeave={() => {
      setHover(false)
      setHoverColor('rgba(255,215,2,0.77)')
    }}>
      {/* TODO: Doraditi centriranje buttona na dodavanje eventa u kalendar */}
        <div className="btn-reserve" style={{backgroundColor: hoverColor}}>
          {
            windowInnerWidth > 768 ?
          <p style={{ margin: 'auto'}}>
            {text}
          </p> : 
            <FaCalendarPlus />

          }
        </div>
    </div>
    )
}

export default BtnRounded