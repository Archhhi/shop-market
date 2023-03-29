import { FC } from 'react'
import styles from './styles.module.css'

import Navigation from '../Navigation'
import BrandItemList from '../BrandItemList'
import Slider from '../Slider'
import ProductMainInfo from '../ProductMainInfo'
import ProductDescription from '../ProductDescription'

import { productItem } from '../../constants/product'
import { useWindowSize } from '../../hooks/useWindowSize'

const Product: FC = (): JSX.Element => {
  const [width] = useWindowSize()

  const {
    title,
    price,
    size,
    currency,
    description_1,
    description_2,
    brandIcons,
    productImages
  } = productItem

  return (
    <div className={styles.wrapper}>
      {width >= 1440 && (
        <>
          <div className={styles.leftBlock}>
            <Navigation />
            <BrandItemList brandIcons={brandIcons} />
          </div>

          <div className={styles.mainContent}>
            <Slider productImages={productImages} windowSize={width} />
            <div className={styles.productInfoWrapper}>
              <ProductMainInfo
                title={title}
                price={price}
                size={size}
                currency={currency}
                windowSize={width}
              />
              <ProductDescription
                description_1={description_1}
                description_2={description_2}
              />
            </div>
          </div>
        </>
      )}
      {width < 1440 && width >= 768 && (
        <>
          <div className={styles.leftBlock}>
            <Navigation />
            <Slider productImages={productImages} windowSize={width} />
          </div>

          <div className={styles.productInfoWrapper}>
            <ProductMainInfo
              title={title}
              price={price}
              size={size}
              currency={currency}
              windowSize={width}
            />
            <ProductDescription
              description_1={description_1}
              description_2={description_2}
            />
            <BrandItemList brandIcons={brandIcons} />
          </div>
        </>
      )}

      {width < 768 && (
        <>
          <div className={styles.productInfoWrapper}>
            <ProductMainInfo
              title={title}
              price={price}
              size={size}
              currency={currency}
              windowSize={width}
            />
            <Slider productImages={productImages} windowSize={width} />
            <ProductDescription
              description_1={description_1}
              description_2={description_2}
            />
            <BrandItemList brandIcons={brandIcons} />
          </div>
        </>
      )}
    </div>
  )
}

export default Product
