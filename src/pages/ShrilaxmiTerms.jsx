import React from 'react';
import { ShrilaxmiLayout } from './ShrilaxmiLayout';

const TermsPage = () => {
  return (
    <ShrilaxmiLayout
      title="Terms & Conditions"
      description="Terms and conditions for Shrilaxmi Gold Palace app usage, scheme access, digital services, and payment processing."
    >
      <section className="mx-auto max-w-4xl rounded-[28px] border border-[#d7b15d]/40 bg-[#051f1d]/90 px-5 py-8 shadow-[0_0_30px_rgba(215,177,93,0.08)] sm:px-8 lg:px-12 lg:py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-[0.06em] text-[#f6d98c] sm:text-5xl">Terms & Conditions</h1>
          <p className="mt-3 text-sm text-[#e6d296] sm:text-base">Last Updated: September 2, 2026.</p>
        </div>

        <div className="space-y-7 text-base leading-8 text-[#ead8a4]">
          <p>
            The Shrilaxmi Gold Palace app provides access to gold savings schemes and related services offered by Shrilaxmi Gold Palace.
          </p>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-[#fce9b3]">Scheme and service terms</h2>
            <p>
              Terms related to contribution amounts, scheme duration, eligibility, and applicable conditions may vary depending on the specific
              scheme and service selected by the user.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-[#fce9b3]">Payments</h2>
            <p>
              Payments may be processed through third-party payment providers. Users are responsible for providing accurate payment and account
              information and for complying with applicable payment rules and procedures.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-[#fce9b3]">Gold prices and information</h2>
            <p>
              Gold price information provided in the app is for informational purposes only and may change based on market conditions and other
              factors. It should not be treated as a guaranteed quote or final transaction value.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-[#fce9b3]">User responsibilities</h2>
            <p>
              Users must provide accurate information, use the app lawfully, and must not misuse, interfere with, or attempt to compromise the app,
              account access, or related services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-[#fce9b3]">Availability and updates</h2>
            <p>
              App availability may be affected from time to time by maintenance, technical issues, or third-party service disruptions. The app and its
              content may be updated or revised from time to time.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-[#fce9b3]">Ownership and changes</h2>
            <p>
              App content, branding, and related materials belong to their respective owners. Shrilaxmi Gold Palace may update these terms from time
              to time and may revise associated service information accordingly.
            </p>
          </div>

          <div className="rounded-2xl border border-[#d7b15d]/30 bg-[#0a2d2b]/80 p-5 text-[#f4e3b4]">
            <p>
              <span className="font-medium text-[#fce9b3]">Phone:</span> +91 90088 83620
            </p>
            <p>
              <span className="font-medium text-[#fce9b3]">Address:</span> 76, 14th Cross Road, Manorayana Palya, RT Nagar, Bengaluru, Karnataka 560032, India
            </p>
          </div>
        </div>
      </section>
    </ShrilaxmiLayout>
  );
};

export default TermsPage;
