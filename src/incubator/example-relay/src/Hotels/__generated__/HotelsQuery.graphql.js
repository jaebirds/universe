/**
 * @flow
 * @relayHash e4c3698c1fd3a7e5cd12287104c70882
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type HotelsList_hotels$ref = any;
export type Language = "ar" | "bg" | "ca" | "cs" | "da" | "de" | "el" | "en" | "engb" | "enus" | "es" | "esar" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "id" | "is" | "it" | "ja" | "ko" | "lt" | "lv" | "ms" | "nl" | "no" | "pl" | "pt" | "ptbr" | "ptpt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tl" | "tr" | "uk" | "vi" | "zh" | "zhcn" | "zhtw" | "%future added value";
export type HotelsSearchInput = {|
  checkin: any,
  checkout: any,
  cityId?: ?string,
  language?: ?Language,
  latitude?: ?number,
  longitude?: ?number,
  radius?: ?number,
  roomsConfiguration: $ReadOnlyArray<RoomsConfiguration>,
|};
export type RoomsConfiguration = {|
  adultsCount: number,
  children?: ?$ReadOnlyArray<?RoomsChildrenConfiguration>,
|};
export type RoomsChildrenConfiguration = {|
  age?: ?number
|};
export type HotelsQueryVariables = {|
  search: HotelsSearchInput
|};
export type HotelsQueryResponse = {|
  +allAvailableBookingComHotels: ?{|
    +$fragmentRefs: HotelsList_hotels$ref
  |}
|};
export type HotelsQuery = {|
  variables: HotelsQueryVariables,
  response: HotelsQueryResponse,
|};

/*
query HotelsQuery(
  $search: HotelsSearchInput!
) {
  allAvailableBookingComHotels(search: $search) {
    ...HotelsList_hotels
  }
}

fragment HotelsList_hotels on AllHotelAvailabilityHotelConnection {
  edges {
    node {
      id
      ...HotelListItem_hotel
    }
  }
}

fragment HotelListItem_hotel on AllHotelAvailabilityHotel {
  name
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "search",
    "type": "HotelsSearchInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "search"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HotelsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allAvailableBookingComHotels",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AllHotelAvailabilityHotelConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "HotelsList_hotels",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HotelsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allAvailableBookingComHotels",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AllHotelAvailabilityHotelConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "AllHotelAvailabilityHotelEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "AllHotelAvailabilityHotel",
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
                    "name": "name",
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
    "name": "HotelsQuery",
    "id": "c69f74074a9818a47026e024db0e6bd2",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '6d0a6a114c9b0e87ebcf353879a89b31';
export default node;
