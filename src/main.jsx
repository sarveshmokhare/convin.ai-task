import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import bucketsReducer from './features/Buckets'

// creating redux store to store all states
const store = configureStore({
  reducer: {
    buckets: bucketsReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* wrapping whole app with redux store so that the whole app has access to the states */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
