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
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(null)
  const [warning, setWarning] = useState(null)

  const fetchBirdie = async() => {
    const offset = limit.split("-")[1]
    if(numberHoles >= parseInt(offset)) {
      setWarning(`El numero a generar no puede ser mayor a ${limit.split("-")[1] -1}`)
      return false
    }

    if(numberHoles < 1) {
      setWarning("El numero a generar no puede ser menor de 0")
      return false
    }

    try {
      setLoading(true)
      const data = await fetchData(numberHoles, limit)
      setBirdie(data)
      setLoading(false)
      setIsError(null)
      setWarning(null)
    } catch (error) {
      setIsError(true)
      setLoading(false)
      setWarning(null)
    }
  }

  const handleNumber = (e) => {
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
          loading={loading}
          warning={warning}
        />
        { isError && <h3>Something went wrong, Try again later!</h3>}
        {
          birdie
          &&
            <Result
              birdie={birdie}
            />
        }
      </main>
    </div>
  )
}

export default App;
