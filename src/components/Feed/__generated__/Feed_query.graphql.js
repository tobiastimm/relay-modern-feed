/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Post_post$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Feed_query$ref: FragmentReference;
declare export opaque type Feed_query$fragmentType: Feed_query$ref;
export type Feed_query = {|
  +feed: {|
    +edges: $ReadOnlyArray<?{|
      +cursor: string,
      +node: {|
        +$fragmentRefs: Post_post$ref
      |},
    |}>
  |},
  +$refType: Feed_query$ref,
|};
export type Feed_query$data = Feed_query;
export type Feed_query$key = {
  +$data?: Feed_query$data,
  +$fragmentRefs: Feed_query$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Feed_query",
  "type": "Query",
  "metadata": null,
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
                  "kind": "FragmentSpread",
                  "name": "Post_post",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c6c0139bbd31dcdfd61e9deb2bed1dae';

module.exports = node;
