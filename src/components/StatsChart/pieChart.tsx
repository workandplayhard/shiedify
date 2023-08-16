import { Pie } from 'react-chartjs-2'

import { ArgumentType } from '@/types'
import { pieChartOpts } from './constants'
import { IChartProps } from './types'

const PieChart = <TData extends ArgumentType = number>({
  data,
  opts,
}: IChartProps<'pie', TData>) => {
  if (!data) return null
  return <Pie options={{ ...pieChartOpts, ...opts }} data={data} />
}

export default PieChart
