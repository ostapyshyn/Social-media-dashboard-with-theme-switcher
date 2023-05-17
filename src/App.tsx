import styles from './App.module.scss'
import DayCard from './components/DayCard'
import Header from './components/Header'
import SocialCard from './components/SocialCard'

function App() {
  return (
    <main className={styles.App}>
      <Header />
      <SocialCard />
      <h2>Overview - Today</h2>
      <DayCard />
    </main>
  )
}

export default App
