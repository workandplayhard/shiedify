export interface IDistributionMapProps {
  data?: IPinType[]
  maxPoints?: number
  className?: string
}

export interface IPinType {
  lat: number
  lng: number
}
