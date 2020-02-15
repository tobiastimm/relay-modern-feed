// @flow
import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import type { Post_post } from './__generated__/Post_post.graphql'
import { useRelayOnRefresh } from '../../hooks/useRelayOnRefresh'

type PostProps = {
  post: Post_post,
}

const Post = ({ post, relay }: PostProps) => {
  const { isLoading, onRefresh } = useRelayOnRefresh(relay)
  return (
    <div>
      <span>{post.title}</span>
      <span>{post.description}</span>
      <button onClick={onRefresh}>Click to Refresh</button>
    </div>
  )
}

const PostFragmentContainer = createFragmentContainer(
  Post,
  {
    post: graphql`
      fragment Post_post on Post {
        id
        status
        title
        description
        createdAt
        updatedAt
      }
    `,
  },
  graphql`
    query PostRefetchQuery($id: ID!) {
      post: node(id: $id) {
        ...Post_post
      }
    }
  `,
)

export default PostFragmentContainer
