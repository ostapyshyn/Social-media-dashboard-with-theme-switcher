import styles from './DayCard.module.scss'
interface Props {
  target: number | string
  image: string
  title: string
  percentage: string
  icon: string
}
const DayCard = ({ target, image, title, percentage, icon }: Props) => {
  return (
    <section className={styles.dayCard}>
      <div className={styles.about}>
        <h2 className={styles.title}>{title}</h2>
        <img src={image} alt="social media icon" />
      </div>

      <div className={styles.data}>
        <p className={styles.number}>{target}</p>
        <div className={styles.per_data}>
          <img src={icon} alt="icon" />
          <p
            className={styles.result}
            style={icon.includes('up') ? { color: '#1EB589' } : { color: '#DC414C' }}>
            {percentage}
          </p>
        </div>
      </div>
    </section>
  )
}

export default DayCard
