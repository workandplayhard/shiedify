import { useState, useCallback } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { IFileUploadProps, TLoadingStatus } from './types'
import { FileUpload } from '.'

const meta = {
  title: 'Component/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    allowedTypes: { control: { type: 'array' } },
  },
  args: {
    allowedTypes: [
      'text/plain',
      'text/csv',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
    ],
  },
} satisfies Meta<typeof FileUpload>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: IFileUploadProps) => {
    const [loadingStatus, setLoadingStatus] = useState<
      Record<string, TLoadingStatus>
    >({})
    const onLoadFiles = useCallback((files: Record<string, File>) => {
      Object.keys(files).forEach(uuid => {
        setLoadingStatus(prev => ({ ...prev, [uuid]: 'loading' }))
        setTimeout(() => {
          setLoadingStatus(prev => ({ ...prev, [uuid]: 'loaded' }))
        }, 2000)
      })
    }, [])

    return (
      <FileUpload {...props} loadingStatus={loadingStatus} onLoad={onLoadFiles}>
        <div className="points-list">
          <ul>
            <li>
              The file should only have descriptors in it. Download the{' '}
              <a href="javascript:void(0)">sample file</a>.
            </li>
            <li>
              You can upload as many files you want. They just need to follow
              the format.
            </li>
          </ul>
        </div>
      </FileUpload>
    )
  },
}
