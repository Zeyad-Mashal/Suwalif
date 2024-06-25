import { Metadata } from "next";
import Navbar from "./components/Navbartop/Navbar"
import NavbarMenu from "./components/Navbarmenu/NavbarMenu"
import Hero from "./components/Hero/Hero"
import Section1 from "./components/section1/Section1"
import Section2 from "./components/Section2/Section2"
import Footer from "./components/Footer/Footer"
export const metadata: Metadata = {
  title: "Suwalif",
  description: "Created By Zeyad Mashaal",
};
export default function Home() {
  return (
    <main>
      <Navbar />
      <NavbarMenu />
      <Hero />
      <Section1 />
      <Section2 />
      <Footer />
    </main>
  );
}
