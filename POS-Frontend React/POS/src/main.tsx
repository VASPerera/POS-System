
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Provider} from 'react-redux'
import { Store } from './state/Store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store = {Store}>
    <App />
  </Provider>,
)
