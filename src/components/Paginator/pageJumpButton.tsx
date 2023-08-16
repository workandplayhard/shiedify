import React from 'react'
import classNames from 'classnames'

import { IPageJumpButtonProps } from './types'

const PageJumpButton: React.FC<IPageJumpButtonProps> = ({
  disabled,
  toNext,
  defaultBtn,
  onClick,
}) => {
  if (defaultBtn) {
    return <>{defaultBtn(onClick)}</>
  }

  return (
    <li
      className={classNames('', {
        disabled,
      })}
      onClick={onClick}
    >
      <a href="javascript:void(0)">
        <span
          className={toNext ? 'ic-chevron-right' : 'ic-chevron-left'}
        ></span>
      </a>
    </li>
  )
}

export default PageJumpButton
