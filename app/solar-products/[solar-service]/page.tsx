import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getServiceBySlug, servicesData } from "../data";

interface ServicePageProps {
  params: Promise<{ "solar-service": string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    "solar-service": service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { "solar-service": slug } = await params;
  const service = getServiceBySlug(slug);

  return {
    title: `Fuji Solar | ${service?.title ?? "Service"}`,
    description:
      "Explore our solar services including installation, maintenance, and consultation across Tamil Nadu. Get reliable and affordable solar solutions tailored for homes, businesses, and industries.",
  };
}

export default async function ServiceSlug({ params }: ServicePageProps) {
  const { "solar-service": slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero Section ── */}
      <section className="relative w-full h-[60vh] min-h-100 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.mainImage}
            alt={service.alt}
            fill
            priority
            className="object-cover"
          />
          {/* Elegant dark gradient overlay */}
          <div className="absolute inset-0 bg-neutral-900/60" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="mb-6 self-start md:self-center">
            <Link
              href="/solar-products"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white hover:underline transition-all"
            >
              <ArrowLeft size={16} />
              Back to Services
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            {service.title}
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed font-medium">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Main Description */}
          <div className="lg:w-2/3 flex flex-col">
            <div className="flex items-center gap-3 mb-8 text-[#eab308]">
              <span className="w-12 h-0.5 bg-current" />
              <span className="text-sm font-bold uppercase tracking-widest text-[#a16207]">
                Overview
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-8 leading-tight tracking-tight">
              A comprehensive approach to{" "}
              <span className="text-[#f05a1a]">sustainable energy</span>.
            </h2>

            <div className="prose prose-lg text-gray-700 leading-relax max-w-none mb-12">
              {service.fullContent.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Extended Features List */}
            {service.features && (
              <div className="mt-8 bg-[#f9f6f1] rounded-3xl p-8 md:p-10 border border-[#eab308]/20">
                <h3 className="text-2xl font-bold text-[#1c1917] mb-6">
                  Key Engineering Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#f05a1a] shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 flex flex-col">
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-8">
                <h3 className="text-xl font-bold text-[#1c1917] mb-6 border-b border-gray-100 pb-4">
                  Core Benefits
                </h3>
                <ul className="flex flex-col gap-5">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-700">
                      <span className="mt-2 w-2 h-2 rounded-full shrink-0 bg-[#eab308]" />
                      <span className="leading-snug text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action Box */}
              <div className="bg-[#1c1917] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to switch?</h3>
                <p className="text-white/70 text-sm mb-8 leading-relaxed">
                  Join the solar revolution. Get a free consultation and let our experts
                  design the perfect {service.title.toLowerCase()} for your needs.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-8 py-4 bg-[#f05a1a] hover:bg-[#d94f15] transition-colors rounded-full font-bold text-white text-sm"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Optional Diagram Section ── */}
      {service.diagramImage && (
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24 border-t border-gray-100">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] tracking-tight">
              Working Diagram
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl">
              A technical overview of how the {service.title.toLowerCase()} integrates and
              operates.
            </p>
          </div>

          <div className="relative w-full aspect-square md:aspect-video lg:aspect-21/9 bg-[#f9f6f1]/50 rounded-3xl overflow-hidden border border-[#eab308]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 md:p-8">
            <Image
              src={service.diagramImage}
              alt={service.alt}
              fill
              className="object-contain p-4 md:p-8"
            />
          </div>
        </section>
      )}
    </main>
  );
}
