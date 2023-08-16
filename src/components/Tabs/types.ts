import { ITab } from '@/types'

export interface ITabsProps {
  activeTab: string
  className?: string
  tabs: ITab<string>[]
  onChange: (_tabKey: string) => void
}
