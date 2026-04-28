"use client";

import { useRef } from "react";
import { Zap, Leaf, ShieldCheck, Settings } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

import CustomButton from "../../components/atoms/CustomButton";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!cardRef.current) return;
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: cardRef, dependencies: [index] },
  );

  return (
    <div
      ref={cardRef}
      className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#C0392B]/50 hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#16A34A] mb-6 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default function WhySolar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!textContentRef.current) return;
      gsap.fromTo(
        textContentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textContentRef.current,
            start: "top 80%",
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Save on Electricity Bills",
      description:
        "Significantly lower your solar panel installation cost Tamil Nadu while reducing monthly energy expenses.",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Friendly Energy",
      description:
        "Clean, renewable power that reduces carbon emissions and protects our planet.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Reliable & Independent",
      description:
        "Enjoy less dependence on the grid and a more stable, independent power supply.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Low Maintenance",
      description:
        "Long-lasting systems designed for durability with minimal upkeep required.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Content */}
          <div ref={textContentRef} className="max-w-xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold mb-6">
              ☀️ Why Solar
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
              Why Switch to <span className="text-brand-red">Solar?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Transform the way you power your life. Solar energy isn&apos;t just about
              saving money; it&apos;s about building a sustainable future while gaining
              total energy independence.
            </p>

            {/* <div>
              <iframe
                width="640"
                height="480"
                src="https://sketchfab.com/playlists/embed?collection=195b4d46c57d4a4688ec263aeac4a2be&autostart=0"
                title="jjj"
                frameBorder="0"
                allowFullScreen
                mozAllowFullScreen={true}
                webkitAllowFullScreen={true}
                allow="autoplay; fullscreen; xr-spatial-tracking"
              ></iframe>

              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "13px",
                  margin: "5px",
                  color: "#4A4A4A",
                }}
              >
                <a
                  href="https://sketchfab.com/js1iiii/collections/jjj-195b4d46c57d4a4688ec263aeac4a2be"
                  target="_blank"
                  rel="nofollow"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  jjj
                </a>{" "}
                by{" "}
                <a
                  href="https://sketchfab.com/js1iiii"
                  target="_blank"
                  rel="nofollow"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  js1iiii
                </a>{" "}
                on{" "}
                <a
                  href="https://sketchfab.com"
                  target="_blank"
                  rel="nofollow"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  Sketchfab
                </a>
              </p>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4">
              <CustomButton variant="black">Get a Quote</CustomButton>
              <CustomButton variant="outline">Learn More</CustomButton>
            </div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
