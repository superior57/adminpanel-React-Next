import Centered from '../../src/layouts/centered'
import Link from 'next/link'
import {withRedux} from '../../src/lib/redux'

const EmailConfirmation = () => {
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
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </div>
      </div>
      {/*end widget*/}

      <p className="text-secondary mb-4 text-center">
        A email has been send to your@email.com. Please check for an email from
        dashboard and click on the included link to reset your password.
      </p>
      <div className="flex text-sm mb-4">
        <Link href="/pages/reset-password">
          <a className="text-center w-full block px-4 py-2 uppercase font-bold text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none active:outline-none">
            Go back
          </a>
        </Link>
      </div>
    </Centered>
  )
}

export default withRedux(EmailConfirmation)
