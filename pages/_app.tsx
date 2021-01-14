import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Provider session={pageProps.session}>
        <Head>
          <title>Cuspide</title>
          <meta property="og:title" content="Cuspide" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
