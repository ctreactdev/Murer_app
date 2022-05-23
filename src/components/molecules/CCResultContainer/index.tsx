import React, { Fragment } from 'react'

interface ICCResultContainer {
  squareMeter: number
}
const ConsumptionCalculatorResultsContainer: React.FC<ICCResultContainer> = ({
  squareMeter,
}) => {
  return (
    <Fragment>
      <div className="center">
        <h4>Kvardrat meter af gulv</h4>
        <h5>{squareMeter}</h5>
      </div>
    </Fragment>
  )
}
export default ConsumptionCalculatorResultsContainer
