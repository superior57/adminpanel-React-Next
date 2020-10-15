import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Widget from '../../src/components/widget'

const Buttons = () => (
  <Layout>
    <SectionTitle title="UI Elements" subtitle="Buttons" />

    <Widget title="Buttons" description={<span>Default button styles</span>}>
      <div className="flex flex-wrap items-center justify-start children-x-2">
        <button className="btn btn-default btn-indigo">Default</button>
        <button className="btn btn-default btn-indigo btn-rounded">
          Rounded
        </button>
        <button className="btn btn-default btn-indigo btn-rounded btn-icon">
          <i className="icon-heart font-bold ltr:mr-2 rtl:ml-2" />
          <span>With icon</span>
        </button>
        <button className="btn btn-default btn-indigo btn-rounded btn-icon">
          <span className="ltr:mr-2 rtl:ml-2">With icon</span>
          <i className="icon-heart font-bold" />
        </button>
        <button className="btn btn-circle btn-indigo">
          <i className="icon-star font-bold" />
        </button>
      </div>
    </Widget>

    <Widget
      title="Outlined buttons"
      description={<span>Outlined button styles</span>}>
      <div className="flex flex-wrap items-center justify-start children-x-2">
        <button className="btn btn-default btn-outlined btn-outlined-indigo">
          Default
        </button>
        <button className="btn btn-default btn-outlined btn-outlined-indigo btn-rounded">
          Rounded
        </button>
        <button className="btn btn-default btn-outlined btn-rounded btn-icon btn-outlined-indigo">
          <i className="icon-heart font-bold ltr:mr-2 rtl:ml-2" />
          <span>With icon</span>
        </button>
        <button className="btn btn-default btn-outlined btn-rounded btn-icon btn-outlined-indigo">
          <span className="ltr:mr-2 rtl:ml-2">With icon</span>
          <i className="icon-heart font-bold" />
        </button>
        <button className="btn btn-circle btn-outlined-indigo btn-outlined">
          <i className="icon-star font-bold" />
        </button>
      </div>
    </Widget>

    <Widget title="Flat buttons" description={<span>Flat button styles</span>}>
      <div className="flex flex-wrap items-center justify-start children-x-2">
        <button className="btn btn-default btn-flat btn-flat-indigo">
          Default
        </button>
        <button className="btn btn-default btn-flat btn-rounded btn-icon btn-flat-indigo">
          <i className="icon-heart font-bold ltr:mr-2 rtl:ml-2" />
          <span>With icon</span>
        </button>
        <button className="btn btn-default btn-flat btn-rounded btn-icon btn-flat-indigo">
          <span className="ltr:mr-2 rtl:ml-2">With icon</span>
          <i className="icon-heart font-bold" />
        </button>
        <button className="btn btn-circle btn-flat-indigo btn-flat">
          <i className="icon-star font-bold" />
        </button>
      </div>
    </Widget>

    <Widget
      title="Raised buttons"
      description={<span>Flat button styles</span>}>
      <div className="flex flex-wrap items-center justify-start children-x-2">
        <button className="btn btn-default btn-flat btn-flat-indigo btn-raised">
          Default
        </button>
        <button className="btn btn-default btn-flat btn-flat-indigo btn-rounded btn-raised">
          Rounded
        </button>
        <button className="btn btn-default btn-flat btn-rounded btn-icon btn-flat-indigo btn-raised">
          <i className="icon-heart font-bold ltr:mr-2 rtl:ml-2" />
          <span>With icon</span>
        </button>
        <button className="btn btn-default btn-flat btn-rounded btn-icon btn-flat-indigo btn-raised">
          <span className="ltr:mr-2 rtl:ml-2">With icon</span>
          <i className="icon-heart font-bold" />
        </button>
        <button className="btn btn-circle btn-flat-indigo btn-flat btn-raised">
          <i className="icon-star font-bold" />
        </button>
      </div>
    </Widget>

    <Widget title="Buttons" description={<span>Button sizes</span>}>
      <div className="flex flex-wrap items-center justify-start children-x-2 mb-2">
        <button className="btn btn-lg btn-indigo">Large</button>
        <button className="btn btn-default btn-indigo">Default</button>
        <button className="btn btn-sm btn-indigo">Small</button>
      </div>
      <div className="flex flex-wrap items-center justify-start children-x-2">
        <button className="btn btn-circle btn-circle-lg btn-indigo">
          <i className="icon-heart font-bold" />
        </button>
        <button className="btn btn-circle btn-circle-default btn-indigo">
          <i className="icon-heart font-bold" />
        </button>
        <button className="btn btn-circle btn-circle-sm btn-indigo">
          <i className="icon-heart font-bold" />
        </button>
      </div>
    </Widget>
  </Layout>
)
export default withRedux(Buttons)
