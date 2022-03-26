import { useState } from 'react';
import './App.css';
//components
import { Header } from './components/Header'
import { Form } from './components/Form'

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
          <section>
            <h2>{`You requested ${birdie.number} birdie hole for a ${birdie.limit} hole course. Here it is:`}</h2>
            <p>{ birdie.holes.join(', ')}</p>
            <p>{ birdie.date }</p>
          </section>
        }
      </main>
    </div>
  );
}

export default App;
