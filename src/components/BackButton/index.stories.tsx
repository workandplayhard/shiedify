import type { Meta, StoryObj } from '@storybook/react'

import { BackButton } from '.'
import { IBackButtonProps } from './types'

const meta = {
  title: 'Component/BackButton',
  component: BackButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { options: [true, false], control: { type: 'radio' } },
  },
} satisfies Meta<typeof BackButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IBackButtonProps) => {
    return <BackButton {...props} />
  },
}
