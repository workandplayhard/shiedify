export interface ICheckboxProps {
  checked?: boolean
  label?: string
  onChange?: (_val: boolean) => void
  disabled?: boolean
  className?: string
  children?: React.ReactNode
}
