/**
 * @flow
 * @relayHash cf296a776517559cd8903da279cf354c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Feed_query$ref = any;
export type AppFeedQueryVariables = {||};
export type AppFeedQueryResponse = {|
  +$fragmentRefs: Feed_query$ref
|};
export type AppFeedQuery = {|
  variables: AppFeedQueryVariables,
  response: AppFeedQueryResponse,
|};
*/


/*
query AppFeedQuery {
  ...Feed_query
}

fragment Feed_query on Query {
  feed: postsConnection(first: 10) {
    edges {
      cursor
      node {
        ...Post_post
        id
      }
    }
  }
}

fragment Post_post on Post {
  id
  status
  title
  description
  createdAt
  updatedAt
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppFeedQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Feed_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppFeedQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "feed",
        "name": "postsConnection",
        "storageKey": "postsConnection(first:10)",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10
          }
        ],
        "concreteType": "PostConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PostEdge",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Post",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "status",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "description",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createdAt",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "updatedAt",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppFeedQuery",
    "id": null,
    "text": "query AppFeedQuery {\n  ...Feed_query\n}\n\nfragment Feed_query on Query {\n  feed: postsConnection(first: 10) {\n    edges {\n      cursor\n      node {\n        ...Post_post\n        id\n      }\n    }\n  }\n}\n\nfragment Post_post on Post {\n  id\n  status\n  title\n  description\n  createdAt\n  updatedAt\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '295b0da59a78608e421163357925e595';

module.exports = node;
