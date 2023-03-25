import { FC } from 'react'
import styles from './app.module.css'
import './assets/styles/_global.css'
import Product from './components/Product'

const App: FC = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <Product />
    </div>
  )
}

export default App
