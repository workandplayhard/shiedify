import { t } from '@/i18n'
import { Icon } from '@/components'

const Header = () => {
  return (
    <>
      <div className="restore-status">
        <Icon name="lock" />
      </div>
      <div className="title">
        <h1>{t('resetPassword')}</h1>
        <p>{t('enterNewPassword')}</p>
      </div>
    </>
  )
}

export default Header
