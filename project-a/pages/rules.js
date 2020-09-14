// @flow

import * as React from 'react';
import Head from 'next/head';

import Rules from '../src/Rules';

export default function RulesPage(): React.Node {
  return (
    <>
      <Head>
        <title>
          {/* TODO: translations, reuse main title */}
          KOCHKA café · Our rules
        </title>
      </Head>

      {/* TODO: apply subpage styles from "Menu" */}
      <Rules />
    </>
  );
}
