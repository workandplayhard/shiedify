import type { Meta, StoryObj } from '@storybook/react'

import { ICarouselProps } from './types'
import { Carousel } from '.'

const meta = {
  title: 'Component/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    className: { control: { type: 'text' } },
    slides: { control: false },
  },
  args: {
    slides: [
      {
        title: 'Alert Distribution From Source#1',
        content: <img src="https://picsum.photos/200" />,
      },
      {
        title: 'Alert Distribution From Source#2',
        content: <img src="https://picsum.photos/200" />,
      },
      {
        title: 'Alert Distribution From Source#3',
        content: <img src="https://picsum.photos/200" />,
      },
      {
        title: 'Alert Distribution From Source#4',
        content: <img src="https://picsum.photos/200" />,
      },
    ],
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: ICarouselProps) => {
    return <Carousel {...props} />
  },
}
