"use client";

import ContactHero from "./(components)/ContactHero";
// import ContactSection from "./(components)/ContactSection";
import dynamic from "next/dynamic";

const ContactSection = dynamic(() => import("./(components)/ContactSection"), {
  ssr: false,
  loading: () => null,
});

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
