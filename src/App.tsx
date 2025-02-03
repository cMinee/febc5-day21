import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import Button from './components/Button'
import List from './components/List'
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'
import Bmi from './components/pages/Bmi'
import Dringwater from './components/pages/Drinkwater'

function App() {
  // const a = 1

  // state (need to import UseState)
  // const [counter, setCounter] = useState<number>(0);
  // const [username, setUsername] = useState<string>("May state string");

  // const increaseCount = () => {
  //   setCounter(counter + 1);
  // }

  // const decreaseCount = () => {
  //   setCounter(counter - 1);
  // }

  // const isLogin :boolean = false

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + May {a}</h1>
      
      <Heading 
        imgUrl="./assets/react.svg"
        counter={counter}
      > Counter = {counter}
      </Heading>
      

      <Button title="Increase" bgColor='skyblue' updateCount={increaseCount}></Button>
      <Button title="Decrease" bgColor='Red' updateCount={decreaseCount}></Button>

      <List items={[1, 2, 3]} render={(item) => <h1>{item}</h1>}></List> */}

      {/* {isLogin ? <Dashboard></Dashboard> : <Login></Login>} */}

      {/* <Bmi></Bmi><br /> */}

      <Dringwater></Dringwater>
      
    </>
  )
}

export default App
