import { useState } from "react"

const BtnRounded = ({color= 'rgba(255,215,2,0.77)', text, onClick = () => {}}) => {
    const [hover,setHover] = useState(false)
    const [hoverColor,setHoverColor] = useState(color)
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
        <div className="btn-reserve" style={{backgroundColor: hoverColor, paddingTop: '10px', paddingBottom: '0px'}}>
          <p>
            {text}
          </p>
        </div>
    </div>
    )
}

export default BtnRounded