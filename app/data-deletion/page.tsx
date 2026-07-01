export default function DataDeletion() {
  return (
    <main className="bg-white text-gray-800">
      <div className="mx-auto max-w-5xl px-6 py-26">
        <h1 className="mb-2 text-4xl font-bold">
          User Data Deletion Instructions
        </h1>

        <p className="mb-10 text-gray-600">
          <strong>Effective Date:</strong> 1 July 2026
        </p>

        <p className="mb-8 leading-8">
          FUJI SOLAR respects your privacy and provides you with the ability to
          request the deletion of your personal information that we have
          collected through our services, including communications via our
          website, Facebook, Instagram, WhatsApp, email, or phone.
        </p>

        <Section title="How to Request Data Deletion">
          <p>
            If you would like us to delete your personal information, please
            contact us using any of the methods below.
          </p>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <p>
              <strong>Email:</strong> fujihitechsolar@gmail.com
            </p>

            <p>
              <strong>Phone:</strong> +91 90877 18185
            </p>

            <p>
              <strong>Website:</strong> https://fujisolar.in
            </p>
          </div>
        </Section>

        <Section title="Information to Include">
          <p>
            To help us locate your records and process your request quickly,
            please include the following information:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Your Full Name</li>
            <li>Mobile Number</li>
            <li>Email Address (if applicable)</li>
            <li>
              Facebook or Instagram account used to communicate with us (if
              applicable)
            </li>
            <li>A brief statement requesting deletion of your personal data</li>
          </ul>
        </Section>

        <Section title="Verification Process">
          <p>
            Before deleting any personal information, we may verify your
            identity to protect your privacy and prevent unauthorized deletion
            requests.
          </p>
        </Section>

        <Section title="Processing Time">
          <p>
            Once your identity has been verified, we will process your request
            within a reasonable period, typically within 30 days, unless a
            longer retention period is required by applicable law.
          </p>
        </Section>

        <Section title="Information That May Be Retained">
          <p>
            In certain situations, we may be legally required to retain specific
            information, including but not limited to:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Invoices and financial records</li>
            <li>Warranty documentation</li>
            <li>Government compliance records</li>
            <li>Records required by applicable laws and regulations</li>
          </ul>

          <p className="mt-6">
            Any retained information will only be kept for the period required
            by law and will not be used for marketing purposes.
          </p>
        </Section>

        <Section title="Questions">
          <p>
            If you have any questions regarding your privacy or this data
            deletion process, please contact us.
          </p>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
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
