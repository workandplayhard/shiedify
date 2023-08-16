import React, { useState } from 'react'
import DefaultCarousel from 'react-multi-carousel'
import classNames from 'classnames'

import 'react-multi-carousel/lib/styles.css'

import { type ICarouselProps } from './types'
import CarouselButtons from './carouselButtons'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export const Carousel: React.FC<ICarouselProps> = ({ className, slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  return (
    <div className={classNames(className, 'carousel-container')}>
      <DefaultCarousel
        responsive={responsive}
        itemClass="chart-item"
        arrows={false}
        infinite={false}
        customButtonGroup={
          <CarouselButtons
            title={slides[currentSlide].title}
            hasPrev={currentSlide > 0}
            hasNext={currentSlide < slides.length - 1}
          />
        }
        afterChange={(_prev, _ref) => setCurrentSlide(_ref.currentSlide)}
      >
        {slides?.map(slide => (
          <div className="carousel-item">{slide.content}</div>
        ))}
      </DefaultCarousel>
    </div>
  )
}
