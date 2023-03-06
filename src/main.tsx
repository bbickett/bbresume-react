import '@/scss/main.scss'  // Import Main SCSS file

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(far, fab, fas)

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
      <App/>
  </StrictMode>,
)
