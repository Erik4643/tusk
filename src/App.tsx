import { ToastContainer } from 'react-toastify'
import { Router } from 'router'

export const App = () => (
  <>
    <Router />
    <ToastContainer
      autoClose={2000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
)
