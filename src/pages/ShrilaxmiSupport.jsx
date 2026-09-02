import React from 'react';
import { ShrilaxmiLayout, ShrilaxmiLogo } from './ShrilaxmiLayout';

const features = [
  'Gold Savings Schemes',
  'Scheme Payments',
  'Payment History',
  'Savings Tracking',
  'Gold Ledger',
  'Gold Price Information',
  'Notifications & Reminders',
  'Secure Account Access',
];

const SupportPage = () => {
  return (
    <ShrilaxmiLayout
      title="Support"
      description="Support information for Shrilaxmi Gold Palace customers including help, contact details, and account support."
    >
      <section className="mx-auto max-w-4xl rounded-[28px] border border-[#d7b15d]/40 bg-[#051f1d]/90 px-5 py-8 shadow-[0_0_30px_rgba(215,177,93,0.08)] sm:px-8 lg:px-12 lg:py-12">
        <div className="mb-8 flex justify-center">
          <ShrilaxmiLogo className="h-40 w-40 sm:h-48 sm:w-48" />
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-[0.08em] text-[#f6d98c] sm:text-6xl">SHRILAXMI</h1>
          <p className="mt-3 text-xl font-medium uppercase tracking-[0.22em] text-[#d8b76d] sm:text-3xl">Gold Palace</p>
        </div>

        <div className="mt-10 space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-semibold text-[#fce9b3] sm:text-3xl">Gold Savings Made Simple</h2>
            <p className="mx-auto max-w-3xl text-base leading-8 text-[#ead8a4] sm:text-lg">
              The Shrilaxmi Gold Palace app helps customers manage their gold savings schemes, payments, scheme details, payment history,
              gold ledger, gold price information, and notifications in one place.
            </p>
          </div>

          <div className="rounded-2xl border border-[#d7b15d]/30 bg-[#0a2d2b]/80 p-5 sm:p-7">
            <h3 className="mb-4 text-xl font-semibold text-[#fce9b3] sm:text-2xl">Features</h3>
            <ul className="grid gap-3 text-sm text-[#eedaa0] sm:grid-cols-2 sm:text-base">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 rounded-xl border border-[#d7b15d]/20 bg-[#062c29]/60 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f6d98c]" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#d7b15d]/30 bg-[#0a2d2b]/80 p-5 sm:p-7">
            <h3 className="mb-4 text-xl font-semibold text-[#fce9b3] sm:text-2xl">Need Help?</h3>
            <p className="text-base leading-8 text-[#ead8a4] sm:text-lg">
              For help with login, schemes, payments, transactions, or account-related issues, contact Shrilaxmi Gold Palace.
            </p>

            <div className="mt-5 space-y-3 text-base text-[#f4e3b4]">
              <p>
                <span className="font-medium text-[#fce9b3]">Phone:</span>{' '}
                <a href="tel:+919008883620" className="text-[#f6d98c] underline decoration-[#d7b15d] underline-offset-4 hover:text-[#fce9b3]">
                  +91 90088 83620
                </a>
              </p>
              <p>
                <span className="font-medium text-[#fce9b3]">Email:</span>{' '}
                <a href="mailto:premprakashsirvi@gmail.com" className="text-[#f6d98c] underline decoration-[#d7b15d] underline-offset-4 hover:text-[#fce9b3]">
                  premprakashsirvi@gmail.com
                </a>
              </p>
              <div>
                <p className="font-medium text-[#fce9b3]">Address:</p>
                <p className="mt-1 leading-7 text-[#ead8a4]">
                  76, 14th Cross Road,
                  <br />
                  Manorayana Palya, RT Nagar,
                  <br />
                  Bengaluru, Karnataka 560032, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ShrilaxmiLayout>
  );
};

export default SupportPage;
