import Head from 'next/head';

const Header = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/static/images/favicon-32x32.png" sizes="32x32" />
      <link
        rel="apple-touch-icon"
        href="/static/images/favicon-180x180.png"
        sizes="180x180"
      />
      <link
        rel="icon"
        href="/static/images/favicon-192x192.png"
        sizes="192x192"
      />
    </Head>
  );
};

export default Header;
