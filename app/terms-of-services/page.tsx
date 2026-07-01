export default function TermsOfService() {
  return (
    <main className="bg-white text-gray-800">
      <div className="mx-auto max-w-5xl px-6 py-26">
        <h1 className="mb-2 text-4xl font-bold">Terms of Service</h1>

        <p className="mb-10 text-gray-600">
          <strong>Effective Date:</strong> 1/7/2026
        </p>

        <p className="mb-8 leading-8">
          Welcome to <strong>FUJI SOLAR</strong>. These Terms of Service
          ("Terms") govern your use of our website, products, and services. By
          accessing our website or engaging with our services, you agree to
          comply with these Terms.
        </p>

        <Section title="1. About Us">
          <p>
            FUJI SOLAR is a solar energy solutions provider offering
            consultation, design, supply, installation, maintenance, and related
            services for residential, commercial, and industrial customers.
          </p>

          <p className="mt-4">
            <strong>Website:</strong> https://fujisolar.in
          </p>
        </Section>

        <Section title="2. Our Services">
          <p>Our services may include, but are not limited to:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Solar Consultation</li>
            <li>Site Survey</li>
            <li>Quotation Preparation</li>
            <li>Solar System Design</li>
            <li>Solar Installation</li>
            <li>Government Subsidy Assistance (where applicable)</li>
            <li>Maintenance and Support</li>
            <li>Warranty Services</li>
          </ul>

          <p className="mt-6">
            The availability of services may vary depending on your location and
            project requirements.
          </p>
        </Section>

        <Section title="3. Customer Responsibilities">
          <p>By using our services, you agree to:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Provide accurate and complete information.</li>
            <li>Cooperate during site inspections and installations.</li>
            <li>Provide access to the installation location when required.</li>
            <li>Make payments as agreed in quotations or contracts.</li>
            <li>Comply with applicable laws and regulations.</li>
          </ul>

          <p className="mt-6">
            Providing false or misleading information may affect our ability to
            provide services.
          </p>
        </Section>

        <Section title="4. Quotations">
          <p>All quotations provided by FUJI SOLAR:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Are based on the information available at the time of preparation.
            </li>
            <li>May have a specified validity period.</li>
            <li>May change if project requirements change.</li>
            <li>Are subject to final technical evaluation where applicable.</li>
          </ul>
        </Section>

        <Section title="5. Installation and Project Timelines">
          <p>Project timelines are estimated and may vary due to:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Weather conditions</li>
            <li>Government approvals</li>
            <li>Material availability</li>
            <li>Customer-requested changes</li>
            <li>Other circumstances beyond our reasonable control</li>
          </ul>

          <p className="mt-6">
            FUJI SOLAR will make reasonable efforts to complete projects within
            the agreed schedule.
          </p>
        </Section>

        <Section title="6. Payments">
          <p>
            Customers agree to make payments according to the agreed quotation,
            invoice, or contract.
          </p>

          <p className="mt-4">
            Failure to make payments on time may result in delays to project
            execution or suspension of services until outstanding amounts are
            settled.
          </p>
        </Section>

        <Section title="7. Warranty and Service">
          <p>
            Warranty coverage is subject to the terms provided with the
            respective products and services.
          </p>

          <p className="mt-4">Warranty does not cover damage caused by:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Unauthorized modifications</li>
            <li>Misuse</li>
            <li>Natural disasters</li>
            <li>Improper maintenance</li>
            <li>External electrical faults beyond our control</li>
          </ul>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            FUJI SOLAR shall not be liable for indirect, incidental, or
            consequential damages arising from the use of our services, except
            where liability cannot be excluded under applicable law.
          </p>

          <p className="mt-4">
            Our total liability shall be limited to the extent permitted under
            Indian law.
          </p>
        </Section>

        <Section title="9. Intellectual Property">
          <p>
            All content on this website, including text, graphics, logos,
            images, and other materials, is the property of FUJI SOLAR unless
            otherwise stated.
          </p>

          <p className="mt-4">
            No content may be copied, reproduced, or distributed without prior
            written permission.
          </p>
        </Section>

        <Section title="10. Privacy">
          <p>
            Your use of our services is also governed by our Privacy Policy,
            which explains how we collect, use, and protect your personal
            information.
          </p>
        </Section>

        <Section title="11. Changes to These Terms">
          <p>
            FUJI SOLAR reserves the right to update these Terms at any time.
          </p>

          <p className="mt-4">
            The latest version will always be published on our website.
            Continued use of our services after changes constitutes acceptance
            of the updated Terms.
          </p>
        </Section>

        <Section title="12. Governing Law">
          <p>
            These Terms shall be governed by and interpreted in accordance with
            the laws of India.
          </p>

          <p className="mt-4">
            Any disputes shall be subject to the jurisdiction of the competent
            courts in Madurai, Tamil Nadu.
          </p>
        </Section>

        <Section title="13. Contact Information">
          <p className="mb-4">
            If you have any questions regarding these Terms, please contact us:
          </p>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-lg font-semibold">FUJI SOLAR</p>

            <p className="mt-3">
              <strong>Website:</strong> https://fujisolar.in
            </p>

            <p>
              <strong>Email:</strong> fujihitechsolar@gmail.com
            </p>

            <p>
              <strong>Phone:</strong> +91 90877 18185
            </p>

            <p className="mt-3">
              <strong>Address:</strong>
              <br />
              47, Bharathiyar 7th Street,
              <br />
              Meenakshi Nagar,
              <br />
              S S Colony,
              <br />
              Tamil Nadu – 625016,
              <br />
              India
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <div className="space-y-4 leading-8">{children}</div>
    </section>
  );
}
