import { useState } from 'react';
import './App.css';
//components
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Result } from './components/Result'

function App() {

  const [numberHoles, setNumberHoles] = useState(1)
  const [limit, setLimit] = useState("1-9")
  const [birdie, setBirdie] = useState()

  const fetchBirdie = async() => {

    const response =await fetch("http://192.168.0.105:8081/api/v1/birdies", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "number": numberHoles,
        "limit": limit
      })
    })
    const data = await response.json()
    setBirdie(data)
  }

  const handleNumber = (e) => {
    const offset = limit.split("-")[1]

    if(e.target.value > offset) {
      return false
    }
    setNumberHoles(e.target.value)
  }

  const handleSelect = (e) => {
    setLimit(e.target.value)
  }

  return (
    <div className="App">
      <Header />

      <main>
        <Form
          numberHoles={numberHoles}
          handleNumber={handleNumber}
          handleSelect={handleSelect}
          cb={ fetchBirdie }
        />

        {
          birdie &&
          <Result
            birdie={birdie}
          />

        }
      </main>
    </div>
  )
}

export default App;
