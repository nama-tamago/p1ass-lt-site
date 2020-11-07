import 'src/styles/global.scss';
import 'src/styles/tailwind.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Next Template Tailwind</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" key="viewport" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
