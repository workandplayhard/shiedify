import { useCallback, useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import classNames from 'classnames'

import { Placement } from '@/types'
import { Checkbox, Button, Icon } from '@/components'
import { IPopoverProps } from './types'
import { Popover } from '.'

const placements: Placement[] = [
  'top',
  'top-start',
  'top-end',
  'top-center',
  'bottom',
  'bottom-start',
  'bottom-end',
  'bottom-center',
  'right',
  'right-start',
  'right-end',
  'right-center',
  'left',
  'left-start',
  'left-end',
  'left-center',
]

const meta = {
  title: 'Component/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    button: { control: { type: false } },
    className: {
      control: { type: 'text' },
    },
    distance: {
      control: { type: 'number' },
    },
    open: { options: [true, false], control: { type: 'radio' } },
    positioning: { options: ['absolute', 'fixed'], control: { type: 'radio' } },
    placement: {
      options: placements,
      control: { type: 'select' },
    },
    closeOnOutside: { options: [true, false], control: { type: 'radio' } },
    onClose: { control: false },
  },
  args: {
    className: 'drop-item',
    button: <div />,
    open: false,
    positioning: 'fixed',
    children: null,
    placement: 'bottom-start',
    closeOnOutside: true,
    distance: 12,
    onClose: () => undefined,
  },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IPopoverProps) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
      setOpen(!!props.open)
    }, [props.open])

    const toggleOpen = useCallback(() => {
      setOpen(prev => !prev)
    }, [])

    return (
      <div className="data-filters storybook">
        <ul>
          <li>
            <div className={classNames('filter-box', { open })}>
              <Popover
                {...props}
                open={open}
                onClose={() => setOpen(false)}
                button={
                  <div className="label" onClick={toggleOpen}>
                    <h4>
                      Status({props.placement}) <Icon name="chevron-down" />
                    </h4>
                  </div>
                }
              >
                <div className="item-bg">
                  <div className="options-list">
                    <div className="form-fields">
                      <Checkbox label="Pending" />
                      <Checkbox label="Resolved" />
                      <Checkbox label="Expired" />
                      <Checkbox label="Starred" />
                      <Checkbox label="Archived" />
                    </div>
                    <div className="action-btn">
                      <Button
                        className="main-btn"
                        text="Apply"
                        onClick={() => setOpen(false)}
                      />
                      <Button
                        className="main-btn light"
                        text="Clear all"
                        onClick={() => setOpen(false)}
                      />
                    </div>
                  </div>
                </div>
              </Popover>
            </div>
          </li>
        </ul>
      </div>
    )
  },
}
