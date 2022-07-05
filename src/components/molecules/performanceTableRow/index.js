import BtnRounded from "../../atoms/btn-rounded"
import Divider from "../../atoms/divider"
import './index.css'

const PerformancesTableRow = ({id, date, place, divider = true}) => {
    return (
        <>
           <div className="performances-table-row">
                <h1 className="performances-table-text">
                    {date}
                </h1>

                <h1 className="performances-table-text">
                    {place}
                </h1>
                
                <BtnRounded text={'Dodaj u kalendar'}/>

            </div>
            {
                divider && <Divider width={'100%'} color='#ffffff' /> 
            }
        </>
    )
}

export default PerformancesTableRow