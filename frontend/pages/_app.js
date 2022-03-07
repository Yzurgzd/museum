import "../public/assets/css/style.css";
import "../public/assets/css/base.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#d93a37" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
