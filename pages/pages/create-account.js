import Centered from '../../src/layouts/centered'
import {withRedux} from '../../src/lib/redux'
import Form from '../../src/components/create-account-1'

const CreateAccount = () => {
  return (
    <Centered>
      <p className="text-secondary mb-4">
        Please enter your name, email address and password to create an account
      </p>
      <Form />
    </Centered>
  )
}

export default withRedux(CreateAccount)
