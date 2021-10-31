import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, title = "Герои" }) {
  return (
    <>
      <Head>
        <title>{title} | НГПУ Музей славы</title>
      </Head>
      <section id="content-wrap">
        <main id="content" role="main">
          <Header />
          {children}
        </main>
        <Footer />
      </section>
    </>
  );
}
