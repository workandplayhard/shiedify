import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'
import { ICheckboxProps } from './types'

const meta = {
  title: 'Component/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    checked: { options: [true, false], control: { type: 'radio' } },
    disabled: { options: [true, false], control: { type: 'radio' } },
    className: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: ICheckboxProps) => {
    const [checked, setChecked] = useState<boolean>(false)

    return (
      <div className="form-fields">
        <Checkbox {...props} checked={checked} onChange={setChecked} />
      </div>
    )
  },
}
