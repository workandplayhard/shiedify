import { useEffect, useMemo, useState } from 'react'

import { Paginator } from '../Paginator'
import { IWithPaginatorProps } from './types'

export const WithPaginator = <T,>({
  data,
  loading,
  initialPageSize,
  initialPage,
  disabled,
  className,
  onPageMetaChange,
  children,
  ...rest
}: IWithPaginatorProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  useEffect(() => setPageSize(initialPageSize ?? 1), [initialPageSize])
  useEffect(() => setCurrentPage(initialPage ?? 1), [initialPage])

  const pageData: T[] = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * (pageSize || 10)
    const lastPageIndex = firstPageIndex + (pageSize || 10)

    return data.slice(firstPageIndex, lastPageIndex)
  }, [data, currentPage, pageSize])

  return (
    <div className={className}>
      {children(pageData)}
      <Paginator
        {...rest}
        disabled={loading || disabled}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={(_v: number) => {
          setCurrentPage(_v)
          onPageMetaChange?.(_v, pageSize)
        }}
        onPageSizeChange={(_v: number) => {
          setPageSize(_v)
          onPageMetaChange?.(currentPage, _v)
        }}
      />
    </div>
  )
}
