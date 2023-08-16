import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from '.'
import { ISwitchProps } from './types'

const meta = {
  title: 'Component/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    active: { options: [true, false], control: { type: 'radio' } },
    className: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: ISwitchProps) => {
    return <Switch {...props} />
  },
}
