import axios from 'axios'
import { useQuery } from 'react-query'

type Openings = {
  ID: number
  Role: string
  Salary: number
}

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
})

function App() {
  const { data, isFetching } = useQuery<Openings[]>('openings', async () => {
    const response = await api.get('openings')

    return response.data.data
  })

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map(opening => {
        return (
          <li key={opening.ID}>
            <strong>#{opening.ID} {opening.Role}</strong>
            <p>Salary: {opening.Salary}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App
