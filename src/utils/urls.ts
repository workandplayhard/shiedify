export const notFoundPath = '/404'
export const homePath = '/home'
export const signInPath = '/sign-in'
export const contactUsPath = '/contact-us'
export const forgotPasswordPath = '/forgot-password'
export const resetPasswordPath = '/reset-password'
export const submittedMessagePath = '/submitted-message'
export const onBoardingPath = '/on-boarding'
export const alertsPath = '/alerts'

export const publicPath = [
  forgotPasswordPath,
  resetPasswordPath,
  submittedMessagePath,
]

export const isActiveLink = (locationPath: string, path: string): boolean => {
  const _path = locationPath.split('/')

  return _path.includes(path)
}

export const generatePath = (
  path: string,
  params: { [x: string]: string | number | undefined | null } = {},
): string => {
  let newPath: string = path
  Object.keys(params).forEach(param => {
    newPath = newPath.replace(`:${param}`, `${params[param] || ''}`)
  })

  return newPath
}
