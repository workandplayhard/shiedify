import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from '.'
import { IBadgeProps } from './types'

const meta = {
  title: 'Component/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['success', 'warning', 'error'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IBadgeProps) => (
    <Badge {...props}>
      <b>14h25m: </b>
      This is an example
    </Badge>
  ),
}
