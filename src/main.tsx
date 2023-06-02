import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from './context/ThemeContext'
import App from './App.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
