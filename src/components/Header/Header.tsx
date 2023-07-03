import { useState } from 'react'
import ToggleSwitch from '../ToggleSwitch'
import styles from './Header.module.scss'
import { useTheme } from '../../hooks/use-theme'
import ThemeContext from '../../context/ThemeContext'

const Header: React.FC = () => {
  const { theme } = useTheme()
  const [isToggled, setIsToggled] = useState(theme === 'light' ? true : false)
  // const { modeChanger } = useContext(ThemeContext)

  return (
    <section className={styles.header}>
      <div>
        <h1 className={styles.title}>Social Media Dashboard</h1>
        <p className={styles.subtitle}>Total Followers: 23,004</p>
      </div>
      <hr className={styles.line} />
      <div className={styles.switcher}>
        <p className={styles.darkMode}>Dark Mode</p>
        <ToggleSwitch onChange={setIsToggled} value={isToggled} />
      </div>
    </section>
  )
}

export default Header
