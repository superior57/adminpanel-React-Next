import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'

const Index = () => (
  <Layout>
    <SectionTitle title="Privacy policy" subtitle="Sample privacy policy" />
    <div className="w-full text-sm">
      <p className="mb-2 leading-7">
        Your privacy is important to us. It is Dashboard's policy to respect
        your privacy regarding any information we may collect from you across
        our website, <a href="https://concavo.mobifica.com">https://concavo.mobifica.com</a>,
        and other sites we own and operate.
      </p>
      <p className="mb-2 leading-7">
        We only ask for personal information when we truly need it to provide a
        service to you. We collect it by fair and lawful means, with your
        knowledge and consent. We also let you know why we’re collecting it and
        how it will be used.
      </p>
      <p className="mb-2 leading-7">
        We only retain collected information for as long as necessary to provide
        you with your requested service. What data we store, we’ll protect
        within commercially acceptable means to prevent loss and theft, as well
        as unauthorized access, disclosure, copying, use or modification.
      </p>
      <p className="mb-2 leading-7">
        We don’t share any personally identifying information publicly or with
        third-parties, except when required to by law.
      </p>
      <p className="mb-2 leading-7">
        Our website may link to external sites that are not operated by us.
        Please be aware that we have no control over the content and practices
        of these sites, and cannot accept responsibility or liability for their
        respective privacy policies.
      </p>
      <p className="mb-2 leading-7">
        You are free to refuse our request for your personal information, with
        the understanding that we may be unable to provide you with some of your
        desired services.
      </p>
      <p className="mb-2 leading-7">
        Your continued use of our website will be regarded as acceptance of our
        practices around privacy and personal information. If you have any
        questions about how we handle user data and personal information, feel
        free to contact us.
      </p>
      <p className="mb-2 leading-7">
        This policy is effective as of 1 April 2020.
      </p>
    </div>
  </Layout>
)
export default withRedux(Index)
