import Image from "next/image";

const leaders = [
  {
    name: "D. Dayal Rajesvaran",
    role: "Founder & CEO",
    heading: null,
    description:
      "With a vision to make sustainable energy accessible and reliable, D. Dayal Rajesvaran founded Fuji Solar in 1983 and laid the foundation for one of the region's most trusted renewable energy companies.",
    image: "/images/dayalRajesvaran-2.webp",
    reverse: false,
    descBg: "bg-[#d6f0e4]",
  },
  {
    name: "Immanuel Devavaram",
    role: "Director - Business Strategy & Marketing",
    heading: "Leading Fuji Solar Forward",
    description:
      "As Director of Corporate Strategy & Marketing, Immanuel drives Fuji Solar's next chapter through strategic growth, customer-first innovation, and a forward-thinking approach to renewable energy.",
    image: "/images/immanuvelDevavaram-2.webp",
    reverse: true,
    descBg: "bg-[#d6f0e4]",
  },
  {
    name: "Mohamed Ali",
    role: "Head - Technology & Implementation",
    heading: "Engineering Solar Excellence",
    description:
      "As Head of Technology & Implementation, Mohamed Ali leads the technical backbone of Fuji Solar. From system architecture to on-ground execution, he ensures every solar solution is delivered with precision, performance, and uncompromising quality.",
    image: "/images/mohammedAli-2.webp",
    reverse: false,
    descBg: "bg-[#d6f0e4]",
  },
];

export default function LeadershipSection() {
  return (
    <section className="w-full bg-background">
      {/* header */}
      <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-px bg-brand-red opacity-60" />
          <span className="text-brand-red text-sm font-mono tracking-[0.45em] uppercase font-semibold">
            Leadership Legacy
          </span>
          <span className="w-12 h-px bg-brand-red opacity-60" />
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[110%] max-w-4xl mb-4">
          Built by Vision. Carried Forward by Innovation.
        </h2>

        <p className="max-w-3xl text-gray-600 text-md leading-relaxed">
          For over 43 years, Fuji Solar has grown through generational
          leadership -built on D.Dayal Rajesvaran&apos;s pioneering vision and
          strengthened by Immanuel&apos;s strategic direction for the future.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`md:flex flex-row mb-10 items-stretch justify-center min-h-55 bg-white ${
              leader.reverse ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* image */}
            <div className="relative w-55 mx-auto">
              <Image
                src={leader.image}
                alt={leader.name}
                width={220}
                height={260}
                className="object-contain object-bottom w-full h-full"
              />
            </div>

            {/* content */}
            <div className="flex-1 px-8 py-7 flex flex-col justify-center">
              <h2 className="text-3xl leading-tight font-black tracking-tight text-black">
                {leader.name}
              </h2>

              <p className="text-[#9d1d1d] text-lg italic font-bold mt-1">
                {leader.role}
              </p>

              <div className={`mt-4 px-4 py-4 rounded-xl ${leader.descBg}`}>
                {leader.heading && (
                  <p className="text-black font-bold text-[1rem] mb-2">
                    {leader.heading}
                  </p>
                )}
                <p className="text-gray-800 text-md leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
