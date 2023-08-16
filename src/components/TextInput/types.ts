import { InputHTMLAttributes } from 'react'

export interface ITextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  label?: string
  icon?: string
  error?: string
  onChange?: (_val: string) => void
}
