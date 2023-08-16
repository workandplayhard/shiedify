import React from 'react'
import classNames from 'classnames'

import EmailForm from './emailForm'

import bgImg from '@/assets/images/img_login-bg.png'

const ForgotPassword: React.FC = () => {
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
      <EmailForm />
    </div>
  )
}

export default ForgotPassword
