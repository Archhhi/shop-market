export enum ProductSize {
  XS = 'XS',
  S = 'S',
  M = 'M'
}

export type ProductType = {
  title: string
  price: string
  currency: string
  size: ProductSize.S
  description_1: string
  description_2: string
  brandIcons: string[]
  productImages: string[]
}
