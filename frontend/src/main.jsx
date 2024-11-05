import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './hooks/useCartState.jsx'
import ToastNotification from './components/Notifications/ToastNotification.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
      <ToastNotification />
    </CartProvider>
  </StrictMode>,
)
