import { InputHTMLAttributes } from 'react'
import { IOption } from '@/types'

export interface ISelectProps<T = string>
  extends Omit<InputHTMLAttributes<HTMLLIElement>, 'onChange' | 'value'> {
  value?: T
  options: IOption<T>[]
  placeholder?: string
  disabled?: boolean
  className?: string
  onChange?: (_item: IOption<T>) => void
  renderOption?: (_item: IOption<T>, _index?: number) => React.ReactNode
}
