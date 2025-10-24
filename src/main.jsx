
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemContext from './Context/ThemContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemContext>
    <App />
  </ThemContext>
)
