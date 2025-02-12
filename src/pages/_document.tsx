import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html lang="es">
      <Head>
        <title>Markel Jaureguibehere - Portfolio</title>
        <meta name="description" content="Desarrollador Fullstack especializado en Node.js, React y bases de datos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
