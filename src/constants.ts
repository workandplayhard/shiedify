import { TLang } from '@/types'

export const LANG_KEY = '@lang'

export const DEFAULT_LANG = 'en'

export const APP_LANGUAGES: Record<'EN' | 'HE', TLang> = {
  EN: 'en',
  HE: 'he',
}

export const AUTH_TOKEN_KEY = '@a_token'

const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export const ENDPOINT = IS_DEV ? '161.35.99.117' : '161.35.99.117'

export const GRAPHQL_ENDPOINT = `${
  IS_DEV ? 'http' : 'http'
}://${ENDPOINT}/graphql`

export const WEBSOCKET_ENDPOINT = `${
  IS_DEV ? 'ws' : 'wss'
}://${ENDPOINT}/subscription/`

export const fileSizeUnits = {
  Bytes: 'Bytes',
  KB: 'KB',
  MB: 'MB',
  GB: 'GB',
  TB: 'TB',
  PB: 'PB',
  EB: 'EB',
  ZB: 'ZB',
  YB: 'YB',
  null: 'null',
} as const

export const fileTypeMap = {
  'text/plain': '.txt',
  'text/csv': '.csv',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xls',
  'application/vnd.ms-excel': '.xlsx',
  'image/png': '.png',
  'image/gif': '.gif',
  'image/jpeg': '.jpeg',
} as const
