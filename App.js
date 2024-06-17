import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement("h1", {}, "Welcome")
const text = React.createElement("p", {}, "This is a test.....")
const container = React.createElement("div", {}, [heading1, text])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(container)