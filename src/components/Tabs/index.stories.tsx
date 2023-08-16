import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { ITabsProps } from './types'
import { Tabs } from '.'

const meta = {
  title: 'Component/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: { type: false } },
    onChange: { control: { type: false } },
    className: { control: { type: 'text' } },
    activeTab: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const WithData: Story = {
  render: (props: ITabsProps) => {
    const [tab, setTab] = useState('test0')
    return (
      <Tabs
        {...props}
        onChange={setTab}
        tabs={[
          ...new Array(5)
            .fill(1)
            .map((_, idx) => ({ key: `test${idx}`, label: `Test ${idx}` })),
        ]}
        activeTab={props.activeTab || tab}
      />
    )
  },
}
