import styles from './SocialCard.module.scss'

const SocialCard = () => {
  return (
    <section className={styles.card}>
      <p className={styles.user}>@nathanf</p>
      <h2 className={styles.followers}>1987</h2>
      <p className={styles.description}>FOLLOWERS</p>
      <p className={styles.result}>12 Today</p>
    </section>
  )
}

export default SocialCard
