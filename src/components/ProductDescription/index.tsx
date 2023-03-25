import { FC, memo } from 'react'
import styles from './styles.module.css'

type ProductDescriptionProps = {
  description_1: string
  description_2: string
}

const ProductDescription: FC<ProductDescriptionProps> = memo(
  ({ description_1, description_2 }): JSX.Element => {
    return (
      <div className={styles.wrapper}>
        <p className={styles.description}>{description_1}</p>
        <p className={styles.description}>{description_2}</p>
      </div>
    )
  }
)

export default ProductDescription
