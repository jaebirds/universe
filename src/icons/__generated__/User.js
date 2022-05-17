// @flow strict

import React, { type Element } from 'react';

export default function User(props: {}): Element<'svg'> {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinejoin="round">
        <path d="m11.5 4.5 2 2v1a3 3 0 0 1-5.995.176L7.5 6.5z" strokeLinecap="round" />
        <path d="M5.5 12V7.5a5 5 0 1 1 10 0V12" />
        <path
          d="M17.5 16.5v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
