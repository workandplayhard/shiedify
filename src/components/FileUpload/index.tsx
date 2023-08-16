import React, { useCallback, useState } from 'react'
import generateId from 'uniqid'

import { filterFiles } from '@/utils'
import { t } from '@/i18n'
import DropArea from './dropArea'
import FileItem from './fileItem'
import { IFileUploadProps } from './types'

export const FileUpload = React.forwardRef<HTMLInputElement, IFileUploadProps>(
  ({ allowedTypes, loadingStatus, children, onLoad, onRemove }, ref) => {
    const [files, setFiles] = useState<Record<string, File>>({})
    const [error, setError] = useState<string>('')

    const onFilesLoaded = useCallback(
      (_files: FileList | null) => {
        const { invalidFiles, validFiles } = filterFiles(_files, allowedTypes)

        setError('')
        if (invalidFiles.length) {
          setError(t('unsupportedFiles', { count: invalidFiles.length }))
        }
        const newFiles: Record<string, File> = {}
        validFiles.forEach(_f => {
          newFiles[generateId()] = _f
        })
        setFiles(prev => ({ ...prev, ...newFiles }))
        onLoad(newFiles)
      },
      [allowedTypes, onLoad],
    )

    const onRemoveFile = useCallback(
      (id: string) => {
        const f = { ...files }
        delete f[id]
        setFiles(f)
        onRemove?.(id)
      },
      [files, onRemove],
    )

    return (
      <div className="upload-files">
        <DropArea
          ref={ref}
          allowedTypes={allowedTypes}
          onFilesLoaded={onFilesLoaded}
        />
        {Object.entries(files).map(([id, f]) => (
          <FileItem
            key={id}
            uuid={id}
            status={loadingStatus?.[id]}
            file={f}
            onRemove={onRemoveFile}
          />
        ))}
        {!!error && (
          <div className="file-error">
            <p>{error}</p>
          </div>
        )}
        {children}
      </div>
    )
  },
)
