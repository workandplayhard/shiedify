import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Button from '../Button'
import { IDrawerProps } from './types'
import { Drawer } from '.'

const activities = [
  {
    company: 'Y-Corp Systems USA',
    time: 'Just now',
    amount: '$96.4',
    timeLeft: '7h 12m',
  },
  {
    company: 'Xx-zobam Enterprises Inc.',
    time: '2 mins ago',
    amount: '$129.5',
    timeLeft: '7h 12m',
  },
  {
    company: 'Hatfan Construction Group',
    time: '2 mins ago',
    amount: '$225.5',
    timeLeft: '7h 12m',
  },
  {
    company: 'Xx-holding LLC',
    time: '3 hours ago',
    amount: '$96.4',
    timeLeft: '7h 12m',
  },
  {
    company: 'Dambase Steel Co.',
    time: '3 hours ago',
    amount: '$96.4',
    timeLeft: '7h 12m',
  },
  {
    company: 'Plusstrip Holdings Inc.',
    time: '6 hours ago',
    amount: '$96.4',
    timeLeft: '7h 12m',
  },
  {
    company: 'Domzoom Industries Inc.',
    time: '6 hours ago',
    amount: '$96.4',
    timeLeft: '7h 12m',
  },
  {
    company: 'Groovestreet Installation Co.',
    time: '11 hours ago',
    amount: '$96.4',
    timeLeft: '7h 12m',
  },
  {
    company: 'Dalttechnology Inc.',
    time: '12 hours ago',
    amount: '$196.4',
    timeLeft: '4h 12m',
  },
  {
    company: 'Bioholding Inc.',
    time: '4 hours ago',
    amount: '$46.4',
    timeLeft: '4h 12m',
  },
  {
    company: 'Goodsilron Inc.',
    time: '5:20pm 20 Jan 2022',
    amount: '$346.4',
    timeLeft: '2h 42m',
  },
]

const meta = {
  title: 'Component/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    className: { defaultValue: 'w-797', control: { type: 'text' } },
    open: { options: [true, false], control: { type: 'radio' } },
    closeOnBackdrop: { options: [true, false], control: { type: 'radio' } },
    onClose: { control: false },
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: null,
  },
  render: (props: IDrawerProps) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
      <>
        <Button onClick={() => setOpen(true)} text="Open Drawer" />
        <Drawer
          {...props}
          open={open}
          onClose={() => setOpen(false)}
          header={<h3>Updates</h3>}
        >
          <ul>
            {activities.map((a, idx) => (
              <li key={idx}>
                <h4>
                  {a.company} <span>{a.time}</span>
                </h4>
                <p>
                  New alert for <span>{a.amount}</span> - {a.timeLeft} left to
                  resolve
                </p>
              </li>
            ))}
          </ul>
        </Drawer>
      </>
    )
  },
}
