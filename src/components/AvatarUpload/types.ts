export interface IAvatarUploadProps {
  className?: string
  avatarUrl?: string
  loading?: boolean
  onChange: (_file: File | undefined) => void
}
