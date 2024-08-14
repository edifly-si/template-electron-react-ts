import './assets/main.css'
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Providers from './providers'
import AppSplashScreen from '@renderer/components/AppSplashScreen'
const AppRouters = lazy(() => import("./app/index.tsx"))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<AppSplashScreen />}>
      <Providers>
        <AppRouters />
      </Providers>
    </Suspense>
  </React.StrictMode>
)
