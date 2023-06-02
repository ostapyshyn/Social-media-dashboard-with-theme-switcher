import styles from './App.module.scss'
import DayCard from './components/DayCard'
import Header from './components/Header'
import SocialCard from './components/SocialCard'
import mainCards from './assets/mainCards'
import dayliCards from './assets/dayliCards'
import ThemeContext from './context/ThemeContext'
import { useContext } from 'react'

function App() {
  const { lightMode } = useContext(ThemeContext)
  console.log(lightMode)

  return (
    <main className={styles.App} data-theme={`${lightMode ? 'dark' : null}`}>
      <Header />
      <section className={styles.cards}>
        {mainCards.map((card) => (
          <SocialCard
            key={card.id}
            target={card.target}
            followText={card.followText}
            userName={card.userName}
            image={card.image}
            color={card.color}
            icon={card.icon}
            media={card.media}
            followToday={card.followToday}
          />
        ))}
      </section>

      <h2 className={styles.title}>Overview - Today</h2>

      <section className={styles.dayCards}>
        {dayliCards.map((card) => (
          <DayCard
            key={card.id}
            target={card.target}
            image={card.image}
            title={card.title}
            icon={card.icon}
            percentage={card.percentage}
          />
        ))}
      </section>
    </main>
  )
}

export default App
