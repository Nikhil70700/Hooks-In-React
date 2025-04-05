import React from 'react'
import { useState } from 'react'
import '../FetchApi/api.css'

const HowNotToFetchApi = () => {

  const [fetchApi, setFetchApi] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      setFetchApi(data)
    })
    .catch((error) => console.log(error))
  return (
    <div className='container effect-container'>
      <ul>data:
        {
          fetchApi.map((currData) => {
            return <li key={currData.id}>{currData.title}</li>
          })
        }
      </ul>

    </div>
  )
}

export default HowNotToFetchApi;