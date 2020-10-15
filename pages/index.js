import React from 'react'
import Link from 'next/link'
import Layout from '../src/layouts/empty'
import {withRedux} from '../src/lib/redux'
import ChangeDirection from '../src/components/change-direction'
import Logo from '../src/components/landing/logo'
import Icons from '../src/components/landing/icons'
import Images from '../src/components/landing/images'
import Title from '../src/components/landing/title'
import Text from '../src/components/landing/text'
import Features from '../src/components/landing/features'
import Options from '../src/components/landing/options'
import Screenshots from '../src/components/landing/screenshots'
import Sidebars from '../src/components/landing/sidebars'

const Index = () => (
  <Layout>
    <div
      className={`homepage bg-white text-default w-full py-4 px-8 flex items-center justify-start shadow`}>
      <Logo />
      <div className="hidden lg:flex homepage-navbar-actions">
        <Link href="/documentation">
          <a className="btn btn-default">Mtrade</a>
        </Link>
        <a
          href="https://themeforest.net/item/concavo-react-tailwind-css-admin-template/26535790"
          target="_blank"
          className="btn btn-default bg-indigo-700 text-white rounded-lg">
          Purchase now, Joe, now, please
        </a>
      </div>
      <ChangeDirection />
    </div>
    <div className="container max-w-screen-lg mx-auto lg:px-4">
      {/*section*/}
      <div className="mb-4 lg:mb-16 pt-4 lg:pt-24">
        <div className="flex flex-wrap items-center">
          <div className="w-full p-4 lg:w-3/5 lg:px-8">
            <Title />
            <Text />
            <div className="flex flex-row items-center justify-start mb-6">
              <Icons />
            </div>
            <div className="flex flex-row items-center justify-start">
              <a
                href="https://themeforest.net/item/concavo-react-tailwind-css-admin-template/26535790"
                target="_blank"
                className="btn btn-default btn-lg bg-indigo-700 text-white rounded-lg">
                Purchase now
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-2/5">
            <Images />
          </div>
        </div>
      </div>

      {/*section*/}
      <Options />

      {/*section*/}
      <Features />

      {/*section*/}
      <Screenshots />

      <div className="text-center text-xs text-gray-400 pb-4">
        &copy; 2020 Batchthemes
      </div>
    </div>
  </Layout>
)

export default withRedux(Index)
