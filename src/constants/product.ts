import brandIcon_1 from '../assets/images/icons/brandIcons/brandIcon-1.svg'
import brandIcon_2 from '../assets/images/icons/brandIcons/brandIcon-2.svg'
import brandIcon_3 from '../assets/images/icons/brandIcons/brandIcon-3.svg'
import productImage from '../assets/images/productImages/jeans.png'

import { ProductSize, ProductType } from '../types'

export const productSizes = [ProductSize.XS, ProductSize.S, ProductSize.M]

export const productItem: ProductType = {
  title: 'Пиджак CLASP',
  price: '27 000',
  currency: 'руб',
  size: ProductSize.S,
  description_1:
    'Безупречный пиджак с мужского плеча, на шелковой подкладке с ассиметричным поясом, подчеркивающим талию Прекрасно комбинируется с остальными изделиями из коллекции.',
  description_2:
    'Сочетайте с кожаным топом и брюками для рабочего дня в офисе, или же предайте образу дерзости, оставив его в расстегнутом виде',
  brandIcons: [brandIcon_1, brandIcon_2, brandIcon_3],
  productImages: [
    productImage,
    productImage,
    productImage,
    productImage,
    productImage,
    productImage
  ]
}
