import type { Meta, StoryObj } from '@storybook/react'

import { Currency } from '.'
import { ICurrencyProps } from './types'

const meta = {
  title: 'Component/Currency',
  component: Currency,
  tags: ['autodocs'],
  argTypes: {
    value: { defaultValue: 0, control: { type: 'number' } },
    className: { control: { type: 'text' } },
    currency: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Currency>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: ICurrencyProps) => {
    return <Currency {...props} />
  },
}
