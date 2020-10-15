import Centered from '../../src/layouts/centered'
import Link from 'next/link'
import {withRedux} from '../../src/lib/redux'

const Logout = () => {
  return (
    <Centered>
      {/*widget*/}
      <div className="w-full p-2">
        <div className="flex flex-col w-full items-center justify-start p-4">
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
            className="stroke-current text-indigo-700 inline-block h-24 w-24">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </div>
      </div>
      {/*end widget*/}

      <h3 className="font-sans text-default mb-4 text-xl text-center font-bold">
        Good bye!
      </h3>

      <p className="text-secondary mb-4 text-center">
        You have succesfully signed out.
      </p>
      <div className="flex text-sm mb-4">
        <Link href="/pages/login">
          <a className="text-center w-full block px-4 py-2 uppercase font-bold text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none active:outline-none">
            Login
          </a>
        </Link>
      </div>
    </Centered>
  )
}

export default withRedux(Logout)
