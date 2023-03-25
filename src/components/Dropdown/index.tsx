import { FC, memo, useMemo, useState } from 'react'
import styles from './styles.module.css'

import { ProductSize } from '../../types'

import { ReactComponent as ArrowCaret } from '../../assets/images/icons/commonIcons/arrow.svg'

type DropdownProps = {
  sizes: ProductSize[]
  size: ProductSize
}

const Dropdown: FC<DropdownProps> = memo(({ sizes, size }): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [selectedSize, setSelectedSize] = useState<ProductSize>(size)

  const onSelectItem = (size: ProductSize) => {
    setSelectedSize(size)
    setIsActive(false)
  }

  const sizeItems = useMemo(
    () =>
      sizes.map((size, index) => (
        <li
          key={index}
          className={styles.dropdownItem}
          onMouseDown={() => onSelectItem(size)}
        >
          Размер: {size}
        </li>
      )),
    [sizes]
  )

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.dropdownBtn}
        tabIndex={0}
        onClick={() => setIsActive(!isActive)}
        onBlur={() => setIsActive(false)}
      >
        <span className={styles.size}>Размер: {selectedSize}</span>
        <ArrowCaret
          className={`${styles.caret} ${isActive ? styles.active : ''}`}
        />
      </div>
      {isActive && <ul className={styles.dropdownContent}>{sizeItems}</ul>}
    </div>
  )
})

export default Dropdown
