import { FC, memo, useMemo } from 'react'
import styles from './styles.module.css'

type BrandItemListProps = {
  brandIcons: string[]
}

const BrandItemList: FC<BrandItemListProps> = memo(
  ({ brandIcons }): JSX.Element => {
    const itemList = useMemo(
      () =>
        brandIcons.map((brandIcon, index) => (
          <img key={index} src={brandIcon} alt="Brand icon" />
        )),
      [brandIcons]
    )

    return <div className={styles.wrapper}>{itemList}</div>
  }
)

export default BrandItemList
