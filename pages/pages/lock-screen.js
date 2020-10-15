import Centered from '../../src/layouts/centered'
import {withRedux} from '../../src/lib/redux'
import Form from '../../src/components/lock-screen-1'

const LockScreen = () => {
  return (
    <Centered>
      {/*widget*/}
      <div className="w-full p-2">
        <div className="flex flex-col w-full items-center justify-start p-4">
          <img
            src="/assets/faces/m1.png"
            alt="image"
            className="shadow rounded-full h-20 w-20 border-2 border-gray-100 mb-2"
          />
        </div>
      </div>
      {/*end widget*/}

      <h3 className="text-default mb-4 text-xl text-center font-bold">
        Hi, Lucas!
      </h3>
      <p className="text-secondary mb-4">
        Please enter your email address to login.
      </p>
      <Form />
    </Centered>
  )
}

export default withRedux(LockScreen)
