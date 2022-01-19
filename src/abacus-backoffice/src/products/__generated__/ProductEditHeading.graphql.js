/**
 * @generated SignedSource<<e42d794f687105ef8145f1479f7b1856>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./x run relay
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ProductEditHeading$fragmentType: FragmentType;
export type ProductEditHeading$data = {|
  +key: string,
  +name: string,
  +isPublished: boolean,
  +$fragmentType: ProductEditHeading$fragmentType,
|};
export type ProductEditHeading$key = {
  +$data?: ProductEditHeading$data,
  +$fragmentSpreads: ProductEditHeading$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductEditHeading",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "key",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isPublished",
      "storageKey": null
    }
  ],
  "type": "Product",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "23ea1991f3bc6f0a3e444564c89e8683";
}

module.exports = ((node/*: any*/)/*: Fragment<
  ProductEditHeading$fragmentType,
  ProductEditHeading$data,
>*/);
