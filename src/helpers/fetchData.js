export const fetchData = async(numberHoles, limit) => {

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

    return data

}