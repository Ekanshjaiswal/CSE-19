import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card2 from './components/Card'
import CounterApp from './components/CounterApp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <CounterApp/>
    //   <div >
    //  <Card2 
    //  name="deepak"
    //  class="10 class"
    //  />
    //  <br/>
    //  <Card2
    //   name="rupak"
    //  class="12 class"
    //  />
    //  v
    //  <Card2
    //  name="rupak"
    //  class="12 class"
    //  />
    //   <br/>


    // </div>
  )
}

export default App
