export type ICarousel = {
  title?: string
  content: React.ReactNode
}

export type ICarouselProps = {
  className?: string
  slides: ICarousel[]
}

export interface ICarouselButtonsProps {
  title?: string
  hasPrev: boolean
  hasNext: boolean
  next?: any
  previous?: any
}
