import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement("h1", {key: "heading1"}, "Welcome")
const text = React.createElement("p", {key: "text"}, "This is a test.....")
const container = React.createElement("div", {}, [heading1, text])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(container)