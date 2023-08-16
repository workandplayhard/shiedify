import React, { useCallback, useMemo, useRef } from 'react'

import { t } from '@/i18n'
import { IPageSelectorProps } from './types'

const defaultPageSizes = [1, 10, 20, 30, 40, 50]

const PageSelector: React.FC<IPageSelectorProps> = ({
  defaultPageSize,
  maxPage,
  disabled,
  onSelectPageSize,
  onSelectPage,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onPageSizeChange = useCallback(
    (v: string) => {
      onSelectPageSize(+v)
      if (inputRef.current) {
        inputRef.current.value = '1'
      }
    },
    [onSelectPageSize],
  )

  const pageSizes = useMemo(
    () => [...new Set([...defaultPageSizes, defaultPageSize])].sort(),
    [defaultPageSize],
  )

  return (
    <li>
      <label>
        <span className="select-wrap">
          <select
            defaultValue={defaultPageSize}
            onChange={e => onPageSizeChange(e.target.value)}
            disabled={disabled}
          >
            {pageSizes.map((perPage, idx) => {
              return (
                <option key={idx} value={perPage}>
                  {t('itemsPerPage', { value: perPage })}
                </option>
              )
            })}
          </select>
        </span>
      </label>
      <p>{t('goto')}</p>
      <label>
        <input
          ref={inputRef}
          min={1}
          type="number"
          disabled={disabled}
          max={maxPage}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              // @ts-ignore
              onSelectPage?.(+(e.target?.value || 0))
            }
          }}
        />
      </label>
    </li>
  )
}

export default PageSelector
