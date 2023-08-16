import React, { useEffect } from 'react'
import { useState, useCallback } from 'react'
import classNames from 'classnames'

import { IAvatarUploadProps } from './types'

export const AvatarUpload: React.FC<IAvatarUploadProps> = ({
  onChange,
  avatarUrl,
  loading,
  className,
}) => {
  const [avatar, setAvatar] = useState<string | undefined>()

  useEffect(() => setAvatar(avatarUrl), [avatarUrl])

  const onPickFile = useCallback(
    (file: File | undefined) => {
      if (!file) return
      setAvatar(URL.createObjectURL(file || ({} as Blob)))
      onChange(file)
    },
    [onChange],
  )

  return (
    <div
      className={classNames('avatar-img', {
        [className || '']: !!className,
        loading,
      })}
    >
      <label>
        <input
          type="file"
          accept="image/*"
          onChange={e => onPickFile(e.target?.files?.[0])}
        />
        {!!avatar && <img src={avatar} />}
      </label>
    </div>
  )
}
