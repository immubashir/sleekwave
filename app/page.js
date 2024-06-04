'use client';
import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
    }, [])

  return (
    <main>
      <Cursor/>
      <Navbar/>
      <Hero/>
      <Features/>
      {/* <Testimonials/> */}
      <Pricing/>
      <Contact/>
    </main>
  );
}
