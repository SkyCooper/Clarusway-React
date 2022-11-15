import React, { memo } from 'react'

const TaxComp = ({taxData}) => {
    console.log("Render => TaxComp components")
    return (
        <div>TaxComp : {JSON.stringify(taxData.current)}</div>
    )
}

export default memo(TaxComp)