import * as React from "react";
import { Header } from "../components/header";
import { Hero } from "../components/hero/hero";
import { Div1 } from "components/section-div1";
import { About } from "components/about";
import { Div2 } from "components/section-div2";
import { Gal } from "components/gal";
import { Div3 } from "components/section-div3";
import { Know } from "components/knowledge";

const PaoWeb = () => (
  <section>
    <Header />
    <Hero />
    <Div1 />
    <About />
    <Div2 />
    <Gal />
    <Div3 />
    <Know />
  </section>
);
export default PaoWeb;
