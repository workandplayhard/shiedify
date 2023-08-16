import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import descriptorImg from '@/assets/images/img_descriptor.png'
import Button from '../Button'
import Icon from '../Icon'
import { IModalProps } from './types'
import { Modal } from '.'

const meta = {
  title: 'Component/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
    },
    open: { options: [true, false], control: { type: 'radio' } },
    closeOnBackdrop: { options: [true, false], control: { type: 'radio' } },
    onClose: { control: false },
  },
  args: {
    className: 'confirmation-modal w-797',
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: null,
  },
  render: (props: IModalProps) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
      <>
        <Button onClick={() => setOpen(true)} text="Open modal" />
        <Modal
          {...props}
          open={open}
          onClose={() => setOpen(false)}
          header={
            <div className="text-box with-border">
              <div className="icon-wrap">
                <Icon name="credit-card" />
                <h4>Find your descriptor in two simple steps</h4>
                <p>
                  It'll take less than 2 minutes for you to find your descriptor
                </p>
              </div>
            </div>
          }
          footer={
            <>
              <a href="contact-us.html" className="main-btn outline">
                I need assistance
              </a>
              <Button
                type="button"
                text="Close"
                onClick={() => setOpen(false)}
              />
            </>
          }
        >
          <div className="instructions-steps">
            <ul>
              <li>
                <h5>Step 1: Open your Credit Card Statement</h5>
                <p>
                  Open your email app and find your monthly credit card
                  statement.
                </p>
              </li>
              <li>
                <h5>Step 2: Find your descriptor. Refer image below</h5>
                <p>
                  <img src={descriptorImg} alt="" />
                </p>
              </li>
            </ul>
          </div>
        </Modal>
      </>
    )
  },
}
