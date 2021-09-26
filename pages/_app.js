import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import Head from "next/head";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError",progress.finish);

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <meta
          name="description"
          content="Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
