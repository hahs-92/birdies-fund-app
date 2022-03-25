import { useState } from 'react';
import './App.css';


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

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchBirdie()
  }

  return (
    <div className="App">
      <header>Birdie Fund Randomizer</header>

      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="number">Generate</label>
          <input
            type="number"
            id='number'
            value={ numberHoles}
            onChange={handleNumber}
          />

          <label htmlFor="holes">Birdies hole(s) for a</label>
          <select name="holes" id="holes" onChange={handleSelect}>
            <option value="1-9">1-9</option>
            <option value="10-18">10-18</option>
            <option value="1-18">1-18</option>
          </select>

          <span>courses</span>

          <input type="submit" value="Get Birdie Holes" />
        </form>

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
