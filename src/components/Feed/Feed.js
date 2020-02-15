// @flow
import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import Post from '../Post'
import type { Feed_query } from './__generated__/Feed_query.graphql'

type FeedProps = {
  query: Feed_query,
}

const Feed = ({ query }: FeedProps) => {
  return (
    <div>
      {query.feed.edges.map(({ node }) => (
        <Post key={node.id} post={node} />
      ))}
    </div>
  )
}

const FeedFragmentContainer = createFragmentContainer(Feed, {
  query: graphql`
    fragment Feed_query on Query {
      feed: postsConnection(first: 10) {
        edges {
          cursor
          node {
            ...Post_post
          }
        }
      }
    }
  `,
})

export default FeedFragmentContainer
