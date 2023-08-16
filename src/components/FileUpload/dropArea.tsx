import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  DragEvent,
  ChangeEvent,
  useMemo,
} from 'react'
import { Trans } from 'react-i18next'
import classNames from 'classnames'

import { Icon } from '@/components'
import { filterFiles, isHTMLNode } from '@/utils'
import { t } from '@/i18n'
import { fileTypeMap } from '@/constants'
import { IDropAreaProps } from './types'

const DropArea = React.forwardRef<HTMLInputElement, IDropAreaProps>(
  ({ allowedTypes, onFilesLoaded }, ref) => {
    const dropAreaRef = useRef<HTMLDivElement>(null)
    const [isDragOver, setIsDragOver] = useState(false)

    const [extensions, types] = useMemo(() => {
      const _extensions: string[] = []
      const _types: string[] = allowedTypes
      allowedTypes.forEach(t => {
        if (t in fileTypeMap) {
          _extensions.push(fileTypeMap[t])
        }
      })
      return [_extensions, _types]
    }, [allowedTypes])

    const onDragEnterHandler = useCallback(
      (e: MouseEvent | DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        const rect = dropAreaRef.current?.getBoundingClientRect()
        if ('dataTransfer' in e) {
          const { invalidFiles } = filterFiles(e.dataTransfer.files)
          if (invalidFiles.length) {
            return
          }
        }

        if (
          !isHTMLNode(dropAreaRef.current) ||
          (rect &&
            e.clientX > rect.left &&
            e.clientX < rect.right &&
            e.clientY > rect.top &&
            e.clientY < rect.bottom)
        ) {
          setIsDragOver(true)
        }
      },
      [],
    )

    const onDragMoveHandler = useCallback(
      (e: Event | DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
      },
      [],
    )

    const onDragLeaveHandler = useCallback(
      (e: MouseEvent | DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()

        const rect = dropAreaRef.current?.getBoundingClientRect()

        if (
          !isHTMLNode(dropAreaRef.current) ||
          (rect &&
            (e.clientY < rect.top ||
              e.clientY >= rect.bottom ||
              e.clientX < rect.left ||
              e.clientX >= rect.right))
        ) {
          setIsDragOver(false)
        }
      },
      [],
    )

    const onDropHandler = useCallback(
      (e: Event | DragEvent<HTMLDivElement>) => {
        setIsDragOver(false)
        e.preventDefault()
        e.stopPropagation()
        if ('dataTransfer' in e) {
          onFilesLoaded(e.dataTransfer.files)
        }
      },
      [onFilesLoaded],
    )

    const onChangeHandler = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onFilesLoaded(e.target.files)
        e.target.value = ''
      },
      [onFilesLoaded],
    )

    useEffect(() => {
      const { current } = dropAreaRef
      if (current && isHTMLNode(current)) {
        current.addEventListener('drop', onDropHandler)
        current.addEventListener('dragenter', onDragEnterHandler)
        current.addEventListener('dragleave', onDragLeaveHandler)
        current.addEventListener('dragover', onDragMoveHandler)
      }

      return () => {
        if (current && isHTMLNode(current)) {
          current.removeEventListener('drop', onDropHandler)
          current.removeEventListener('dragenter', onDragEnterHandler)
          current.removeEventListener('dragleave', onDragLeaveHandler)
          current.removeEventListener('dragover', onDragMoveHandler)
        }
      }
    }, [
      onDropHandler,
      onDragEnterHandler,
      onDragLeaveHandler,
      onDragMoveHandler,
    ])

    return (
      <div
        className={classNames('upload-box', { 'dragging-over': isDragOver })}
        ref={dropAreaRef}
      >
        <label>
          <input
            ref={ref}
            type="file"
            multiple
            accept={types.join(',')}
            onChange={onChangeHandler}
          />
        </label>
        <Icon name="upload-cloud" />
        <h4>
          <Trans
            i18nKey="clickToUpload"
            components={{
              tag: <b />,
            }}
          />
        </h4>
        <p>{t('fileTypes', { value: extensions.join(', ') })}</p>
      </div>
    )
  },
)

export default DropArea
