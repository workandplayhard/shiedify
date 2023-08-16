import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { IAvatarUploadProps } from './types'
import { AvatarUpload } from '.'

const meta = {
  title: 'Component/AvatarUpload',
  component: AvatarUpload,
  tags: ['autodocs'],
  argTypes: {
    className: { control: { type: 'text' } },
    avatarUrl: { control: { type: 'text' } },
    loading: { options: [true, false], control: { type: 'radio' } },
  },
  args: {
    avatarUrl: 'https://picsum.photos/200',
  },
} satisfies Meta<typeof AvatarUpload>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IAvatarUploadProps) => {
    const [avatarUrl, setUrl] = useState<string | undefined>()
    return (
      <div className="profile-data">
        <div className="intro-box">
          <AvatarUpload
            {...props}
            onChange={(_file?: File) => {
              setUrl(URL.createObjectURL(_file || ({} as Blob)))
            }}
            avatarUrl={props.avatarUrl || avatarUrl}
          />
        </div>
      </div>
    )
  },
}
