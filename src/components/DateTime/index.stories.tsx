import type { Meta, StoryObj } from '@storybook/react'

import { IDateTimeProps } from './types'
import { DateTime } from '.'

const meta = {
  title: 'Component/DateTime',
  component: DateTime,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'text' } },
    format: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    className: { control: { type: 'text' } },
    Wrapper: { control: { type: 'element' } },
  },
  args: {
    value: new Date(),
    format: 'YYYY-MM-DD HH:mm:ss',
  },
} satisfies Meta<typeof DateTime>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IDateTimeProps) => {
    return <DateTime {...props} />
  },
}
