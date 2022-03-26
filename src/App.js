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

  const fetchBirdie = async() => {
    try {
      setLoading(true)
      const data = await fetchData(numberHoles, limit)
      setBirdie(data)
      setLoading(false)
      setIsError(null)
    } catch (error) {
      setIsError(error.message)
      setLoading(false)
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
        />

        {
          birdie &&
          <Result
            birdie={birdie}
            isError={ isError}
          />

        }
      </main>
    </div>
  )
}

export default App;
