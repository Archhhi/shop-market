import { FC } from 'react'
import styles from './styles.module.css'

import { ReactComponent as HomeIcon } from '../../assets/images/icons/commonIcons/home.svg'
import { ReactComponent as ArrowIcon } from '../../assets/images/icons/commonIcons/arrow.svg'

const Navigation: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <HomeIcon />
      <ArrowIcon className={styles.arrowIcon} />
      <span className={styles.navItem}>БРЮКИ</span>
      <ArrowIcon className={styles.arrowIcon} />
    </div>
  )
}

export default Navigation
