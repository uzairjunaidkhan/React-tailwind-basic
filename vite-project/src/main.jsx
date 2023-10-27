import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Counter from './hook.jsx'

function MyApp(){
  return (
    <div>
      <h1>This is a function</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank"> Click Me </a>
)

const anotherVariable = "this is also a variable"
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me ',
  anotherVariable
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //jsx return only one element
   
    <Counter/>

    // MyApp()

    // <>
    //  <MyApp/>
    //  <App/>
    // </>

    // anotherElement
    // reactElement
)
