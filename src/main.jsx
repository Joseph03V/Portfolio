import React from "react"
import ReactDom from "react-dom/client"
import App from "./App"
import "./globals.css"


//! after root//
ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <APP />
    </React.StrictMode>
)