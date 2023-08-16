import type { Meta, StoryObj } from '@storybook/react'

import { IButtonProps } from './types'
import { Button } from '.'

const meta = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    iconLeft: { control: { type: 'text' } },
    iconRight: { control: { type: 'text' } },
    className: { control: { type: 'text' } },
    loading: { options: [true, false], control: { type: 'select' } },
    disabled: { options: [true, false], control: { type: 'select' } },
    text: { description: 'Text inside button', control: { type: 'text' } },
  },
  args: {
    text: 'Sample button',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IButtonProps) => {
    return (
      <div className="btn-box">
        <Button {...props} className={props.className || 'main-btn outline'} />
      </div>
    )
  },
}
