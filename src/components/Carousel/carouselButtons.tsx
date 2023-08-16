import React from 'react'
import classNames from 'classnames'

import Button from '../Button'
import { type ICarouselButtonsProps } from './types'

const CarouselButtons: React.FC<ICarouselButtonsProps> = ({
  title,
  hasPrev,
  hasNext,
  next,
  previous,
}) => {
  return (
    <div className="carousel-control">
      {!!title && <div className="carousel-title">{title}</div>}
      <div onClick={hasPrev ? previous : null} className="carousel-prev">
        <Button
          className={classNames({ disabled: !hasPrev })}
          iconLeft="chevron-left"
        />
      </div>

      <div onClick={hasNext ? next : null} className="carousel-next">
        <Button
          className={classNames({ disabled: !hasNext })}
          iconLeft="chevron-right"
        />
      </div>
    </div>
  )
}

export default CarouselButtons
