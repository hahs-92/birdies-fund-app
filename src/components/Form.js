import React from 'react'

export const Form = ({numberHoles,handleNumber, handleSelect, cb}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        cb()
      }

    return (
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
    )
}
