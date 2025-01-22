import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

type Openings = {
  ID: number
  Role: string
}

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
})

export function Openings() {
  const { data, isFetching, isError, error } = useQuery<Openings[], Error>('openings', async () => {
    const response = await api.get('openings')

    return response.data.data
  }, {
    staleTime: 1000 * 60, // 1 minute
  })

  return (
    <ul>
      {isError && <p>Um erro ocorreu: {error.message}</p>}
      {isFetching && <p>Carregando...</p>}
      <h1>Listagem de vagas de emprego</h1>

      {data?.map(opening => {
        return (
          <li key={opening.ID}>
            <Link to={`opening/${opening.ID}`}>
              #{opening.ID} {opening.Role}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

