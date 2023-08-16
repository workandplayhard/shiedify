import React from 'react'

import { TextLink } from '@/components'
import { t } from '@/i18n'
import { signInPath } from '@/utils'

import ContactInfo from './contactInfo'
import ContactForm from './contactForm'

const ContactUs: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="prev-page">
        <TextLink iconLeft="arrow-left" text={t('back')} link={signInPath} />
      </div>
      <div className="title-box">
        <h1>{t('chatToTeam')}</h1>
        <p>{t('contactUsDesc')}</p>
      </div>
      <div className="content-box">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactUs
