import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Operation from './pages/Operation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Operation />
  </StrictMode>,
)
