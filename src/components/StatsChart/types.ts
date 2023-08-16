import { ChartData, ChartOptions } from 'chart.js'
import { ArgumentType } from '@/types'

export type TStatsChart = 'line' | 'pie' | 'doughnut'

export interface IChartProps<TChart extends TStatsChart, TData> {
  data?: ChartData<TChart, TData[]>
  opts?: Partial<ChartOptions<TChart>>
}
export interface IStatsChartProps<T extends ArgumentType = number> {
  title?: string
  header?: React.ReactNode
  type: TStatsChart
  data: {
    line?: ChartData<'line', T[]>
    pie?: ChartData<'pie', T[]>
    doughnut?: ChartData<'doughnut', T[]>
  }
  className?: string
  clue?: string
  opts?: {
    line?: Partial<ChartOptions<'line'>>
    pie?: Partial<ChartOptions<'pie'>>
    doughnut?: Partial<ChartOptions<'doughnut'>>
  }
}
