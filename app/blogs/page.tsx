"use client";
import Link from "next/link";
import Image from "next/image";
import blogData from "./blogData";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogList() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const gridSectionRef = useRef<HTMLElement>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 10;

  const reversedBlogs = [...blogData].reverse();
  const totalPages = Math.ceil(reversedBlogs.length / POSTS_PER_PAGE);

  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages || 1);
  const startIndex = (safeCurrentPage - 1) * POSTS_PER_PAGE;
  const currentBlogs = reversedBlogs.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      if (gridSectionRef.current) {
        gridSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
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
            Welcome to the Fuji Solar blogs. Your ultimate destination for all things
            related to sustainable energy, innovation, and the future of power
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
      <section
        ref={gridSectionRef}
        className="w-full pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {currentBlogs.map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-white rounded-xl overflow-hidden h-full transition-transform hover:scale-103 duration-300"
            >
              <div
                className="h-48 w-full rounded-xl bg-center bg-cover relative"
                aria-label={`Cover image for ${post.title}`}
              >
                <Image
                  src={post.image}
                  fill
                  alt={post.alt || post.title}
                  className="h-full w-full rounded-xl object-cover object-center"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col grow p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-0.5 text-red-700 bg-red-100 rounded-full">
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-gray-100 pt-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(safeCurrentPage - 1)}
                disabled={safeCurrentPage === 1}
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </button>

              <div className="flex items-center gap-1.5 px-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition-all ${
                      safeCurrentPage === page
                        ? "bg-brand-red text-white shadow-sm"
                        : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(safeCurrentPage + 1)}
                disabled={safeCurrentPage === totalPages}
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
                aria-label="Next page"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Footer / Pagination Info */}
      <div className="w-full text-center pb-20">
        <span className="text-gray-600 text-sm">
          Showing {startIndex + 1}–
          {Math.min(startIndex + POSTS_PER_PAGE, reversedBlogs.length)} of{" "}
          {reversedBlogs.length} articles
        </span>
      </div>
    </div>
  );
}
