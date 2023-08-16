import { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  loading?: boolean
  iconLeft?: string
  iconRight?: string
  disabled?: boolean
}
