import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ResultcontextProvider } from './context/Resultcontextprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
<ResultcontextProvider>
<BrowserRouter>
          <App />
  </BrowserRouter>,
</ResultcontextProvider>

)
