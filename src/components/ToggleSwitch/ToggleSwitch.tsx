import styles from './ToggleSwitch.module.scss'
import { useTheme } from '../../hooks/use-theme'

interface Props {
  value: boolean
  onChange: (id: boolean) => void
}
function ToggleSwitch({ onChange, value }: Props) {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    onChange(!value)
    return theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <label className={styles.toggleSwitch}>
      <input type="checkbox" checked={value} onChange={changeTheme} />
      <span className={styles.switch} />
    </label>
  )
}
export default ToggleSwitch
