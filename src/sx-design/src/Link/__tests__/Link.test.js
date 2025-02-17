/**
 * @flow
 * @jest-environment jsdom
 */

import React from 'react';
import '@adeira/sx-jest-snapshot-serializer';
import fbt from 'fbt';
import NextLink from 'next/link';

import Link from '../Link';
import { initFbt, renderWithoutProviders } from '../../test-utils';

beforeEach(() => {
  initFbt();
});

it('renders the link as expected - internal link', () => {
  const { container } = renderWithoutProviders(
    <Link nextLinkComponent={NextLink} href="assets/yadada">
      <fbt desc="internal link title" doNotExtract={true}>
        internal link
      </fbt>
    </Link>,
  );

  expect(container).toMatchInlineSnapshot(`
.f6wvk {
  color: rgba(var(--sx-link-text-color));
}
.T4SJ0 {
  cursor: pointer;
}
.eJqht {
  text-decoration-color: transparent;
}
._4GrjhO {
  text-decoration-line: underline;
}
._2aVmeo {
  text-decoration-style: solid;
}
.WV8t {
  text-decoration-thickness: 0.05em;
}
@media (prefers-reduced-motion: no-preference) {
  ._2FqB21._2FqB21 {
    transition: text-decoration-color 300ms;
  }
}
.gy8aG:hover {
  opacity: 1;
}
._39mXIW:hover {
  text-decoration-color: inherit;
}
._4eR9Ri {
  opacity: 1;
}
._1traoH {
  opacity: 0.9;
}

<div>
  <a
    class="f6wvk T4SJ0 eJqht _4GrjhO _2aVmeo WV8t _2FqB21 gy8aG _39mXIW _1traoH"
    href="/assets/yadada"
  >
    internal link
  </a>
</div>
`);
});

it('renders the link as expected - internal link with target _blank', () => {
  const { container } = renderWithoutProviders(
    <Link nextLinkComponent={NextLink} href="assets/yadada" target="_blank">
      <fbt desc="internal link with target title" doNotExtract={true}>
        internal link with target _blank
      </fbt>
    </Link>,
  );

  // $FlowFixMe[prop-missing]: `attributes` is missing in the types but it works
  expect(container.firstChild?.attributes).toMatchInlineSnapshot(`
NamedNodeMap {
  "class": "f6wvk T4SJ0 eJqht _4GrjhO _2aVmeo WV8t _2FqB21 gy8aG _39mXIW _1traoH",
  "href": "/assets/yadada",
  "rel": "noreferrer noopener",
  "target": "_blank",
}
`);
});

it('renders the link as expected - external link', () => {
  const { container } = renderWithoutProviders(
    <Link nextLinkComponent={NextLink} href="https://localhost">
      <fbt desc="external link title" doNotExtract={true}>
        external link
      </fbt>
    </Link>,
  );

  expect(container).toMatchInlineSnapshot(`
.f6wvk {
  color: rgba(var(--sx-link-text-color));
}
.T4SJ0 {
  cursor: pointer;
}
.eJqht {
  text-decoration-color: transparent;
}
._4GrjhO {
  text-decoration-line: underline;
}
._2aVmeo {
  text-decoration-style: solid;
}
.WV8t {
  text-decoration-thickness: 0.05em;
}
@media (prefers-reduced-motion: no-preference) {
  ._2FqB21._2FqB21 {
    transition: text-decoration-color 300ms;
  }
}
.gy8aG:hover {
  opacity: 1;
}
._39mXIW:hover {
  text-decoration-color: inherit;
}
._1traoH {
  opacity: 0.9;
}

<div>
  <a
    class="f6wvk T4SJ0 eJqht _4GrjhO _2aVmeo WV8t _2FqB21 gy8aG _39mXIW _1traoH"
    href="https://localhost"
    rel="noreferrer noopener"
  >
    external link
  </a>
</div>
`);
});
