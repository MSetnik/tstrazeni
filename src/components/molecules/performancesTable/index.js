import React from "react";
import BtnRounded from "../../atoms/btn-rounded";
import Divider from "../../atoms/divider";
import PerformancesTableRow from "../performanceTableRow";
import './index.css'

const PerformancesTable = () => {
    return (
        <div className="performances-table-container">
            <div className="performances-table-head">
                <h1 className="performances-table-title">
                    Sljedeći nastupi:
                </h1>

                <Divider width={'100%'} color='rgba(255,215,2,0.77)' />
            </div>
           

            <div className="performances-table-body">
                <PerformancesTableRow date={"6. svibnja"} place={'valpovo, cb best'} />
                <PerformancesTableRow date={"12. svibnja"} place={'satnica, cb cosak'} />
                <PerformancesTableRow date={"13. svibnja"} place={'ladimirevci, cb toni'} />
                <PerformancesTableRow date={"17. svibnja"} place={'valpovo, KC katancic'} />
            </div>
        </div>
    )
}

export default PerformancesTable