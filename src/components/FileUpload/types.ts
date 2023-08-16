import { FileAllowedTypes } from '@/types'

export type TLoadingStatus = 'loading' | 'loaded' | null | undefined

export interface IFileUploadProps {
  allowedTypes: FileAllowedTypes[]
  loadingStatus?: Record<string, TLoadingStatus>
  children?: React.ReactNode
  onLoad: (_files: Record<string, File>) => void
  onRemove?: (_uuid: string) => void
}

export interface IDropAreaProps {
  allowedTypes: FileAllowedTypes[]
  onFilesLoaded: (_files: FileList | null) => void
}

export interface IFileItemProps {
  uuid: string
  file: File
  status?: TLoadingStatus
  onRemove: (_uuid: string) => void
}
