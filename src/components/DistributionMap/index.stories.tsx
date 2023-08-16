import type { Meta, StoryObj } from '@storybook/react'

import { DistributionMap } from '.'
import { IDistributionMapProps, IPinType } from './types'

const meta = {
  title: 'Component/DistributionMap',
  component: DistributionMap,
  tags: ['autodocs'],
  argTypes: {
    data: { control: { type: 'array' } },
    maxPoints: { control: { type: 'number' } },
    className: { control: { type: 'text' } },
  },
} satisfies Meta<typeof DistributionMap>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IDistributionMapProps) => {
    const pins: IPinType[] = [
      { lat: 30, lng: 30 },
      { lat: 40.73021, lng: -73.3234 },
      { lat: -40.73021, lng: 13.3234 },
      { lat: -70.73021, lng: 93.3234 },
      { lat: -60.73021, lng: -73.3234 },
      { lat: -50.73021, lng: 73.3234 },
      { lat: -20.73021, lng: -73.3234 },
    ]

    return <DistributionMap {...props} data={pins} />
  },
}
