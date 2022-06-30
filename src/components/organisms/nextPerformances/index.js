import React from "react";
import './index.css'
import background from '../../../assets/instrumentiBackground.png'
import PerformancesTable from "../../molecules/performancesTable";

const NextPerformances = () => {
    return(
        <div className="next-performances-container">
            <img src={background} alt="bg" />


            <div className="next-performances-table-container">
                <PerformancesTable />
            </div>

        </div>
    )
}

export default NextPerformances