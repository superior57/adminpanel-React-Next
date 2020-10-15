import Centered from '../../src/layouts/centered'
import {withRedux} from '../../src/lib/redux'
import Form from '../../src/components/subscribe-1'

const Subscribe = () => {
  return (
    <Centered>
      <p className="text-secondary mb-4">
        Please enter your email address to subscribe to our newsletter to
        receive weekly updates
      </p>
      <Form />
    </Centered>
  )
}

export default withRedux(Subscribe)
