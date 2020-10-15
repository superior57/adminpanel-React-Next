import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Widget from '../../src/components/widget'

const sizes = ['h-8', 'h-16', 'h-20', 'h-24', 'h-32']
const Images = () => (
  <Layout>
    <SectionTitle title="UI Elements" subtitle="Images" />
    <Widget
      title="Rounded images"
      description={
        <span>
          Use the <code>.rounded</code> class for rounded images
        </span>
      }>
      <div className="flex flex-wrap justify-start items-start children-x-4">
        {sizes.map((size, i) => (
          <img
            key={i}
            src="/27.png"
            alt="image"
            className={`${size} shadow rounded max-w-full border-none`}
          />
        ))}
      </div>
    </Widget>

    <Widget
      title="Circular images"
      description={
        <span>
          Use the <code>.rounded-full</code> class for circular images
        </span>
      }>
      <SectionTitle title="UI Elements" subtitle="Circular images" />
      <div className="flex flex-wrap justify-start items-start children-x-4">
        {sizes.map((size, i) => (
          <img
            key={i}
            src="/27.png"
            alt="image"
            className={`${size} shadow-lg rounded-full max-w-full border-none`}
          />
        ))}
      </div>
    </Widget>

    <Widget
      title="Raised images"
      description={
        <span>
          Use the <code>.raised</code> class for raised images
        </span>
      }>
      <SectionTitle title="UI Elements" subtitle="Raised images" />
      <div className="flex flex-wrap justify-start items-start children-x-4">
        {sizes.map((size, i) => (
          <img
            key={i}
            src="/27.png"
            alt="image"
            className={`${size} raised rounded-full max-w-full border border-default`}
          />
        ))}
      </div>
    </Widget>

    {/*
    <div className="flex flex-wrap justify-start items-start hidden">
      {sizes.map((size, i) => (
        <div className="relative mr-2">
          <img
            key={i}
            src="/27.png"
            alt="image"
            className={`${size} shadow-lg rounded-full max-w-full border border-default z-0`}
          />
          <span className="h-2 w-2 bg-green-500 text-white flex items-center justify-center rounded-full text-lg font-display font-bold z-10 absolute top-0 left-0"></span>
        </div>
      ))}
    </div>
    */}

  </Layout>
)
export default withRedux(Images)
