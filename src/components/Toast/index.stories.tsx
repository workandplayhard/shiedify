import type { Meta, StoryObj } from '@storybook/react'
import generateId from 'uniqid'

import { useToast } from '@/hooks'
import Button from '../Button'
import { Toast } from '.'
import { IToast, IToastProps, TToastType } from './types'

const meta = {
  title: 'Component/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    message: { control: { type: 'text' } },
    secondaryMessage: { control: { type: 'text' } },
    icon: { control: { type: 'text' } },
    type: {
      defaultValue: 'success',
      options: ['success', 'info', 'error'],
      control: { type: 'radio' },
    },
    autoHide: { options: [true, false], control: { type: 'radio' } },
    autoHideTime: { control: { type: 'number' } },
    hasCloseBtn: { options: [true, false], control: { type: 'radio' } },
  },
  args: {
    id: generateId(),
    message: 'Success',
    type: 'success',
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IToastProps) => {
    const { addToast } = useToast()

    const toastProps: Omit<IToast, 'id'> = {
      message: props.message,
      secondaryMessage: props.secondaryMessage,
      type: props.type as TToastType,
      icon: props.icon,
      option: {
        autoHide: props.autoHide,
        autoHideTime: props.autoHideTime,
        hasCloseBtn: props.hasCloseBtn,
      },
    }
    return (
      <Button
        className="main-btn blue"
        text="Show toast"
        onClick={() => {
          addToast(toastProps)
        }}
      />
    )
  },
}

export const Examples: Story = {
  render: () => {
    const { addToast, removeToast } = useToast()
    addToast({
      message: 'Your Name successfully changed.',
      type: 'success',
      option: {
        autoHide: false,
        hasCloseBtn: true,
      },
    })

    addToast({
      message: 'Image size too big',
      secondaryMessage:
        'Please upload an image that is less than 2MB and is a square for best results',
      type: 'error',
      icon: 'folder',
      option: {
        autoHide: false,
        hasCloseBtn: true,
      },
    })

    addToast({
      message: 'Successfully edited changes',
      secondaryMessage: <Button className="" text="Undo" />,
      type: 'success',
      option: {
        MsgWrapEl: 'span',
        autoHide: false,
        hasCloseBtn: true,
      },
    })

    const toastId = addToast({
      message: 'Success',
      secondaryMessage: (
        <p>
          <b>10 Alerts</b> have been marked <b>resolved</b>.
        </p>
      ),
      type: 'success',
      actionButtons: (
        <Button className="" text="Undo" onClick={() => removeToast(toastId)} />
      ),
      option: {
        autoHide: false,
        hasCloseBtn: false,
      },
    })

    addToast({
      message: 'New Alert for Hayman Construction Inc.',
      secondaryMessage: (
        <>
          <p>$935.55 · 44hrs Left</p>
          <p>
            <b>Remind me in 5min</b>{' '}
            <a href="javascript:void(0)">
              <b>View details</b>
            </a>
          </p>
        </>
      ),
      type: 'info',
      option: {
        autoHide: false,
        hasCloseBtn: true,
      },
    })

    addToast({
      secondaryMessage: (
        <p>
          New alert for <b>Total Network...</b> at <b>$935.55 9hrs</b> left
        </p>
      ),
      actionButtons: (
        <a href="javascript:void(0)">
          <span>View details</span>
        </a>
      ),
      type: 'error',
      option: {
        autoHide: false,
        hasCloseBtn: true,
      },
    })

    return <></>
  },
}
