import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/global.scss"
import "./styles/index.css"
import "./config/i18next-config"

const root = document.getElementById("root") as HTMLDivElement

ReactDOM.createRoot(root).render(
  // <React.StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  // </React.StrictMode>
)
