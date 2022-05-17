// @flow strict

import React, { type Element } from 'react';

export default function Diamond(props: {}): Element<'svg'> {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15.5 4 3 4-8 10-8-10 3.009-4zm-13 4h16m-11 0 3 10m3-10-3 10" />
        <path d="M5.509 4 7.5 8l3-4 3 4 2-4" />
      </g>
    </svg>
  );
}
