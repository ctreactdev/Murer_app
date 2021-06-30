import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectedCount, incrementCount, decrementCount } from '../../../features/counter/counterSlice'
import { Button } from '../../atoms'

const Counter: React.FC = () => {
  const count = useSelector(selectedCount)
  const dispatch = useDispatch()

  const increament = () => {
    dispatch(incrementCount())
  }
  const decrement = () => {
    dispatch(decrementCount())
  }

  return (
    <Fragment>
      <div className="container">
        <div className="center">
          <h1>Counter component <strong>{count}</strong></h1>
          <Button
            className="btn-flat red"
            buttonText="increament"
            onClick={increament}
          >.</Button>
          <hr />
          <Button
            className="btn-flat blue"
            buttonText="decrement"
            onClick={decrement}
          >.</Button>
        </div>
      </div>
    </Fragment>
  )
}
export default Counter;