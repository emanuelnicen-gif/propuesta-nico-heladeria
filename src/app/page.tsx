import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Context } from "@/components/Context";
import { MyRole } from "@/components/MyRole";
import { Problems } from "@/components/Problems";
import { WhatIncludes } from "@/components/WhatIncludes";
import { Process } from "@/components/Process";
import { WhatNotIncludes } from "@/components/WhatNotIncludes";
import { Pricing } from "@/components/Pricing";
import { WhySense } from "@/components/WhySense";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Context />
        <MyRole />
        <Problems />
        <WhatIncludes />
        <Process />
        <WhatNotIncludes />
        <Pricing />
        <WhySense />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
