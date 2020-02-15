import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import Environment from './relay-environment'
import Feed from './components/Feed'
import Layout from './components/Layout/Layout'

const APP_FEED_QUERY = graphql`
  query AppFeedQuery {
    ...Feed_query
  }
`

function App() {
  return (
    <QueryRenderer
      environment={Environment}
      query={APP_FEED_QUERY}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!: {error.message}</div>
        }
        if (!props) {
          return <div>Loading...</div>
        }
        return (
          <Layout>
            <Feed query={props}></Feed>
          </Layout>
        )
      }}
    />
  )
}

export default App
