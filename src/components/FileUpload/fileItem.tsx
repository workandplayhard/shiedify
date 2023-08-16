import React from 'react'
import { Trans } from 'react-i18next'

import { Button, Icon } from '@/components'
import { fileSizeConverter } from '@/utils'
import { IFileItemProps } from './types'
import classNames from 'classnames'

const FileItem: React.FC<IFileItemProps> = ({
  uuid,
  file,
  status,
  onRemove,
}) => {
  return (
    <div
      className={classNames('file-item', {
        loading: status === 'loading',
      })}
    >
      <div className="icon">
        <Icon name="empty-file" />
      </div>
      <div className="name">
        <p>
          <Trans
            i18nKey="fileNameSize"
            values={{
              name: file.name,
              size: fileSizeConverter(file.size, 2, 'KB'),
            }}
            components={{
              tag: <span />,
            }}
          />
        </p>
      </div>
      {status === 'loading' && (
        <div className="processing">
          <span>
            <svg width="32" height="32">
              <circle
                stroke="#7F56D9"
                stroke-width="4"
                fill="transparent"
                r="14"
                cx="16"
                cy="16"
                style={{
                  strokeDasharray: status === 'loading' ? '75, 88' : '88, 88',
                }}
              />
            </svg>
          </span>
        </div>
      )}
      {status === 'loaded' && (
        <Button
          iconLeft="close-circle"
          className="remove"
          onClick={() => onRemove(uuid)}
        />
      )}
    </div>
  )
}

export default FileItem
