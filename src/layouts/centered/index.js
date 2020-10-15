import {useSelector, shallowEqual} from 'react-redux'
import Logo from './logo'
import Head from 'next/head'

const Centered = ({children}) => {
  const {direction, name} = useSelector(
    state => ({
      direction: state.direction,
      name: state.name
    }),
    shallowEqual
  )
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div
        data-background="white"
        data-logo="white"
        data-direction={direction}
        className={`text-gray-900 centered w-full h-screen flex items-center justify-center bg-gray-100 text-sm`}>
        <div className="w-full m-2 p-4 lg:w-1/3 lg:m-0 lg:p-8 bg-white shadow-lg">
          <Logo />
          {children}
        </div>
      </div>
    </>
  )
}

export default Centered
