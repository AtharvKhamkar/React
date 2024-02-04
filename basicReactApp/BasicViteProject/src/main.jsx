import React from 'react'
import ReactDOM from 'react-dom/client'


function MyApp() {
  const name = "Atharv"
  return (
    <div>
      <h1>Custom App { name }</h1>
    </div>
  )
}

const reactElement = React.createElement(
  'a',
  { href: "https://google.com", target: "_blank" },
  "click me to visit google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  MyApp()
)
