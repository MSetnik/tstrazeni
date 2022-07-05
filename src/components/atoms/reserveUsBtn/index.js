import { useState } from "react"

const ReserveUsBtn = ({width = '306', height = '306', color = '#D3B308'}) => {
    return (
        <svg className="reserve-us-btn-svg" width={width} height={height} viewBox="0 0 306 305" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_8_341)">
            <circle cx="152" cy="148" r="148" fill={color}/>
            </g>
            <defs>
            <filter id="filter0_d_8_341" x="-2" y="0" width="308" height="308" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="6"/>
            <feGaussianBlur stdDeviation="3"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_341"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_341" result="shape"/>
            </filter>
            </defs>
        </svg>

    )
}

export default ReserveUsBtn