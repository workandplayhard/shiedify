import { t } from '@/i18n'
import { homePath } from '@/utils'

import logoImg from '@/assets/images/img_logo.svg'

const Header = () => {
  return (
    <>
      <div className="logo">
        <a href={homePath}>
          <img src={logoImg} alt="" />
        </a>
      </div>
      <div className="title">
        <h1>{t('loginTitle')}</h1>
        <p>{t('loginSubTitle')}</p>
      </div>
    </>
  )
}

export default Header
