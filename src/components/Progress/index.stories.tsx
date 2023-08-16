import type { Meta, StoryObj } from '@storybook/react'

import { Progress } from '.'
import { IProgressProps } from './types'

const meta = {
  title: 'Component/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    currentValue: { control: { type: 'number' } },
    totalValue: { control: { type: 'number' } },
  },
  args: {
    title: 'Progress',
    currentValue: 12,
    totalValue: 100,
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IProgressProps) => <Progress {...props} />,
}
