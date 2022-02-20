import "../styles/globals.css";
import "antd/dist/antd.css";
import Head from "next/head";
import AppWrapper from "../context/state";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Study Space</title>
        <meta name="description" content="My study space." />
        <link rel="icon" type="image/svg+xml" href="/panda-icon.svg" />
      </Head>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
