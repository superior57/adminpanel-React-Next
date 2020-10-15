import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Widget from '../../src/components/widget'
import {Badge, CircularBadge} from '../../src/components/badges'

const Badges = () => (
  <Layout>
    <SectionTitle title="UI Elements" subtitle="Badges" />

    <Widget
      title="Default badges"
      description={
        <span>
          Use the <code>&lt;Badge /&gt;</code> component for simple badges. Use
          the <code>&lt;CircularBadge /&gt;</code> component for circular
          badges. Use the <code>rounded</code> prop for rounded badges.
        </span>
      }>
      <div className="flex flex-wrap items-center justify-start mb-2 w-full children-x-2">
        {['lg', 'default', 'sm'].map((size, i) => (
          <Badge key={i} size={size} color="indigo">
            Default
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-start mb-2 w-full children-x-2">
        {['lg', 'default', 'sm'].map((size, i) => (
          <Badge key={i} size={size} color="red" rounded>
            Default
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-start mb-2 w-full children-x-2">
        {['lg', 'default', 'sm'].map((size, i) => (
          <CircularBadge key={i} size={size} color="green">
            1
          </CircularBadge>
        ))}
      </div>
    </Widget>

    <Widget
      title="Outlined badges"
      description={
        <span>
          Use the <code>outlined</code> prop for outlined badges. 
        </span>
      }>
      <div className="flex flex-wrap items-center justify-start mb-2 w-full children-x-2">
        {['lg', 'default', 'sm'].map((size, i) => (
          <Badge key={i} size={size} color="indigo" outlined>
            Default
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-start mb-2 w-full children-x-2">
        {['lg', 'default', 'sm'].map((size, i) => (
          <Badge key={i} size={size} color="red" rounded outlined>
            Default
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-start mb-2 w-full children-x-2">
        {['lg', 'default', 'sm'].map((size, i) => (
          <CircularBadge key={i} size={size} color="green" outlined>
            1
          </CircularBadge>
        ))}
      </div>
    </Widget>

    <Widget
      title="Alternative colors"
      description={
        <span>
          Use the <code>alt</code> prop for badges with alternative colors.
        </span>
      }>
      <div className="flex flex-wrap items-center justify-start mb-2 w-full children-x-2">
        {['lg', 'default', 'sm'].map((size, i) => (
          <Badge key={i} size={size} color="teal" alt>
            Default
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-start mb-2 w-full children-x-2">
        {['lg', 'default', 'sm'].map((size, i) => (
          <Badge key={i} size={size} color="red" rounded alt>
            Default
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-start mb-2 w-full children-x-2">
        {['lg', 'default', 'sm'].map((size, i) => (
          <CircularBadge key={i} size={size} color="blue" alt>
            1
          </CircularBadge>
        ))}
      </div>
    </Widget>

  </Layout>
)
export default withRedux(Badges)
