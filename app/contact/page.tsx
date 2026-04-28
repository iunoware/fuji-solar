"use client";

import ContactHero from "./(components)/ContactHero";
// import ContactSection from "./(components)/ContactSection";
import dynamic from "next/dynamic";

const ContactSection = dynamic(() => import("./(components)/ContactSection"), {
  ssr: false,
  loading: () => null,
});

// export const metadata = {
//   title: "Contact Solar Company in Madurai | Get Solar Quote Tamil Nadu",
//   description:
//     "Contact our solar experts in Madurai for installation, pricing, and subsidy support. Get a free consultation for solar panel installation across Tamil Nadu today.",
// };

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
