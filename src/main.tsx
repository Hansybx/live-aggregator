import React from 'react'
import ReactDOM from 'react-dom/client'
import routers from './router';
import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
