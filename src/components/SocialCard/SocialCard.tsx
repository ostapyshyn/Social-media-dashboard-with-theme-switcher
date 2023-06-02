import classNames from 'classnames'
import styles from './SocialCard.module.scss'
interface Props {
  target: number | string
  followText: string
  userName: string
  image: string
  color: string
  icon: string
  media: string
  followToday: string
}
const SocialCard = ({ target, followText, userName, image, icon, media, followToday }: Props) => {
  const classes = classNames({
    [styles.card]: true,
    [styles.facebook]: media === 'facebook',
    [styles.twitter]: media === 'twitter',
    [styles.instagram]: media === 'instagram',
    [styles.youtube]: media === 'youtube',
  })

  return (
    <section className={classes}>
      <div className={styles.userData}>
        <img src={image} alt="social media icon" />
        <p className={styles.user}>{userName}</p>
      </div>

      <h2 className={styles.followers}>{target}</h2>
      <p className={styles.description}>{followText}</p>
      <div className={styles.data_follow}>
        <img src={icon} alt="icon" />
        <p
          className={styles.result}
          style={icon.includes('up') ? { color: '#1EB589' } : { color: '#DC414C' }}>
          {followToday}
        </p>
      </div>
    </section>
  )
}

export default SocialCard
