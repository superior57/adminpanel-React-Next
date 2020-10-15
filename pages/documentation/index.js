import React from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import {UnderlinedTabs} from '../../src/components/tabs'
import SectionTitle from '../../src/components/section-title'
import {
  Intro,
  Instructions,
  TemplateStructure
} from '../../src/components/documentation/installation'
import {
  CodeStructure,
  NamingConventions,
  Folders,
  Files
} from '../../src/components/documentation/code-structure'
import {Customization} from '../../src/components/documentation/faq'
import {Credits} from '../../src/components/documentation/credits'
import {ChangeLog} from '../../src/components/documentation/change-log'
import {Tree} from '../../src/components/documentation/tree'

const InstallationTab = () => (
  <div className="flex">
    <div className="w-full">
      <Intro />
      <Instructions />
      <TemplateStructure />
    </div>
  </div>
)

const CodeStructureTab = () => (
  <div className="flex">
    <div className="w-full">
      <CodeStructure />
      <NamingConventions />
      <Folders />
      <Files />
      <Tree />
    </div>
  </div>
)

const FaqTab = () => (
  <div className="flex">
    <div className="w-full">
      <Customization />
    </div>
  </div>
)

const CreditsTab = () => (
  <div className="flex">
    <div className="w-full">
      <Credits />
    </div>
  </div>
)

const ChangeLogTab = () => (
  <div className="flex">
    <div className="w-full">
      <ChangeLog />
    </div>
  </div>
)

const Index = () => {
  const tabs = [
    {index: 0, title: 'Installation', content: <InstallationTab />},
    {index: 1, title: 'Code structure', content: <CodeStructureTab />},
    {index: 2, title: 'FAQ', content: <FaqTab />},
    {index: 3, title: 'Credits', content: <CreditsTab />},
    {index: 4, title: 'Change log', content: <ChangeLogTab />}
  ]
  return (
    <Layout>
      <SectionTitle title="Documentation" subtitle="Concavo documentation" />
      <div className="flex flex-wrap">
        <div className="w-full">
          <UnderlinedTabs tabs={tabs} />
        </div>
      </div>
    </Layout>
  )
}
export default withRedux(Index)
