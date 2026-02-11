import { About } from "./_components/about";
import { Contato } from "./_components/contato";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { ScrollUp } from "./_components/ScrollUp";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contato/>
      <Testimonials />
      <ScrollUp />
      <Footer />
    </main>
  );
}
