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
        <h1 className="text-center text-black py-50 text-3xl">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div>
        <div className="w-full pt-25 lg:px-40 md:px-30 sm:px-10 px-5 h-100 md:h-125 lg:h-175 relative rounded-2xl">
          <Image
            src={`${selectedBlog?.image}`}
            alt="Abstract representation of global digital network connectivity"
            className="w-full h-full object-cover rounded-2xl"
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
                  <table key={i} className="overflow-hidden rounded-xl border my-10">
                    <thead className="bg-blue-100">
                      <tr>
                        {block.headers?.map((header, i) => (
                          <th
                            key={i}
                            className="text-left p-3 text-lg font-semibold text-black"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows?.map((row, i) => (
                        <tr key={i} className={`${i % 2 === 0 ? "" : "bg-blue-100"}`}>
                          {row.map((column, j) => (
                            <td key={j} className="p-3">
                              {column}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );

              if (block.type === "image")
                return (
                  <div key={i} className="relative h-50 w-80">
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
          Contact Iunoware Pvt Ltd - Start Your IT Career Today
        </h2>

        <ul className="mt-5 space-y-3">
          <li className="flex gap-5 justify-start items-center">
            <div className="text-black font-semibold text-lg">Call Us: </div>
            <div>
              <a href="tel:/+916381268955" className="font-semibold text-black">
                +91 63812 68955
              </a>{" "}
              /
              <a href="tel:/+919842453740" className="font-semibold text-black">
                +91 98424 53740
              </a>
            </div>
          </li>

          <li className="flex gap-5 justify-start items-center">
            <div className="text-black font-semibold text-lg">Email: </div>
            <div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@iunoware.com"
                target="_blank"
                className="font-semibold text-black"
              >
                <div>info@iunoware.com</div>
              </a>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
