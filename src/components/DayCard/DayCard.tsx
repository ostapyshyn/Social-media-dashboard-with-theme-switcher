import styles from './DayCard.module.scss'

const DayCard = () => {
  return (
    <section className={styles.dayCard}>
      <h2 className={styles.title}>Page Views</h2>
      <div className={styles.data}>
        <p className={styles.number}>87</p>
        <p className={styles.result}>3%</p>
      </div>
    </section>
  )
}

export default DayCard
