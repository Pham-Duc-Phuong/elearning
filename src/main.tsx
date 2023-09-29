import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StyleProvider } from '@ant-design/cssinjs'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StyleProvider hashPriority="high">
      <App />
    </StyleProvider>
  </BrowserRouter>
)
