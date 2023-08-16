import { type DrawerProps } from 'rsuite/Drawer'

export interface IDrawerProps extends DrawerProps {
  /**
   * Don't pass predefined className like `activity-updates, updates-box`.
   */
  className?: string | undefined
  header?: React.ReactNode
  children: React.ReactNode
  closeOnBackdrop?: boolean
  onClose?: () => void
}
