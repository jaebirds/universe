// @flow

import * as React from 'react';
import * as sx from '@adeira/sx';
import Link from 'next/link';
import { Menu } from 'grommet-icons';
import { useRouter } from 'next/router';

/* eslint-disable jsx-a11y/anchor-is-valid */
// Next.js does this automatically (https://nextjs.org/docs/api-reference/next/link)

type Props = {||};

function NavLinks() {
  return (
    <div className={styles('navLinkWrapper')}>
      <Link href="/">
        <a className={styles('link')}>Pagination</a>
      </Link>
      <Link href="/polling">
        <a className={styles('link')}>Polling</a>
      </Link>
      <Link href="/local-form">
        <a className={styles('link')}>Local schema</a>
      </Link>
      <Link href="/ssr">
        <a className={styles('link')}>Server side rendering</a>
      </Link>
      <Link href="/mutations/range-add">
        <a className={styles('link')}>Range add mutation</a>
      </Link>
    </div>
  );
}

function Navbar() {
  const { pathname } = useRouter();
  const [show, setShow] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    setShow(false);
  }, [pathname]);

  React.useEffect(() => {
    function WidthChange(mq) {
      setShowMenu(mq.matches);
      setShow(!mq.matches);
    }
    const mq = window.matchMedia('(max-width: 900px)');
    mq.addListener(WidthChange);
    WidthChange(mq);
    return () => {
      mq.removeEventListener(mq);
    };
  }, []);

  return (
    <nav className={styles('nav')}>
      <div className={styles('navInner')}>
        <Link href="/">
          <a className={styles('link')}>Relay Example</a>
        </Link>
        {showMenu && (
          <button
            aria-label="Menu"
            className={styles('button')}
            type="button"
            onClick={() => setShow((show) => !show)}
          >
            <Menu color="white" />
          </button>
        )}
        {!showMenu && <NavLinks />}
      </div>
      {show && showMenu && <NavLinks />}
    </nav>
  );
}

const styles = sx.create({
  nav: {
    width: '100%',
  },
  link: {
    color: '#fff',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    marginRight: 24,
  },
  navInner: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  },
  navLinkWrapper: {
    'flexDirection': 'column',
    'display': 'flex',
    '@media(min-width: 900px)': {
      alignItems: 'flex-end',
      flexDirection: 'row',
    },
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
});

export default (Navbar: React.ComponentType<Props>);
