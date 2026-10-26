import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './variables.css'
import CoreLayout from "./Pages/CoreLayout.tsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CoreLayout />
  </StrictMode>,
)
