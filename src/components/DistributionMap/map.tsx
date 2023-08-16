import DottedMap from 'dotted-map'

import { IDistributionMapProps } from './types'

const Map = ({ data, maxPoints = 5 }: IDistributionMapProps) => {
  const map = new DottedMap({ height: 60, grid: 'vertical' })
  const svgOptions = { color: '#9E77ED', radius: 0.5 }

  data?.map((item, index) => {
    if (maxPoints > 0 && index >= maxPoints) return
    map.addPin({ ...item, svgOptions })
  })

  const svgMap = map.getSVG({
    radius: 0.35,
    color: '#D1D5DA',
    shape: 'circle',
    backgroundColor: 'white',
  })

  return (
    <div className="dotted-map">
      <img
        src={`data:image/svg+xml;utf8, ${encodeURIComponent(svgMap)}`}
        alt=""
      />
    </div>
  )
}

export default Map
