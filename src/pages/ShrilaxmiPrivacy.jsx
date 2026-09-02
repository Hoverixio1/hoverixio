import React from 'react';
import { ShrilaxmiLayout } from './ShrilaxmiLayout';

const PrivacyPage = () => {
  return (
    <ShrilaxmiLayout
      title="Privacy Policy"
      description="Privacy policy for Shrilaxmi Gold Palace app customers, including information collection, usage, security, and support contact details."
    >
      <section className="mx-auto max-w-4xl rounded-[28px] border border-[#d7b15d]/40 bg-[#051f1d]/90 px-5 py-8 shadow-[0_0_30px_rgba(215,177,93,0.08)] sm:px-8 lg:px-12 lg:py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-[0.06em] text-[#f6d98c] sm:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-[#e6d296] sm:text-base">Last Updated: September 2, 2026.</p>
        </div>

        <div className="space-y-7 text-base leading-8 text-[#ead8a4]">
          <p>
            Shrilaxmi Gold Palace respects your privacy and handles personal information only as needed to provide and improve the
            Shrilaxmi Gold Palace app and related services.
          </p>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-[#fce9b3]">Information collected</h2>
            <p>We may collect information such as your name, mobile number, account information, scheme and payment information, and necessary technical information related to app access and service delivery.</p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-[#fce9b3]">How information is used</h2>
            <p>
              Information is used to provide account access, manage gold savings schemes, process payments, maintain transaction history,
              send notifications and reminders, and support customer service and account-related requests.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-[#fce9b3]">Payments and security</h2>
            <p>
              Payments may be processed through third-party payment providers. We do not intentionally store sensitive payment credentials such as UPI PIN,
              card PIN, or CVV. We use reasonable security measures to help protect information from unauthorized access, loss, or misuse.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-[#fce9b3]">Information sharing</h2>
            <p>
              We may share information with necessary service providers such as payment processors, hosting providers, authentication services,
              and notification providers, as required to operate the app and provide services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-[#fce9b3]">Retention</h2>
            <p>
              Information is retained as necessary to provide services, support customers, meet legal or business requirements, and maintain records
              required for account and transaction management.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-[#fce9b3]">Data requests</h2>
            <p>
              Users may contact Shrilaxmi Gold Palace to request account or data deletion, subject to applicable legal retention requirements and
              business obligations.
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

export default PrivacyPage;
