import styles from './ToggleSwitch.module.scss'

interface Props {
  value: boolean
  onChange: (id: boolean) => void
}
function ToggleSwitch({ onChange, value }: Props) {
  const onToggled = () => onChange(!value)

  return (
    <label className={styles.toggleSwitch}>
      <input type="checkbox" checked={value} onChange={onToggled} />
      <span className={styles.switch} />
    </label>
  )
}
export default ToggleSwitch
