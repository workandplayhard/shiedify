import { type ModalProps } from 'rsuite/Modal'

export interface IModalProps extends ModalProps {
  className?: string | undefined
  placement?: 'top' | 'center'
  header?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
  closeOnBackdrop?: boolean
  onClose?: () => void
}
