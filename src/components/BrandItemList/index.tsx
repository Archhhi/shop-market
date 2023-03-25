import { FC } from 'react'
import styles from './styles.module.css'

type BrandItemListProps = {
  brandIcons: string[]
}

const BrandItemList: FC<BrandItemListProps> = ({ brandIcons }): JSX.Element => {
  const itemList = brandIcons.map((brandIcon, index) => (
    <img key={index} src={brandIcon} alt="Brand icon" />
  ))

  return <div className={styles.wrapper}>{itemList}</div>
}

export default BrandItemList
