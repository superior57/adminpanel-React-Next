import Centered from '../../src/layouts/centered'
import {withRedux} from '../../src/lib/redux'
import Form from '../../src/components/reset-password-1'

const ResetPassword = () => {
  return (
    <Centered>
      <p className="text-secondary mb-4">
        Please enter your new password to reset your account
      </p>
      <Form />
    </Centered>
  )
}

export default withRedux(ResetPassword)
