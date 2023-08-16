import { InputHTMLAttributes } from 'react'

export interface ITextAreaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: string
  error?: string
  onChange?: (_val: string) => void
}
