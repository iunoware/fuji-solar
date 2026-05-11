import Link from "next/link";
import Image from "next/image";
import blogData from "./blogData";

export default function BlogList() {
  return (
    <div className=" bg-background text-gray-900">
      {/* Hero Section */}

      <section className="">
        <div className="h-200 lg:p-10 p-3">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 place-items-center h-full">
            <div className="lg:translate-x-20 z-10 mb-20 flex flex-col gap-5 justify-center md:items-start items-center h-full order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-4">
                Fuji Solar Blogs
              </h1>
              <p className="max-w-3xl tracking-wide text-center md:text-start mx-auto text-lg md:text-xl text-gray-800 leading-relaxed">
                Insights on{" "}
                <strong>Renewable energy, solar energy and sustainable energy</strong>
              </p>
            </div>

            <div className="order-1 lg:order-2 relative">
              <Image
                loading="lazy"
                fill
                src="/images/iunoware-blogs-hero.webp"
                alt="it course fees in Madurai"
                className="h-70 sm:h-90 md:h-105 lg:h-125 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="w-full -translate-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
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
