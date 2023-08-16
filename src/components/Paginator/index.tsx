import React, { useCallback, useEffect, useState } from 'react'
import { useMemo } from 'react'
import classNames from 'classnames'

import { usePagination } from '@/hooks'

import PageJumpButton from './pageJumpButton'
import PageButtons from './pageButtons'
import PageSelector from './pageSelector'
import { IPaginatorProps } from './types'
import { t } from '@/i18n'

export const Paginator: React.FC<IPaginatorProps> = ({
  currentPage = 1,
  disabled = false,
  pageSize = 10,
  renderOnOnePageCount = false,
  siblingCount = 2,
  totalItems,
  className,
  hasBorder = false,
  nextPageButton,
  prevPageButton,
  onPageChange,
  onPageSizeChange,
}) => {
  const [perPage, setPerPage] = useState(1)

  useEffect(() => setPerPage(pageSize), [pageSize])

  const onSelectPageSize = useCallback(
    (count: number) => {
      onPageChange?.(1)
      setPerPage(count)
      onPageSizeChange(count)
    },
    [onPageChange, onPageSizeChange],
  )

  const paginationRange = usePagination({
    currentPage,
    totalItems,
    siblingCount,
    pageSize: perPage,
  })

  const totalPages = useMemo(
    () => Math.ceil(totalItems / (perPage || 1)),
    [perPage, totalItems],
  )

  const lastPage = useMemo(
    () =>
      paginationRange.length > 1
        ? paginationRange[paginationRange.length - 1]
        : totalPages,
    [paginationRange, totalPages],
  )
  const onNext = useCallback(() => {
    if (onPageChange) onPageChange(Math.min(currentPage + 1, totalPages))
  }, [currentPage, onPageChange, totalPages])

  const onPrevious = useCallback(() => {
    if (onPageChange) onPageChange(Math.max(currentPage - 1, 1))
  }, [currentPage, onPageChange])

  if (!paginationRange.length) return null
  if (paginationRange.length < 2 && !renderOnOnePageCount) return null

  return (
    <div
      className={classNames('pagination', {
        'no-border': !hasBorder,
        [className || '']: !!className,
      })}
    >
      <div className="wrap-box">
        <p>{t('totalItems', { value: totalItems })}</p>
        <ul>
          <PageJumpButton
            toNext={false}
            disabled={currentPage === 1 || disabled}
            defaultBtn={prevPageButton}
            onClick={onPrevious}
          />
          <PageButtons
            range={paginationRange}
            currentPage={currentPage}
            disabled={disabled}
            onPageChange={onPageChange}
          />
          <PageJumpButton
            toNext
            disabled={currentPage === lastPage || disabled}
            defaultBtn={nextPageButton}
            onClick={onNext}
          />
          <PageSelector
            defaultPageSize={perPage}
            disabled={disabled}
            maxPage={paginationRange[paginationRange.length - 1]}
            onSelectPageSize={onSelectPageSize}
            onSelectPage={onPageChange}
          />
        </ul>
      </div>
    </div>
  )
}
