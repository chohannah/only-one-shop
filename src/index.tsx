import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from './routes'

import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store'
import { theme } from './styles'
import { GlobalStyle } from './globalStyles'

import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe/stripe.utils'

// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
