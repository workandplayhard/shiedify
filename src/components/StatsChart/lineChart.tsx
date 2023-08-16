import { Line } from 'react-chartjs-2'

import { ArgumentType } from '@/types'
import { lineChartOpts } from './constants'
import { IChartProps } from './types'

const LineChart = <TData extends ArgumentType = number>({
  data,
  opts,
}: IChartProps<'line', TData>) => {
  if (!data) return null
  return <Line options={{ ...lineChartOpts, ...opts }} data={data} />
}

export default LineChart
