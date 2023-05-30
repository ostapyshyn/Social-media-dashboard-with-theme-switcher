import { useState } from 'react'
import ToggleSwitch from '../ToggleSwitch'
import styles from './Header.module.scss'

const Header = () => {
  const [isToggled, setIsToggled] = useState(true)
  return (
    <section className={styles.header}>
      <div>
        <h1 className={styles.title}>Social Media Dashboard</h1>
        <p className={styles.subtitle}>Total Followers: 23,004</p>
      </div>
      <div className={styles.switcher}>
        <p className={styles.darkMode}>Dark Mode</p>
        <ToggleSwitch onChange={setIsToggled} value={isToggled} />
      </div>
    </section>
  )
}

export default Header
