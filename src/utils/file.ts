import { fileSizeUnits } from '@/constants'
import { FileSizeUnits } from '@/types'

export const filterFiles = (
  _files: FileList | null,
  _allowedTypes?: string[],
): {
  invalidFiles: File[]
  validFiles: File[]
} => {
  if (!_files?.length) {
    return { invalidFiles: [], validFiles: [] }
  }
  const invalidFiles: File[] = []
  const validFiles: File[] = []

  for (let i = 0; i < _files.length; i++) {
    if (
      !_allowedTypes ||
      _allowedTypes.includes('*.*') ||
      _allowedTypes.includes(_files[i].type)
    ) {
      validFiles.push(_files[i])
    } else {
      invalidFiles.push(_files[i])
    }
  }

  return { invalidFiles, validFiles }
}

export const fileSizeConverter = (
  bytes: number,
  decimals = 0,
  unit: FileSizeUnits = fileSizeUnits.null,
) => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i =
    unit === fileSizeUnits.null
      ? Math.floor(Math.log(bytes) / Math.log(k))
      : sizes.indexOf(unit)

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`
}
