import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/routes'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
// import { PersistGate } from "redux-persist/integration/react";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}>
        
      </PersistGate> */}
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
