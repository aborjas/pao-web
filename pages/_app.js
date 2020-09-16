import "../styles/main.scss";
import Head from "next/head";
import App from "next/app";
import Router from "next/router";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <title>Paola García Fotografía</title>
          <meta
            name="description"
            content="Hola, Soy Paola! Ingeniera de profesión, fotógrafa de corazón."
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
