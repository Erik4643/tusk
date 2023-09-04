import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from 'App'
import store from 'store'

import 'react-toastify/dist/ReactToastify.css'
import './index.css'

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
} else {
  console.error("Element with id 'root' not found.")
}
