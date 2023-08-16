import React from 'react'
import classNames from 'classnames'

import { IPageButtonsProps } from './types'

const PageButtons: React.FC<IPageButtonsProps> = ({
  range,
  currentPage,
  disabled,
  onPageChange,
}) => {
  return (
    <>
      {range.map((page: string | number, idx: number) => {
        const previousPage = range?.[idx - 1] || 0
        return (
          <>
            {+page - +previousPage > 1 && <li>...</li>}
            <li
              key={idx}
              className={classNames('', {
                disabled,
                active: currentPage === page,
              })}
              onClick={() => onPageChange && onPageChange(+page)}
            >
              <a href="javascript:void(0)">{page}</a>
            </li>
          </>
        )
      })}
    </>
  )
}

export default PageButtons
