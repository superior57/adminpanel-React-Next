import PropTypes from 'prop-types'

export const ProgressBar = ({width, color}) => {
  return (
    <div className={`progress-bar progress-bar-${color}`}>
      <div style={{width: `${width}%`}}></div>
    </div>
  )
}

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string
}

export const ProgressBarWithText = ({width, color}) => {
  return (
    <div
      className={`progress-bar progress-bar-with-text progress-bar-${color}`}>
      <div style={{width: `${width}%`}}>{width}%</div>
    </div>
  )
}

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string
}

export const ProgressBarMultiple = ({items}) => {
  return (
    <div className="flex flex-row">
      {items.map((item, i) => (
        <div style={{width: `${item.width}%`}}>
          <div>{item.width}%</div>
        </div>
      ))}
    </div>
  )
}

ProgressBarMultiple.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number.isRequired,
      color: PropTypes.string
    })
  ).isRequired
}
