"use client";

import React, { useState, useRef } from "react";
import { MapPin, Phone, Mail, CheckCircle2, FileText, Clock } from "lucide-react";
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

    // old number
    // return `https://wa.me/919842076979?text=${encodeURIComponent(

    // new number
    return `https://wa.me/919087718185?text=${encodeURIComponent(
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
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 ">Send a Message</h2>
                <p className="text-md text-gray-500">for more details</p>
              </div>

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
                  className="w-full bg-brand-red cursor-pointer text-white py-3 rounded-2xl font-bold text-lg hover:opacity-90 transition-all duration-300 active:scale-[0.98] mb-4"
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
              {/* <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#16A34A] shrink-0 group-hover:scale-110 transition-all duration-200">
                  <MapPin size={24} />
                </div>
                <div className="space-y-3">
                  <div>
                    <a
                      href="https://maps.app.goo.gl/A9wFG5uy38CVHwUo7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 text-sm leading-relaxed hover:text-brand-red transition-colors"
                    >
                      <strong>Zonal Office:</strong> #47, Bharathiyar 7th St, <br />
                      Meenakshi Nagar, <br /> S S Colony, Madurai - 625 016
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://maps.app.goo.gl/EGa27ejrYmRTCCkCA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 text-sm leading-relaxed hover:text-brand-red transition-colors"
                    >
                      <strong>Chennai:</strong> #10/1028,
                      <br /> Seethakathi 3rd Cross Street, Mogappair East, Chennai - 600
                      037
                    </a>
                  </div>
                </div>
              </div> */}

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-brand-red shrink-0 transition-transform group-hover:scale-110">
                  <MapPin size={24} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Office</h4>
                  <div className="flex gap-3 mt-4 justify-center items-center">
                    <a
                      href="https://maps.app.goo.gl/EGa27ejrYmRTCCkCA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" border border-gray-200 p-3 rounded-xl text-gray-700 font-semibold hover:text-brand-red transition-colors"
                    >
                      Chennai
                    </a>
                    <span className="text-gray-950"> - </span>
                    <a
                      href="https://maps.app.goo.gl/A9wFG5uy38CVHwUo7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" border border-gray-200 p-3 rounded-xl text-gray-700 font-semibold hover:text-brand-red transition-colors"
                    >
                      Madurai
                    </a>
                  </div>
                </div>
              </div>

              {/* gst */}
              {/* <div className="inline-flex gap-2 group w-fit mt-3">
                <FileText
                  className="text-gray-800 group-hover:text-brand-red transition-colors"
                  size={20}
                />

                <div className="flex flex-col gap-3">
                  <p className="text-gray-800 hover:text-brand-red transition-colors">
                    GST 33AAZPG8624M1Z0
                  </p>
                </div>
              </div> */}

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-brand-red shrink-0 transition-transform group-hover:scale-110">
                  <FileText size={24} className="text-gray-800" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">GSTIN</h4>
                  <div className="flex gap-3 mt-4 justify-center items-center">
                    <p className=" border border-gray-200 p-3 rounded-xl text-gray-700 font-semibold hover:text-brand-red transition-colors">
                      33AAZPG8624M1Z0
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-brand-red shrink-0 transition-transform group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <div className="flex lg:flex-row flex-col gap-3">
                    <a
                      href="tel:+919842076979"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border border-gray-200 p-3 rounded-xl text-gray-900 hover:text-brand-red transition-colors"
                    >
                      +91 98420 76979
                    </a>

                    <a
                      href="tel:+919842105949"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border border-gray-200 p-3 rounded-xl text-gray-900 hover:text-brand-red transition-colors"
                    >
                      +91 98421 05949
                    </a>

                    <a
                      href="tel:+918925504599"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border border-gray-200 p-3 rounded-xl text-gray-900 hover:text-brand-red transition-colors"
                    >
                      +91 89255 04599
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-brand-red shrink-0 transition-transform group-hover:scale-110">
                  {/* <MessageCircleMore size={24} className="text-green-600" /> */}
                  <svg
                    // className=""
                    width={27}
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#1F2937"
                    stroke-width="0.00024000000000000003"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                        fill="#1F2937"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">WhatsApp Chat</h4>
                  {/* <p className="text-sm text-gray-500 group-hover:text-brand-red transition-colors">
                    +91 89255 04599
                  </p> */}

                  <div className="flex gap-3">
                    <a
                      href="https://wa.me/919087718185"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border border-gray-200 p-3 rounded-xl text-gray-900 hover:text-brand-red transition-colors"
                    >
                      +91 90877 18185
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl group-hover:scale-110 bg-red-50 flex items-center justify-center text-gray-400 shrink-0">
                  <Mail size={24} className="text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@fujisolar.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-900 hover:text-brand-red transition-colors"
                  >
                    info@fujisolar.in
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="tel:+919842076979"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex py-4 px-8 bg-gray-900 text-white rounded-full font-bold text-sm tracking-wide hover:bg-brand-red transition-all duration-300 shadow-xl shadow-gray-200"
              >
                Call Now
              </a>
              <p className="w-full md:w-auto flex items-center text-sm font-bold text-gray-400">
                <span className="w-8 h-px bg-gray-100 mr-3" />
                Trusted by our customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
