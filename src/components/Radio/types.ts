export interface IRadioProps {
  selected?: boolean
  children?: React.ReactNode
  label?: React.ReactNode
  onSelect?: () => void
  disabled?: boolean
  className?: string
}
