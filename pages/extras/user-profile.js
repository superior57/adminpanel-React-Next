import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import {UnderlinedTabs} from '../../src/components/tabs'
import AccountSettings from '../../src/components/profile/account-settings'
import EmailPreferences from '../../src/components/profile/email-preferences'
import SecuritySettings from '../../src/components/profile/security-settings'

const tabs = [
  {index: 0, title: 'Account settings', content: <AccountSettings />},
  {index: 1, title: 'Email preferences', content: <EmailPreferences />},
  {index: 2, title: 'Security settings', content: <SecuritySettings />}
]
const Index = () => (
  <Layout>
    <SectionTitle title="Extras" subtitle="User profile" />

    {/*widget*/}
    <div className="flex items-center justify-start px-2">
      <div className="flex-shrink-0 w-24">
        <img
          src="/assets/faces/m1.png"
          alt="image"
          className="shadow rounded-full h-20 w-20 border-2 border-gray-100 mb-2"
        />
      </div>
      <div className="py-2 px-2">
        <p className="text-default text-base font-bold whitespace-no-wrap">
          Lucas Smith
        </p>
        <p className="text-secondary text-sm whitespace-no-wrap">
          Vital Database Dude
        </p>
        <div className="flex flex-row items-center justify-start w-full py-1 children-x-2">
          <i className="text-xl text-default icon-social-twitter"></i>
          <i className="text-xl text-default icon-social-facebook"></i>
          <i className="text-xl text-default icon-social-instagram"></i>
        </div>
      </div>
    </div>
    {/*end widget*/}

    <div className="flex flex-wrap">
      <div className="w-full p-4">
        <UnderlinedTabs tabs={tabs} />
      </div>
    </div>
  </Layout>
)

export default withRedux(Index)
