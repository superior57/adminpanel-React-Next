import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Widget from '../../src/components/widget'
import {Cross, Check} from '../../src/components/svg'
import {
  TextInput,
  InvalidTextInput,
  ValidTextInput
} from '../../src/components/forms/text-inputs'
import {
  InlineTextInput,
  InvalidInlineTextInput,
  ValidInlineTextInput
} from '../../src/components/forms/inline-text-inputs'
import {
  Select,
  InvalidSelect,
  ValidSelect
} from '../../src/components/forms/selects'
import {
  InlineSelect,
  InlineInvalidSelect,
  InlineValidSelect
} from '../../src/components/forms/selects'

import {Radio, InvalidRadio, ValidRadio} from '../../src/components/forms/radios'
import {InlineRadio, InvalidInlineRadio, ValidInlineRadio} from '../../src/components/forms/inline-radios'

import {Checkbox, InvalidCheckbox, ValidCheckbox} from '../../src/components/forms/checkboxes'
import {InlineCheckbox, InvalidInlineCheckbox, ValidInlineCheckbox} from '../../src/components/forms/inline-checkboxes'


const colors = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'indigo',
  'purple',
  'pink'
]

const Index = () => (
  <Layout>
    <SectionTitle title="Forms" subtitle="Inputs" />

    <Widget title="Regular" description={<span>Text inputs</span>}>
      <div className="flex flex-wrap w-full children-x-4">
        <div className="w-1/4">
          <TextInput />
        </div>
        <div className="w-1/4">
          <InvalidTextInput />
        </div>
        <div className="w-1/4">
          <ValidTextInput />
        </div>
      </div>
    </Widget>

    <Widget title="Inline" description={<span>Inline text inputs</span>}>
      <div className="flex flex-col flex-wrap w-full">
        <div className="w-1/2 mb-4">
          <InlineTextInput />
        </div>
        <div className="w-1/2 mb-4">
          <InvalidInlineTextInput />
        </div>
        <div className="w-1/2 mb-4">
          <ValidInlineTextInput />
        </div>
      </div>
    </Widget>

    <Widget title="Selects" description={<span>Select inputs</span>}>
      <div className="flex flex-row flex-wrap w-full children-x-4">
        <div className="w-1/4">
          <Select />
        </div>
        <div className="w-1/4">
          <InvalidSelect />
        </div>
        <div className="w-1/4">
          <ValidSelect />
        </div>
      </div>
    </Widget>

    <Widget
      title="Inline Selects"
      description={<span>Inline select inputs</span>}>
      <div className="flex flex-col w-full">
        <div className="w-1/2 mb-4">
          <InlineSelect />
        </div>

        <div className="w-1/2 mb-4">
          <InlineInvalidSelect />
        </div>

        <div className="w-1/2 mb-4">
          <InlineValidSelect />
        </div>
      </div>
    </Widget>

    <Widget title="Radios" description={<span>Default components</span>}>
      <div className="flex flex-col w-full">
        <div className="w-1/2 mb-4">
          <Radio />
        </div>
        <div className="w-1/2 mb-4">
          <InvalidRadio />
        </div>
        <div className="w-1/2 mb-4">
          <ValidRadio />
        </div>
      </div>
    </Widget>

    <Widget title="Inline radios" description={<span>Default components</span>}>
      <div className="flex flex-col w-full">
        <div className="w-1/2 mb-4">
          <InlineRadio />
        </div>
        <div className="w-1/2 mb-4">
          <InvalidInlineRadio />
        </div>
        <div className="w-1/2 mb-4">
          <ValidInlineRadio />
        </div>
      </div>
    </Widget>

    <Widget title="Checkboxes" description={<span>Default components</span>}>
      <div className="flex flex-col w-full">
        <div className="w-1/2 mb-4">
          <Checkbox />
        </div>
        <div className="w-1/2 mb-4">
          <InvalidCheckbox />
        </div>
        <div className="w-1/2 mb-4">
          <ValidCheckbox />
        </div>
      </div>
    </Widget>

    <Widget title="Inline checkboxes" description={<span>Default components</span>}>
      <div className="flex flex-col w-full">
        <div className="w-1/2 mb-4">
          <InlineCheckbox />
        </div>
        <div className="w-1/2 mb-4">
          <InvalidInlineCheckbox />
        </div>
        <div className="w-1/2 mb-4">
          <ValidInlineCheckbox />
        </div>
      </div>
    </Widget>

  </Layout>
)
export default withRedux(Index)
