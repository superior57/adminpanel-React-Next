import React, {useState} from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import Layout from '../../src/layouts/empty'
import Link from 'next/link'
import {withRedux} from '../../src/lib/redux'
import Form from '../../src/components/login-2'
import {ToggleLeft} from 'react-feather'

const Logo = () => {
  const {name} = useSelector(
    state => ({
      name: state.name
    }),
    shallowEqual
  )
  return (
    <div
      className={`bg-transparent text-white flex flex-row items-center uppercase font-bold text-2xl tracking-wider justify-start z-10`}>
      <Link href="/">
        <a className="flex flex-row items-center justify-start">
          <ToggleLeft size={28} />
          <span className="ltr:ml-1 rtl:mr-2 font-sans">{name}</span>
        </a>
      </Link>
    </div>
  )
}

const Login = () => {
  const {name} = useSelector(
    state => ({
      name: state.name
    }),
    shallowEqual
  )
  return (
    <Layout>
      <div className="w-full flex flex-row h-screen overflow-hidden">
        <div className="hidden lg:flex lg:flex-col w-1/2 bg-purple-700 text-white p-8 items-start justify-between relative">
          <img
            alt="bg"
            className="img1 absolute inset-0 z-0 object-contain h-auto w-full"
            src="/bg-login-1.jpg"
          />
          <style jsx>{`
            .img1 {
              opacity: 0.05;
            }
          `}</style>
          <Logo />
          <div className="flex flex-col z-10">
            <p className="text-3xl font-bold font-poppins mb-4">
              Welcome to {name}!
            </p>
            <p className="text-sm font-thin">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </div>
          <div className="flex flex-row items-center justify-between w-full text-xs z-10">
            <div className="text-white">&copy; {name} 2020</div>
            <div className="flex flex-row ml-auto">
              <div className="px-1">
                <Link href="/pages/privacy-policy">
                  <a>Privacy policy</a>
                </Link>
              </div>
              <div className="px-1">
                <Link href="/pages/terms-of-service">
                  <a>Terms of service</a>
                </Link>
              </div>
              <div className="px-1">
                <Link href="/pages/contact-us">
                  <a>Contact us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-white text-default p-8 lg:p-24 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold font-poppins mb-4">
            Login to {name}
          </p>
          <div className="w-full mb-4">
            <Alert type="info" rounded>
              <span className="font-thin">Use email </span>{' '}
              <span className="font-bold">your@email.com</span>{' '}
              <span className="font-thin">and password</span>{' '}
              <span className="font-bold">demo</span>{' '}
              <span className="font-thin">to continue</span>
            </Alert>
          </div>
          <Form />
        </div>
      </div>
    </Layout>
  )
}

const Info = ({color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`${color} stroke-current inline-block h-5 w-5 ltr:mr-2 rtl:ml-2`}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
)

const Icon = ({type, color}) => {
  if (type === 'warning') return <Warning color={color} />
  if (type === 'info') return <Info color={color} />
  return null
}

const Alert = ({
  bg = 'bg-indigo-700',
  color = 'text-white',
  border = false,
  shadow = false,
  rounded = false,
  type = null,
  children
}) => {
  const [hidden, setHidden] = useState(false)
  let css = []
  css.push(bg)
  css.push(color)
  if (border) css.push(border)
  if (shadow) css.push('shadow')
  if (rounded) css.push('rounded')
  if (hidden) css.push('hidden')
  css = css.join(' ')
  return (
    <div
      className={`${css} w-full flex flex-wrap items-center justify-start p-4 text-sm`}>
      <div>{children}</div>
      <button
        className="bg-transparent flex items-center justify-center focus:outline-none ml-auto hidden"
        onClick={() => setHidden(!hidden)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={`${color} stroke-current inline-block h-5 w-5`}>
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  )
}

export default withRedux(Login)
