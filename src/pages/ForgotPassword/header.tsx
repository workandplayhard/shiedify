import { t } from '@/i18n'
import { Icon } from '@/components'

const Header = () => {
  return (
    <>
      <div className="restore-status">
        <Icon name="lock" />
      </div>
      <div className="title">
        <h1>{t('forgotPassword')}</h1>
        <p>{t('enterYourEmailToChangeYourPassword')}</p>
      </div>
    </>
  )
}

export default Header
