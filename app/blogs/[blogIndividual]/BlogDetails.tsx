"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import blogData from "../blogData";

type Block = {
  type: string;
  text?: React.ReactNode;
  level?: number;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  path?: string;
  alt?: string;
  content?: { question: string; answer: string }[];
};

export default function BlogDetails() {
  const { blogIndividual } = useParams();
  const selectedBlog = blogData.find((blog) => blog.url === blogIndividual);

  if (!selectedBlog) {
    return (
      <div className="bg-background h-screen grid place-items-center">
        <h1 className="text-center text-black py-50 text-3xl">
          Blog not found
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div>
        <div className="mt-20 mx-4 sm:mx-8 md:mx-16 lg:max-w-6xl lg:mx-auto h-64 sm:h-80 md:h-96 lg:h-125 relative rounded-2xl">
          <Image
            fill
            src={`${selectedBlog?.image}`}
            alt="Abstract representation of global digital network connectivity"
            className="w-full  h-full object-cover rounded-2xl"
          />
        </div>

        <article className="max-w-3xl mx-auto px-6 my-16 md:my-24">
          <header className="mb-12 border-b border-gray-200 pb-10">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                {selectedBlog?.category}
              </span>
              <span className="text-gray-500 text-sm font-medium">
                {selectedBlog?.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              {selectedBlog?.title}
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed font-light">
              {selectedBlog?.summary}
            </p>
          </header>

          {/* Main Body Content */}
          <div className="prose prose-lg prose-slate max-w-none text-gray-800 leading-8">
            {(selectedBlog.fullContent as Block[]).map((block, i) => {
              if (block.type === "paragraph")
                return (
                  <p
                    className="text-lg text-gray-800 leading-relaxed font-light my-5"
                    key={i}
                  >
                    {block.text}
                  </p>
                );

              if (block.type === "heading")
                return (
                  <h2
                    className="text-black font-semibold tracking-wide text-2xl mt-10"
                    key={i}
                  >
                    {block.text}
                  </h2>
                );

              if (block.type === "list")
                return (
                  <ul className="mt-5" key={i}>
                    {block.items?.map((item, j) => (
                      <li
                        className="list-disc text-lg text-gray-800 leading-relaxed font-light ml-10"
                        key={j}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                );

              if (block.type === "table")
                return (
                  <div
                    key={i}
                    className="overflow-x-auto w-full my-10 border rounded-xl"
                  >
                    <table className="min-w-full text-left border-collapse whitespace-nowrap">
                      <thead className="bg-blue-100">
                        <tr>
                          {block.headers?.map((header, k) => (
                            <th
                              key={k}
                              className="p-4 text-lg font-semibold text-black"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {block.rows?.map((row, r) => (
                          <tr
                            key={r}
                            className={`${r % 2 === 0 ? "bg-white" : "bg-blue-50/50"}`}
                          >
                            {row.map((column, c) => (
                              <td key={c} className="p-4 text-gray-800">
                                {column}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );

              if (block.type === "image")
                return (
                  <div key={i} className="relative h-100 w-full">
                    <Image
                      fill
                      src={block.path ? block.path : ""}
                      alt={block.alt ? block.alt : "Fuji Solar"}
                      className="w-full h-full object-cover rounded-2xl my-8"
                    />
                  </div>
                );

              if (block.type === "faq")
                return (
                  <div key={i}>
                    <h2 className="text-black font-semibold text-2xl mb-4 mt-10">
                      Frequently Asked Questions (FAQ)
                    </h2>
                    {block.content?.map((point, i) => (
                      <details
                        key={i}
                        className="group mb-4 cursor-pointer border-s-4 border-blue bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden"
                      >
                        <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                          <h2 className="text-lg font-medium">
                            {i + 1}. {point.question}
                          </h2>
                          <svg
                            className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>
                        <p className="pt-4 text-gray-900">{point.answer}</p>
                      </details>
                    ))}
                  </div>
                );
            })}
          </div>
        </article>
      </div>

      {/* contact section */}
      <section className="max-w-3xl mx-auto px-6 my-16 md:my-24">
        <h2 className="text-black font-semibold text-2xl mt-10">
          Contact Fuji Solar - Zero your current Bill
        </h2>

        <ul className="mt-5 space-y-3">
          <li className="flex flex-col sm:flex-row gap-1 sm:gap-5 sm:items-center">
            <div className="text-black font-semibold text-lg">Call Us: </div>
            <div className="flex flex-wrap items-center gap-1">
              <a href="tel:/+919842076979" className="font-semibold text-black">
                +91 98420 76979
              </a>{" "}
              <span>/</span>
              <a href="tel:/+919842105949" className="font-semibold text-black">
                +91 98421 05949
              </a>
              <span>/</span>
              <a href="tel:/+919876543210" className="font-semibold text-black">
                +91 98765 43210
              </a>
            </div>
          </li>

          <li className="flex flex-col sm:flex-row gap-1 sm:gap-5 sm:items-center">
            <div className="text-black font-semibold text-lg">Email: </div>
            <div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@fujisolar.in"
                target="_blank"
                className="font-semibold text-black break-all"
              >
                info@fujisolar.in
              </a>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
