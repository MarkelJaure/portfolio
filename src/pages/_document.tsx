import { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from "@vercel/analytics/react"


export default function MyDocument() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Analytics />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
