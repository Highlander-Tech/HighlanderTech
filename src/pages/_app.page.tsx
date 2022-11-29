import { SelectProvider } from 'hooks/useSelect';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { Layout } from '../components';
import { trpc } from 'utils/trpc';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/nprogress.css';
import '../styles/global.css';
import { axeAccessibilityReporter } from 'utils/axeAccessibilityReporter';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter();
  }, []);

  return (
    <SelectProvider>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </SelectProvider>
  );
}

export default trpc.withTRPC(App);
