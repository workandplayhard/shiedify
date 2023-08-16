export type TToastType = 'success' | 'error' | 'info'

export interface IToastOption {
  autoHide?: boolean
  autoHideTime?: number
  hasCloseBtn?: boolean
  MsgWrapEl?: React.ElementType
}

export interface IToast {
  id: string
  message?: string
  secondaryMessage?: string | React.ReactNode
  actionButtons?: React.ReactNode
  type: TToastType
  icon?: string
  option: IToastOption
}

export interface IToastProps {
  id: string
  message?: string
  secondaryMessage?: string | React.ReactNode
  actionButtons?: React.ReactNode
  type: TToastType
  icon?: string
  autoHide?: boolean
  autoHideTime?: number
  hasCloseBtn?: boolean
  MsgWrapEl?: React.ElementType
}
