import {useSelector, useDispatch, shallowEqual} from 'react-redux'

const ChangeDirection = () => {
  const {direction} = useSelector(
    state => ({
      direction: state.direction
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  return (
    <button
      className="btn btn-default btn-transparent"
      onClick={() => {
        dispatch({
          type: 'SET_CONFIG',
          config: {
            key: 'direction',
            value: direction === 'ltr' ? 'rtl' : 'ltr'
          }
        })
      }}>
      {direction === 'ltr' ? 'rtl' : 'ltr'}
    </button>
  )
}

export default ChangeDirection
