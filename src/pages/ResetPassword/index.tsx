import React from 'react'
import classNames from 'classnames'

import PasswordForm from './passwordForm'

import bgImg from '@/assets/images/img_login-bg.png'

const ResetPassword: React.FC = () => {
  return (
    <div
      className={classNames('login-page', {
        loading: false,
      })}
    >
      <div className="page-bg">
        <span className="bg-img">
          <img src={bgImg} alt="" />
        </span>
      </div>
      <PasswordForm />
    </div>
  )
}

export default ResetPassword
