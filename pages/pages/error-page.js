import Centered from '../../src/layouts/centered'
import Link from 'next/link'
import {withRedux} from '../../src/lib/redux'

const ErrorPage = () => {
  return (
    <Centered>
      <div className="w-full my-4 text-center">
        <h1 className="text-6xl text-indigo-700">404</h1>
      </div>

      <p className="text-secondary mb-4 text-center">
        We're sorry. The page you requested could not be found. Please go back
        to the homepage or contact us at support@dashboard.com
      </p>
      <div className="flex text-sm mb-4">
        <Link href="/">
          <a className="text-center w-full block px-4 py-2 uppercase font-bold text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none active:outline-none">
            Go back
          </a>
        </Link>
      </div>
    </Centered>
  )
}

export default withRedux(ErrorPage)
