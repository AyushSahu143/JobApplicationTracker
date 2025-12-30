import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import JobProvider from './Context/JobProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <JobProvider>
      <App />
      </JobProvider>
    </AuthProvider>
  </StrictMode>,
)
