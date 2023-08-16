import type { Meta, StoryObj } from '@storybook/react'

import Icon from '../Icon'

import { FormAlert } from '.'
import { IFormAlert } from './types'

const meta = {
  title: 'Component/FormAlert',
  component: FormAlert,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'string' },
    },
  },
} satisfies Meta<typeof FormAlert>

export default meta
type Story = StoryObj<typeof meta>

export const WithComponent: Story = {
  args: {
    children: (
      <>
        <p>This is an example</p>
        <p>
          This is an example
          <Icon name="arrow-right" />
        </p>
      </>
    ),
  },
  render: (props: IFormAlert) => (
    <>
      <div className="login-form">
        <div className="inner-wrap">
          <div className="content-box">
            <FormAlert>{props.children}</FormAlert>
          </div>
        </div>
      </div>
    </>
  ),
}

export const Primary: Story = {
  args: {
    children: <p>This is an example</p>,
  },
  render: (props: IFormAlert) => (
    <>
      <div className="login-form">
        <div className="inner-wrap">
          <div className="content-box">
            <FormAlert>{props.children}</FormAlert>
          </div>
        </div>
      </div>
    </>
  ),
}
