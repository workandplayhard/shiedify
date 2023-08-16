import classNames from 'classnames'

import Map from './map'

import { IDistributionMapProps } from './types'

export const DistributionMap = ({
  data,
  maxPoints,
  className,
}: IDistributionMapProps) => {
  return (
    <div className={classNames(className, 'map-item')}>
      <Map data={data} maxPoints={maxPoints} />
    </div>
  )
}

export default DistributionMap
