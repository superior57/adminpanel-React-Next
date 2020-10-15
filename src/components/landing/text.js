import {useSelector, shallowEqual} from 'react-redux'
const Text = () => {
  const {name} = useSelector(
    state => ({
      name: state.name
    }),
    shallowEqual
  )
  return (
    <p className="leading-6 text-secondary mb-4">
      {name} is an advanced, responsive admin template built with React, Redux,
      Next.js and Tailwind CSS. It includes +100 components in every layout and
      lots of widgets and custom made reusable components to help you kickstart
      your next React project or application. RTL ready.
    </p>
  )
}

export default Text
