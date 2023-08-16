import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '.'
import { IIconProps } from './types'

const meta = {
  title: 'Component/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: { type: 'text' } },
  },
  args: {
    name: 'folder',
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IIconProps) => {
    return <Icon {...props} />
  },
}
