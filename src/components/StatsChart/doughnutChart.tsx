import { Doughnut } from 'react-chartjs-2'

import { ArgumentType } from '@/types'
import { doughnutChartOpts } from './constants'
import { IChartProps } from './types'

const DoughnutChart = <TData extends ArgumentType = number>({
  data,
  opts,
}: IChartProps<'doughnut', TData>) => {
  if (!data) return null
  return <Doughnut options={{ ...doughnutChartOpts, ...opts }} data={data} />
}

export default DoughnutChart
