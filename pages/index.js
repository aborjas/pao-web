import * as React from "react";
import { Header } from "../components/header";
import { Hero } from "../components/hero/hero";
import { Div1 } from "components/section-div1";
import { About } from "components/about";

const PaoWeb = () => (
  <section>
    <Header />
    <Hero />
    <Div1 />
    <About />
  </section>
);
export default PaoWeb;
