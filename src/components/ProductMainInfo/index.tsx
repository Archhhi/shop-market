import { FC } from 'react'
import styles from './styles.module.css'

import Dropdown from '../Dropdown'

import { productSizes } from '../../constants/product'
import { ProductSize } from '../../types'
import { ReactComponent as ArrowBack } from '../../assets/images/icons/commonIcons/arrow-back.svg'
import { ReactComponent as FavoriteIcon } from '../../assets/images/icons/commonIcons/favorite.svg'

type ProductMainInfoProps = {
  title: string
  price: string
  currency: string
  size: ProductSize
  windowSize: number
}

const ProductMainInfo: FC<ProductMainInfoProps> = ({
  title,
  price,
  currency,
  size,
  windowSize: width
}): JSX.Element => {
  const sizeItems = productSizes.map((size, index) => (
    <li
      key={index}
      className={`${styles.size} ${index === 0 ? styles.missing : ''}`}
    >
      {size}
    </li>
  ))

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.titleTop}>
          <div className={styles.titlePriceWrapper}>
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.price}>{price + ' ' + currency}.</span>
          </div>
          <ArrowBack className={styles.arrowBack} />
        </div>
        {width <= 768 && (
          <div className={styles.sizeOptionsWrapper}>
            <ul className={styles.sizesWrapper}>{sizeItems}</ul>
            <div className={styles.sizeHelp}>
              <a className={styles.sizeHelpLink}>Как выбрать размер?</a>
            </div>
          </div>
        )}
      </div>

      <div className={styles.optionsWrapper}>
        <div className={styles.buttonsWrapper}>
          <Dropdown sizes={productSizes} size={size} />
          <button className={styles.button}>
            В корзину
            {width <= 970 && <FavoriteIcon className={styles.favoriteIcon} />}
          </button>
        </div>
        {width > 970 && <div className={styles.favorite}></div>}
      </div>

      {width > 768 && (
        <div className={styles.sizeOptionsWrapper}>
          <ul className={styles.sizesWrapper}>{sizeItems}</ul>
          <div className={styles.sizeHelp}>
            <a className={styles.sizeHelpLink}>Как выбрать размер?</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductMainInfo
