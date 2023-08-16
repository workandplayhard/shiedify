import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { t } from '@/i18n'
import { useContactUsMutation } from '@/apollo/graphql'
import { submittedMessagePath } from '@/utils'

export const useContactUs = () => {
  const navigate = useNavigate()
  const [contactUs, { loading }] = useContactUsMutation()
  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [check, setCheck] = useState<boolean>(false)
  const [error, setError] = useState<
    Record<'email' | 'firstName' | 'lastName' | 'message' | 'check', string>
  >({
    email: '',
    firstName: '',
    lastName: '',
    message: '',
    check: '',
  })

  const onChange = useCallback(
    (field: string, stateFn: Dispatch<SetStateAction<any>>) => (value: any) => {
      if (typeof value !== 'boolean') {
        setError(prev => ({ ...prev, [field]: '' }))
      }
      stateFn(value)
    },
    [],
  )

  const validate = useCallback(() => {
    const _error: Record<
      'email' | 'firstName' | 'lastName' | 'message' | 'check',
      string
    > = {
      email: '',
      firstName: '',
      lastName: '',
      message: '',
      check: '',
    }

    if (!email) {
      _error.email = t('validation.fieldRequired', {
        fieldName: 'Email',
      })
    }

    if (!firstName) {
      _error.firstName = t('validation.fieldRequired', {
        fieldName: 'First name',
      })
    }

    if (!lastName) {
      _error.lastName = t('validation.fieldRequired', {
        fieldName: 'Last name',
      })
    }

    if (!message) {
      _error.message = t('validation.fieldRequired', {
        fieldName: 'Message',
      })
    }

    if (email) {
      const emailTest = /\S+@\S+\.\S+/.test(email)

      if (!emailTest) _error.email = t('validation.invalidEmail')
    }

    setError(prev => ({ ...prev, ..._error }))
    return !Object.values(_error).some(e => !!e)
  }, [email, firstName, lastName, message])

  const onSendMessage = useCallback(() => {
    if (validate()) {
      contactUs({
        variables: { email, firstName, lastName, message },
        onCompleted: res => {
          if (res.contactUs?.success) {
            navigate(submittedMessagePath, {
              replace: true,
            })
          }
        },
        onError: error => console.log(error),
      })
    }
  }, [contactUs, email, firstName, lastName, message, navigate, validate])

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    message,
    setMessage,
    loading,
    email,
    setEmail,
    check,
    setCheck,
    error,
    onChange,
    onSendMessage,
  }
}
