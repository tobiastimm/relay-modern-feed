import { Environment, Network, RecordSource, Store } from 'relay-runtime'
const fetchQuery = async (request, variables) => {
  const body = JSON.stringify({
    query: request.text,
    variables,
  })

  const token = process.env.REACT_APP_GRAPHQL_AUTH
  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    authorization: token ? `Bearer ${token}` : '',
  }
  const response = await fetch(process.env.REACT_APP_GRAPHQL_API, {
    method: 'POST',
    headers,
    body,
  })
  return await response.json()
}
const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)
const env = new Environment({
  network,
  store,
})
export default env
