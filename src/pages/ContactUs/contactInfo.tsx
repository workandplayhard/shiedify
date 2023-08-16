import React from 'react'

import { Icon, TextLink } from '@/components'
import { t } from '@/i18n'

const ContactInfo: React.FC = () => (
  <div className="contact-list">
    <ul>
      <li>
        <Icon name="mail" />
        <h3>{t('email')}</h3>
        <p>{t('contactUsEmailDesc')}</p>
        <p>
          <TextLink
            href="mailto:contact@shieldify.com"
            text="contact@shieldify.com"
          />
        </p>
      </li>
      <li>
        <Icon name="marker-pin" />
        <h3>{t('office')}</h3>
        <p>{t('contactUsAddressDesc')}</p>
        <p>
          <TextLink>
            100 Smith Street
            <br /> Collingwood VIC 3066 AU
          </TextLink>
        </p>
      </li>
    </ul>
  </div>
)

export default ContactInfo
