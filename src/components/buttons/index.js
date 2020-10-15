import PropTypes from 'prop-types'

export const Button = ({
  rounded = false,
  outlined = false,
  flat = false,
  raised = false,
  icon = false,
  size = 'default',
  color = 'indigo',
  classNames = '',
  children,
  props
}) => {
  let classes = []
  if (rounded) classes.push('btn-rounded')
  if (raised) classes.push('btn-raised')
  if (icon) classes.push('btn-icon')
  if (classNames) classes.push(classNames)
  if (flat) {
    return (
      <button
        className={`btn btn-${size} btn-flat btn-flat-${color} ${classes.join(
          ' '
        )}`}
        {...props}>
        {children}
      </button>
    )
  }
  if (outlined) {
    return (
      <button
        className={`btn btn-${size} btn-outlined btn-outlined-${color} ${classes.join(
          ' '
        )}`}
        {...props}>
        {children}
      </button>
    )
  }
  return (
    <button
      className={`btn btn-${size} btn-${color} ${classes.join(' ')}`}
      {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
  rounded: PropTypes.bool,
  outlined: PropTypes.bool,
  flat: PropTypes.bool,
  icon: PropTypes.bool,
  raised: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.any,
  classNames: PropTypes.string
}

export const CircularButton = ({
  size = 'default',
  color = 'indigo',
  outlined = false,
  flat = false,
  raised = false,
  classNames = '',
  children,
  props
}) => {
  let classes = []
  if (raised) classes.push('btn-raised')
  if (classNames) classes.push(classNames)
  if (flat) {
    return (
      <button
        className={`btn btn-circle btn-circle-${size} btn-flat btn-flat-${color} ${classes.join(
          ' '
        )}`}
        {...props}>
        {children}
      </button>
    )
  }
  if (outlined) {
    return (
      <button
        className={`btn btn-circle btn-circle-${size} btn-outlined btn-outlined-${color} ${classes.join(
          ' '
        )}`}
        {...props}>
        {children}
      </button>
    )
  }
  return (
    <button
      className={`btn btn-circle btn-circle-${size} btn-${color} ${classes.join(
        ' '
      )}`}
      {...props}>
      {children}
    </button>
  )
}

CircularButton.propTypes = {
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
  flat: PropTypes.bool,
  raised: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.any,
  classNames: PropTypes.string
}
