import type { Meta, StoryObj } from '@storybook/react'

import { FormError } from '.'
import { IFormError } from './types'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
/**
 *  Examples of `Control`. You can use one of these control types for other components
 *  - control: { type: 'text' }
 */
const meta = {
  title: 'Component/FormError',
  component: FormError,
  tags: ['autodocs'],
  argTypes: {
    error: { control: { type: 'text' } },
  },
  args: {
    error: 'Password does not match',
  },
} satisfies Meta<typeof FormError>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IFormError) => (
    <div className="form-fields">
      <label className="w-100">
        <FormError error={props.error} />
      </label>
    </div>
  ),
}
