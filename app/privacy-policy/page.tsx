export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-gray-800">
      <div className="mx-auto max-w-5xl px-6 py-26">
        <h1 className="mb-2 text-4xl font-bold">Privacy Policy</h1>
        <p className="mb-10 text-gray-600">
          <strong>Effective Date:</strong> 1/7/2026
        </p>

        <p className="mb-8 leading-8">
          At <strong>FUJI SOLAR</strong>, we value your privacy and are
          committed to protecting the personal information you share with us.
          This Privacy Policy explains how we collect, use, store, and protect
          your information when you interact with us through our website, social
          media platforms, messaging services, or any other communication
          channels.
        </p>

        <p className="mb-12 leading-8">
          By contacting or interacting with FUJI SOLAR, you agree to the
          collection and use of your information in accordance with this Privacy
          Policy.
        </p>

        <Section title="1. Information We Collect">
          <h3 className="mt-6 mb-2 font-semibold">Personal Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full Name</li>
            <li>Mobile Number</li>
            <li>Email Address</li>
            <li>City and Address</li>
            <li>Property Information (when required for solar installation)</li>
            <li>
              Identification details provided voluntarily for documentation
              purposes
            </li>
          </ul>

          <h3 className="mt-8 mb-2 font-semibold">Communication Information</h3>
          <p className="mb-4">
            When you contact us through our Website, Facebook Messenger,
            Instagram Direct Messages, WhatsApp, Phone Calls, or Email, we may
            store:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Messages</li>
            <li>Enquiry Details</li>
            <li>Attachments</li>
            <li>Communication History</li>
          </ul>

          <h3 className="mt-8 mb-2 font-semibold">Project Information</h3>
          <p className="mb-4">
            During the sales and installation process, we may also maintain
            records including:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Quotation Details</li>
            <li>Solar System Requirements</li>
            <li>Installation Progress</li>
            <li>Project Status</li>
            <li>Payment Records</li>
            <li>Service Requests</li>
            <li>Warranty Information</li>
            <li>Maintenance History</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc pl-6 space-y-2">
            <li>Responding to enquiries</li>
            <li>Providing product information</li>
            <li>Preparing quotations</li>
            <li>Managing solar installation projects</li>
            <li>Customer communication</li>
            <li>Scheduling site visits</li>
            <li>Processing project documentation</li>
            <li>Providing warranty and maintenance services</li>
            <li>Improving customer support</li>
            <li>Complying with legal obligations</li>
          </ul>

          <p className="mt-6">
            We do not sell your personal information to third parties.
          </p>
        </Section>

        <Section title="3. Social Media & Messaging Platforms">
          <p>
            If you contact us through Facebook, Instagram, or WhatsApp, your
            messages and related information may be securely processed and
            stored within our internal Customer Relationship Management (CRM)
            system for customer support, enquiry management, quotation
            preparation, project tracking, and after-sales service.
          </p>
        </Section>

        <Section title="4. Data Security">
          <p>
            FUJI SOLAR implements appropriate technical and organizational
            measures to safeguard your personal information against unauthorized
            access, disclosure, alteration, or destruction. Access is limited to
            authorized employees who require it to perform their duties.
          </p>
        </Section>

        <Section title="5. Information Sharing">
          <p>
            We may share information only when necessary with government
            authorities, financial institutions, installation partners, or
            service providers involved in delivering our services.
          </p>

          <p className="mt-4 font-medium">
            We never sell or rent customer information to third parties for
            marketing purposes.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            We retain personal information only as long as necessary to provide
            services, maintain warranty records, comply with legal obligations,
            and resolve customer support requests. Information that is no longer
            required is securely deleted or anonymized where appropriate.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal information.</li>
            <li>Correct inaccurate information.</li>
            <li>Update your contact details.</li>
            <li>Request deletion of your personal data.</li>
            <li>Withdraw consent where applicable.</li>
          </ul>
        </Section>

        <Section title="8. Cookies and Website Usage">
          <p>
            Our website may use cookies and similar technologies to improve
            website functionality, analyze visitor interactions, and enhance the
            overall user experience.
          </p>
        </Section>

        <Section title="9. Third-Party Services">
          <p>
            Our services may integrate with third-party platforms including Meta
            (Facebook & Instagram), WhatsApp, Google Services, payment
            providers, and cloud hosting providers. These services maintain
            their own privacy policies governing how they handle your
            information.
          </p>
        </Section>

        <Section title="10. Changes to this Privacy Policy">
          <p>
            FUJI SOLAR may update this Privacy Policy from time to time. The
            latest version will always be available on our website.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p className="mb-4">
            If you have any questions regarding this Privacy Policy or wish to
            exercise your privacy rights, please contact us:
          </p>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <p className="font-semibold text-lg">FUJI SOLAR</p>

            <p className="mt-3">
              <strong>Website:</strong> https://fujisolar.in
            </p>

            <p>
              <strong>Email:</strong> info@fujisolar.in
            </p>

            <p>
              <strong>Whatsapp:</strong> +91 90877 18185
            </p>

            <p className="mt-3">
              <strong>Address:</strong>
              <br />
              <h3 className="font-semibold">FUJI HI-TECH ECO LAB,</h3>
              {/* <br /> */}
              47 Bharathiyar 7th Street,
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
    <section className=" mb-12">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <div className="space-y-4 leading-8">{children}</div>
    </section>
  );
}
