"use client";
import Link from "next/link";
import Image from "next/image";
import blogData from "./blogData";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

export default function BlogList() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 },
    )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5",
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4",
      );
  });

  return (
    <div className=" bg-background text-gray-900">
      {/* Hero Section */}
      <main
        className="h-screen text-gray-900 flex justify-center items-center flex-col bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/blog-page.png')",
        }}
      >
        <section className="text-center bg-transparent backdrop-blur-[1px] px-6 pb-6 shrink-0">
          <h1
            ref={headingRef}
            className="text-3xl md:text-5xl text-brand-red font-semibold leading-tight max-w-4xl mx-auto opacity-0"
          >
            Blogs
          </h1>

          <p
            ref={paragraphRef}
            className="mt-4 text-gray-900 max-w-2xl mx-auto text-lg font-semibold opacity-0"
          >
            Welcome to the Fuji Solar blogs. Your ultimate destination for all
            things related to sustainable energy, innovation, and the future of
            power
          </p>
          <div ref={ctaRef} className="mt-6 opacity-0">
            <Link
              href="/contact"
              className="flex items-center gap-2 mx-auto group w-fit bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
            >
              <span>Get a Free Consultation</span>
              <span className="bg-brand-red text-white -rotate-40 group-hover:rotate-0 transition-all duration-200 rounded-full w-6 h-6 p-1 flex items-center justify-center text-sm">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </section>
      </main>

      {/* Blog Grid Section */}
      <section className="w-full pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogData.map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-white rounded-xl overflow-hidden h-full transition-transform hover:scale-103 duration-300"
            >
              <div
                className="h-48 w-full rounded-xl bg-center bg-cover relative"
                // style={{ backgroundImage: `url(${post.image})` }}
                aria-label={`Cover image for ${post.title}`}
              >
                <Image
                  src={post.image}
                  fill
                  alt="Software company in Madurai"
                  className="h-full w-full rounded-xl object-cover object-center"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col grow p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 grow line-clamp-3">
                  {post.summary}
                </p>

                <Link
                  href={`/blogs/${post.url}`}
                  // state={{ blogId: post.id }}
                  className="mt-auto pt-4 border-t border-gray-50"
                >
                  <span className="inline-block text-sm font-medium text-blue cursor-pointer hover:underline">
                    Read Article &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Footer / Pagination Placeholder (Optional Visual Only) */}
      <div className="w-full text-center pb-20">
        <span className="text-gray-600 text-sm">
          Showing {blogData.length} recent articles
        </span>
      </div>
    </div>
  );
}
