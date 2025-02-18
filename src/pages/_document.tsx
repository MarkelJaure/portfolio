import { Html, Head, Main, NextScript } from 'next/document';


export default function MyDocument() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
