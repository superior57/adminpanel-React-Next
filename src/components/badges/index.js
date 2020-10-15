import PropTypes from 'prop-types'

export const Badge = ({
  rounded = false,
  outlined = false,
  alt = false,
  size = 'default',
  color = 'indigo',
  children
}) => {
  let css = []
  if (rounded) css.push('rounded-lg')
  css = css.join(' ')
  if (alt) {
    return (
      <span className={`badge badge-${size} badge-alt-${color} ${css}`}>
        {children}
      </span>
    )
  }
  if (outlined) {
    return (
      <span
        className={`badge badge-${size} badge-outlined badge-outlined-${color} ${css}`}>
        {children}
      </span>
    )
  }
  return (
    <span className={`badge badge-${size} badge-${color} ${css}`}>
      {children}
    </span>
  )
}
Badge.propTypes = {
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
  rounded: PropTypes.bool,
  outlined: PropTypes.bool,
  alt: PropTypes.bool,
  children: PropTypes.any,
  color: PropTypes.string
}

export const CircularBadge = ({
  size = 'default',
  outlined = false,
  alt = false,
  color = 'indigo',
  children
}) => {
  if (alt) {
    return (
      <span
        className={`badge badge-circle badge-${size} badge-alt-${color}`}>
        {children}
      </span>
    )
  }
  if (outlined) {
    return (
      <span
        className={`badge badge-circle badge-${size} badge-outlined badge-outlined-${color}`}>
        {children}
      </span>
    )
  }

  return (
    <span className={`badge badge-circle badge-${size} badge-${color}`}>
      {children}
    </span>
  )
}

CircularBadge.propTypes = {
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
  children: PropTypes.any,
  color: PropTypes.string
}
