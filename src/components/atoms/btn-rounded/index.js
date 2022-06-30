import { useState } from "react"

const BtnRounded = ({color= 'rgba(255,215,2,0.77)', text, onClick = () => {}}) => {
    const [hover ,setHover] = useState(false)
    return(
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '600',
        fontSize: '14px',
        textTransform: 'capitalize',
        fontFamily: 'Roboto, sans-serif', 
        letterSpacing: '2px',
        cursor: hover ?'pointer' : 'default'
    }}
    onClick={onClick}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
        <div id="btn-reserve" style={{backgroundColor: color}}>
          <p>
            {text}
          </p>
        </div>
    </div>
    )
}

export default BtnRounded