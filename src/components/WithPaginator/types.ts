import { IPaginatorProps } from '../Paginator/types'

export interface IWithPaginatorProps<T>
  extends Omit<IPaginatorProps, 'pageSize' | 'currentPage'> {
  /** Define data to show with paginator. */
  data: T[]

  /** (Optional) Define whether data is loading or not. Default: `false` */
  loading?: boolean

  /** (Optional) Define initial page. Default `1` */
  initialPage?: number

  /** (Optional) Define maximum pages to show. Default: `10` */
  initialPageSize?: number

  /** (Optional) Callback function invoked with the updated meta like page number or page size. */
  onPageMetaChange?: (_page: number, _size: number) => void

  /** Element which renders paged data. e.g. table  */
  children: (_pageData: T[]) => React.ReactNode
}
