const Flag = ({size = 'lg', code}) => (
  <span className={`text-${size} flag-icon flag-icon-${code}`}></span>
)

export default Flag
