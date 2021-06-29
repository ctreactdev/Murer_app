import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectedCount, incrementCount, decrementCount } from '../../../features/counter/counterSlice'

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
      <div className="card-action">
        <div className="center">
          <h1>Counter component <strong>{count}</strong></h1>
        </div>

        <div className="group">
          <button
            className="waves-effect waves-teal btn-flat blue"
            type="button"
            onClick={decrement}
          >
            decrement
          </button>
          <button
            className="waves-effect waves-teal btn-flat red"
            type="button"
            onClick={increament}
          >
            increment
          </button>
        </div>
      </div>

    </Fragment>
  )
}
export default Counter;