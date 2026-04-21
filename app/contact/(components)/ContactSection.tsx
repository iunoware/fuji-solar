"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  CheckCircle2,
  Clock
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form entrance
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
        }
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
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Form */}
          <div ref={formRef} className="relative group">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-100 border border-gray-100 relative z-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    />
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />

                  <button
                    type="submit"
                    className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#C0392B] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-brand-red/20 mb-4"
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
                  <p className="text-gray-500">Thank you for reaching out. We&apos;ll be in touch soon.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-brand-red font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
            {/* Background Blob */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-50 rounded-full blur-2xl -z-0" />
          </div>

          {/* Right Side: Contact Info */}
          <div ref={infoRef} className="space-y-12 lg:pt-10">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">Get in Touch</h3>
              <p className="text-lg text-gray-500 max-w-sm leading-relaxed">
                We&apos;re here to help you with your solar journey. Reach out to us anytime.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#16A34A] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Office</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Apex Tower, 4th Floor, <br />
                    Business District, Chennai 600001
                  </p>
                </div>
              </div>

              <a href="tel:+919876543210" className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-brand-red shrink-0 transition-transform group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-sm text-gray-500 group-hover:text-brand-red transition-colors">+91 98765 43210</p>
                </div>
              </a>

              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-5 group p-4 rounded-2xl bg-green-50 border border-green-100 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                    WhatsApp Chat
                    <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                  </h4>
                  <p className="text-sm text-gray-700 font-medium">+91 98765 43210</p>
                  <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest mt-1">Chat Available Now</p>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-sm text-gray-500">support@fujisolar.com</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="tel:+919876543210"
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
