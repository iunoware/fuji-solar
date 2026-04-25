"use client";

import React, { useState, useRef } from "react";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2, Clock } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>("");
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Form entrance
  //     gsap.fromTo(
  //       formRef.current,
  //       { opacity: 0, x: -30 },
  //       {
  //         opacity: 1,
  //         x: 0,
  //         duration: 0.8,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: "top 75%",
  //         },
  //       },
  //     );

  //     // Info entrance
  //     gsap.fromTo(
  //       infoRef.current,
  //       { opacity: 0, x: 30 },
  //       {
  //         opacity: 1,
  //         x: 0,
  //         duration: 0.8,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: "top 75%",
  //         },
  //       },
  //     );
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      // Info entrance
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  // useEffect(() => {
  //   const form = formRef.current;
  //   const info = infoRef.current;
  //   const section = sectionRef.current;

  //   if (!form || !info || !section) return;

  //   // Don't use gsap.context() at all — it causes revert issues with Next.js
  //   const anim1 = gsap.to(form, {
  //     opacity: 1,
  //     x: 0,
  //     duration: 0.8,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: section,
  //       start: "top 75%",
  //     },
  //   });

  //   const anim2 = gsap.to(info, {
  //     opacity: 1,
  //     x: 0,
  //     duration: 0.8,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: section,
  //       start: "top 75%",
  //     },
  //   });

  //   return () => {
  //     anim1.scrollTrigger?.kill();
  //     anim2.scrollTrigger?.kill();
  //     anim1.kill();
  //     anim2.kill();
  //   };
  // }, []);

  function inputCheck(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) return setError("Enter your name");
    if (!phoneRegex.test(formData.phone)) return setError("Enter valid phone number");
    if (!emailRegex.test(formData.email)) return setError("Enter a valid email address");
    if (!formData.location.trim()) return setError("Enter your location");
    if (!formData.message.trim()) return setError("Enter a message");

    setError("");

    window.open(whatsappLink(), "_blank");

    clearInput();
  }

  function whatsappLink() {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.location ||
      !formData.email ||
      !formData.message
    )
      return;
    // return `https://wa.me/919842076979?text=Hi%20Redinn%20Travels!%0A%0AI’m%20interested%20in%20booking%20a%20trip%20and%20here%20are%20my%20details:%0A%0AName: ${formData.name.trim()}%0AEmail: ${formData.email.trim()}%0APhone: ${formData.phone.trim()}%0AMessage: ${formData.message.trim()}`;
    return `https://wa.me/919842076979?text=${encodeURIComponent(
      `Hi Fuji Solar! \n\nI'm interested in your solar services. Here are my details:\n\nName: ${formData.name.trim()}\nPhone: ${formData.phone.trim()}\nEmail: ${formData.email.trim()}\nMessage: ${formData.message.trim()}`,
    )}`;
  }

  function clearInput() {
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      message: "",
    });
  }

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Form */}
          <div ref={formRef} className="relative group">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-100 border border-gray-100 relative z-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>

              {/* {!isSubmitted ? (
                <form
                  // onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      className="w-full border placeholder-gray-700 text-gray-900 border-gray-400 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />

                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="Phone Number *"
                      required
                      className="w-full border placeholder-gray-700 text-gray-900 border-gray-400 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full border placeholder-gray-700 text-gray-900 border-gray-400 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />

                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full border placeholder-gray-700 text-gray-900 border-gray-400 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                    />
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full border placeholder-gray-700 text-gray-900 border-gray-400 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />

                  <div>
                    <h3
                      id="errorMessage"
                      className="text-center text-red-600 font-semibold text-lg cinzel"
                    >
                      {error}
                    </h3>
                  </div>

                  <button
                    rel="noopener noreferrer"
                    onClick={inputCheck}
                    className="w-full bg-brand-red text-white py-3 rounded-2xl font-bold text-lg hover:opacity-90 transition-all duration-300 active:scale-[0.98] mb-4"
                  >
                    Get Free Consultation
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
                    <Clock size={14} />
                    Our team will contact you within 24 hours.
                  </div>
                </form>
              ) : (
                <div className="py-12 flex flex-col items-center text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500">
                    Thank you for reaching out. We&apos;ll be in touch soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-brand-red font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )} */}

              <form
                // onSubmit={handleSubmit}
                className={`space-y-4 ${isSubmitted ? "hidden" : "block"}`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* name */}
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    className="w-full border placeholder-gray-700 text-gray-900 border-gray-400 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />

                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="Phone Number *"
                    required
                    className="w-full border placeholder-gray-700 text-gray-900 border-gray-400 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border placeholder-gray-700 text-gray-900 border-gray-400 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />

                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full border placeholder-gray-700 text-gray-900 border-gray-400 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                </div>

                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full border placeholder-gray-700 text-gray-900 border-gray-400 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <div>
                  <h3
                    id="errorMessage"
                    className="text-center text-red-600 font-semibold text-lg cinzel"
                  >
                    {error}
                  </h3>
                </div>

                <button
                  rel="noopener noreferrer"
                  onClick={inputCheck}
                  className="w-full bg-brand-red text-white py-3 rounded-2xl font-bold text-lg hover:opacity-90 transition-all duration-300 active:scale-[0.98] mb-4"
                >
                  Get Free Consultation
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
                  <Clock size={14} />
                  Our team will contact you within 24 hours.
                </div>
              </form>

              <div
                className={`${isSubmitted ? "flex" : "hidden"} py-12 flex flex-col items-center text-center animate-fade-in`}
              >
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500">
                  Thank you for reaching out. We&apos;ll be in touch soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-brand-red font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-50 rounded-full blur-2xl z-0" />
          </div>

          {/* Right Side: Contact Info */}
          <div ref={infoRef} className="space-y-12 lg:pt-10">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                Get in Touch
              </h3>
              <p className="text-lg text-gray-500 max-w-sm leading-relaxed">
                We&apos;re here to help you with your solar journey. Reach out to us
                anytime.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-8">
              <a
                href="https://maps.app.goo.gl/A9wFG5uy38CVHwUo7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#16A34A] shrink-0 group-hover:scale-110 transition-all duration-200">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Office</h4>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-brand-red transition-colors">
                    47, Bharathiyar 7th St, S S Colony,
                    <br /> Madurai, Tamil Nadu 625016
                  </p>
                </div>
              </a>

              <a
                href="tel:+919842076979"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-brand-red shrink-0 transition-transform group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-sm text-gray-500 group-hover:text-brand-red transition-colors">
                    +91 98765 43210
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/919842076979"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-brand-red shrink-0 transition-transform group-hover:scale-110">
                  <MessageCircle size={24} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">WhatsApp Chat</h4>
                  <p className="text-sm text-gray-500 group-hover:text-brand-red transition-colors">
                    +91 98765 43210
                  </p>
                </div>
              </a>

              {/* <a
                href="https://wa.me/919842076979"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-5 group p-4 rounded-2xl bg-green-50 border border-green-100 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-all duration-200">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                    WhatsApp Chat
                  </h4>
                  <p className="text-sm text-gray-700 font-medium">+91 98420 76979</p>
                  <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest mt-1">
                    Chat Available Now
                  </p>
                </div>
              </a> */}

              <a
                className="flex items-start gap-5 group"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@fujisolar.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 rounded-xl group-hover:scale-110 bg-red-50 flex items-center justify-center text-gray-400 shrink-0">
                  <Mail size={24} className="text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-sm text-gray-500 group-hover:text-brand-red transition-colors">
                    info@fujisolar.com
                  </p>
                </div>
              </a>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="tel:+919842076979"
                className="inline-flex py-4 px-8 bg-gray-900 text-white rounded-full font-bold text-sm tracking-wide hover:bg-brand-red transition-all duration-300 shadow-xl shadow-gray-200"
              >
                Call Now
              </a>
              <p className="w-full md:w-auto flex items-center text-sm font-bold text-gray-400">
                <span className="w-8 h-px bg-gray-100 mr-3" />
                Trusted by 500+ customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
