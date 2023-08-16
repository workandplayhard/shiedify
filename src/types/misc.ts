import { fileSizeUnits, fileTypeMap } from '@/constants'

export type TLang = 'en' | 'he'

export interface ISignInPayload {
  email: string
  password: string
  keepSignin: boolean
  isAdmin: boolean
}

export type ArgumentType = string | number | boolean | any

export interface ITab<T> {
  key: T
  label: React.ReactNode
}

export interface IOption<T = string> {
  label: string
  value: T
  icon?: string
}

export type FileSizeUnits = keyof typeof fileSizeUnits

export type FileAllowedTypes = keyof typeof fileTypeMap

export type BasePlacement = 'top' | 'right' | 'bottom' | 'left'

export type VariantPlacement = 'top-start' | 'top-end' | 'top-center' | 'bottom-start' | 'bottom-end' | 'bottom-center' | 'right-start' | 'right-end' | 'right-center' | 'left-start' | 'left-end' | 'left-center';

export type Placement = BasePlacement | VariantPlacement

export type Rect = Pick<DOMRect, 'left' | 'top' | 'bottom' | 'right' | 'height' | 'width'>
