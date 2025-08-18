import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/assets/styles/style.scss"

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
