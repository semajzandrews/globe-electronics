import RevealArmer from "./components/RevealArmer";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Bench from "./components/Bench";
import Repairs from "./components/Repairs";
import Shop from "./components/Shop";
import Proof from "./components/Proof";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <RevealArmer />
      <Nav />
      <main>
        <Hero />
        <Bench />
        <Repairs />
        <Shop />
        <Proof />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
