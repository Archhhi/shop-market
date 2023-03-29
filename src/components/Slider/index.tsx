import { FC, useMemo, useState } from 'react'
import styles from './styles.module.css'
import './slider.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import SwiperClass from 'swiper/types/swiper-class'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Thumbs } from 'swiper'

type SliderProps = {
  productImages: string[]
  windowSize: number
}

const Slider: FC<SliderProps> = ({
  productImages,
  windowSize: width
}): JSX.Element => {
  const [activeThumb, setActiveThumb] = useState<SwiperClass>()

  const productImageSlides = useMemo(
    () =>
      productImages.map((productImage, index) => (
        <SwiperSlide key={index}>
          <img src={productImage} alt="Jeans image" />
        </SwiperSlide>
      )),
    [productImages]
  )

  const productImageThumbSlides = useMemo(
    () =>
      productImages.map((productImage, index) => (
        <SwiperSlide key={index}>
          <div className={styles.productImagesSliderThumbsWrapper}></div>
          <img src={productImage} alt="Jeans image" />
        </SwiperSlide>
      )),
    [productImages]
  )

  return (
    <div className={styles.wrapper}>
      <Swiper
        loop
        pagination={
          width < 768 && {
            clickable: true
          }
        }
        modules={[Navigation, Pagination, Thumbs]}
        grabCursor
        thumbs={width >= 768 ? { swiper: activeThumb } : undefined}
        className={'product-images-slider'}
      >
        {productImageSlides}
      </Swiper>
      {width >= 768 && (
        <Swiper
          onSwiper={setActiveThumb}
          spaceBetween={15}
          slidesPerView={5}
          allowTouchMove={false}
          className={'product-images-slider-thumbs'}
        >
          {productImageThumbSlides}
        </Swiper>
      )}
    </div>
  )
}

export default Slider
