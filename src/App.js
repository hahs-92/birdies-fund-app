import { useState } from 'react';
import './App.css';
//helpers
import { fetchData } from './helpers/fetchData'
//components
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Result } from './components/Result'

function App() {

  const [numberHoles, setNumberHoles] = useState(1)
  const [limit, setLimit] = useState("1-9")
  const [birdie, setBirdie] = useState()

  const fetchBirdie = async() => {
    const data = await fetchData(numberHoles, limit)
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
