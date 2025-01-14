import { useEffect, useState } from 'react'

type Openings = {
  ID: number
  Role: string
  Salary: number
}

function App() {
  const [openings, setOpenings] = useState<Openings[]>([])

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/openings')
      .then(response => response.json())
      .then(data => {
        setOpenings(data.data) 
        console.log(data.data)  
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error)
      })
  }, [])  

  return (
    <ul>
      {openings.map(opening => {
        return (
          <li key={opening.ID}>
            <strong>{opening.Role}</strong>
            <p>{opening.Salary}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App
