import styles from './App.module.scss'
import DayCard from './components/DayCard'
import Header from './components/Header'
import SocialCard from './components/SocialCard'
import mainCards from './assets/mainCards'
import dayliCards from './assets/dayliCards'

function App() {
  return (
    <main className={styles.App}>
      <Header />
      <section className={styles.cards}>
        {mainCards.map((card) => (
          <SocialCard key={card.id} {...card} />
        ))}
      </section>

      <h2>Overview - Today</h2>

      <section className={styles.dayCards}>
        {dayliCards.map((card) => (
          <DayCard key={card.id} {...card} />
        ))}
      </section>
    </main>
  )
}

export default App
