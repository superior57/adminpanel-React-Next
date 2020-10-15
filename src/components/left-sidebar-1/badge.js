const Badge = ({type, color, text}) => {
  if (type === 'rounded') {
    return (
      <span
        className={`bg-${color}-500 text-white rounded-full font-light flex items-center justify-center overflow-hidden text-center uppercase text-xxs h-5 w-5`}>
        {text}
      </span>
    )
  }
  return (
    <span
      className={`bg-${color}-500 text-white rounded-lg font-light flex items-center justify-center uppercase text-xxs px-1 py-0`}>
      {text}
    </span>
  )
}

export default Badge
