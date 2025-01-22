import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useQuery } from "react-query"

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
})

type Openings = {
  ID: number
  Role: string
  Salary: number
  Remote: boolean
}

export function Opening() {
  const { '*': id } = useParams()
  const openingID = Number(id)

  const { data: openings, isFetching } = useQuery<Openings[], Error>('openings', async () => {
    const response = await api.get('openings')

    return response.data.data
  }, {
    staleTime: 1000 * 60, // 1 minute
  })

  const opening = openings?.find((item) => item.ID === openingID)

  if (isFetching) return <p>Carregando...</p>
  if (!opening) return <p>Vaga não encontrada</p>

  return (
    <>
      <h1>Detalhes da vaga</h1>
      <p>ID: {opening.ID}</p>
      <p>Role: {opening.Role}</p>
      <p>Salary: {opening.Salary}</p>
      <p>Remota: {opening.Remote ? 'Sim' : 'Não'}</p>
      <Link to={"/"}>Voltar</Link>
    </>
  )
}
