import { AnchorHTMLAttributes } from 'react'

export interface ITextLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string
  iconLeft?: string
  iconRight?: string
  disabled?: boolean
  link?: string
  onClick?: () => void
}
