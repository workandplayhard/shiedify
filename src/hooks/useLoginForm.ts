import { Dispatch, SetStateAction, useCallback, useState } from 'react'

import { t } from '@/i18n'
import { useAuth } from '@/hooks'

export const useLoginForm = ({ isAdmin }: { isAdmin: boolean }) => {
  const { signingIn, error: authError, onClearError, onSignIn } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [keepSignin, setKeepSignin] = useState<boolean>(true)
  const [error, setError] = useState<Record<'email' | 'password', string>>({
    email: '',
    password: '',
  })

  const onChange = useCallback(
    (field: string, stateFn: Dispatch<SetStateAction<any>>) => (value: any) => {
      if (typeof value !== 'boolean') {
        setError(e => (value ? { ...e, [field]: '' } : e))
        onClearError()
      }
      stateFn(value)
    },
    [onClearError],
  )

  const validate = useCallback(() => {
    const _error: Record<'email' | 'password', string> = {
      email: '',
      password: '',
    }

    if (!password) {
      _error.password = t('validation.fieldRequired', {
        fieldName: 'password',
      })
    }

    if (!email) {
      _error.email = t('validation.fieldRequired', {
        fieldName: 'email',
      })
    }

    if (email) {
      const emailTest = /\S+@\S+\.\S+/.test(email)

      if (!emailTest) _error.email = t('validation.invalidEmail')
    }

    if (password && password.length < 6) {
      _error.password = t('validation.passwordLength')
    }

    setError(prev => ({ ...prev, ..._error }))
    return !Object.values(_error).some(e => !!e)
  }, [email, password])

  const onHandleSignIn = useCallback(() => {
    if (validate()) {
      onSignIn({
        email: email.trim().toLowerCase(),
        password,
        keepSignin,
        isAdmin,
      })
    }
  }, [email, isAdmin, keepSignin, onSignIn, password, validate])

  return {
    email,
    setEmail,
    password,
    setPassword,
    keepSignin,
    error,
    authError,
    signingIn,
    setKeepSignin,
    onChange,
    onHandleSignIn,
  }
}
