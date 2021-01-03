import Head from 'next/head';

const Header = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="The Koop has been innovating chicken recipes for more than 20 years, and have reformulated the batter mixes and spice combinations many times to arrive at today’s perfection. And, not only the marinade and batter, we have extensively researched to result in perfect cooking temperature and duration of cooking. Using only the fresh wholesome ingredients, including never-frozen chicken, we have achieved a perfect culinary balance between great pricing, unsurpassed taste, and quality. And, coupled with those innovations, The Koop has put together a diverse menu to satisfy most of the cravings, with you in mind. Our menu includes delicious morsels to satisfy all ages and personalities. From your little ones to adventurous and daring, with a pleasant experience in mind."
      />
      <meta name="theme-color" content="#f4c529" />
      <title>The Koop</title>
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
