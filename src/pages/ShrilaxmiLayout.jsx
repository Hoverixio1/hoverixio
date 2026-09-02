import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Support', to: '/shrilaxmigoldpalace/shrilaxmi-support' },
  { label: 'Privacy Policy', to: '/shrilaxmigoldpalace/shrilaxmi-privacy' },
  { label: 'Terms & Conditions', to: '/shrilaxmigoldpalace/shrilaxmi-terms' },
  { label: 'Contact', href: 'mailto:premprakashsirvi@gmail.com?subject=Shrilaxmi%20Gold%20Palace%20Support' },
];

export function ShrilaxmiLogo({ className = 'h-24 w-24 sm:h-28 sm:w-28' }) {
  return (
    <svg viewBox="0 0 240 240" className={className} aria-label="Shrilaxmi Gold Palace logo" role="img">
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7e4a0" />
          <stop offset="30%" stopColor="#d7ad5b" />
          <stop offset="65%" stopColor="#f0d57b" />
          <stop offset="100%" stopColor="#a9782f" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#goldGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M52 96L120 36L188 96L120 156L52 96Z" opacity="0.9" />
        <path d="M120 36V156M52 96H188" opacity="0.75" />
        <path d="M78 122L120 82L162 122L120 162L78 122Z" opacity="0.7" />
        <path d="M48 127L120 196L192 127" opacity="0.85" />
        <path d="M78 73L120 44L162 73" opacity="0.75" />
        <path d="M62 166C76 178 92 184 120 184C148 184 164 178 178 166" opacity="0.7" />
        <path d="M70 154C88 146 102 142 120 142C138 142 152 146 170 154" opacity="0.75" />
      </g>
      <g fill="url(#goldGradient)">
        <path d="M120 168C132 168 144 172 152 180C146 188 137 193 120 193C103 193 94 188 88 180C96 172 108 168 120 168Z" opacity="0.92" />
        <path d="M53 174C66 148 83 137 107 137H133C157 137 174 148 187 174C176 185 162 191 138 192H102C78 191 64 185 53 174Z" opacity="0.9" />
      </g>
      <g fill="none" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M72 118C86 108 99 104 120 104C141 104 154 108 168 118" opacity="0.8" />
        <path d="M100 104V130M120 104V130M140 104V130" opacity="0.7" />
      </g>
      <g fill="url(#goldGradient)">
        <circle cx="120" cy="84" r="7" />
        <path d="M120 52C126 52 132 55 136 60L123 72H117L104 60C108 55 114 52 120 52Z" />
        <path d="M103 95L110 93L120 103L130 93L137 95L127 108L120 118L113 108L103 95Z" />
      </g>
    </svg>
  );
}

export function ShrilaxmiLayout({ title, description, children }) {
  useEffect(() => {
    document.title = `${title} | Shrilaxmi Gold Palace`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [title, description]);

  return (
    <div className="min-h-screen bg-[#021a17] text-[#f6d98c] antialiased">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="pt-5 pb-4 sm:pt-7">
          <nav className="rounded-full border border-[#d7b15d]/60 bg-[#062c29]/80 shadow-[0_0_18px_rgba(215,177,93,0.12)] backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:px-6">
              <Link to="/shrilaxmigoldpalace/shrilaxmi-support" className="flex items-center gap-3 text-[#f6d98c] transition-opacity hover:opacity-90">
                <ShrilaxmiLogo className="h-12 w-12 sm:h-14 sm:w-14" />
                <span className="text-lg font-semibold tracking-[0.08em] sm:text-xl">Shrilaxmi Gold Palace</span>
              </Link>

              <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-medium text-[#f6d98c]/80 sm:gap-3 sm:text-sm">
                {navItems.map((item) => {
                  if (item.href) {
                    return (
                      <a key={item.label} href={item.href} className="rounded-full px-2 py-1.5 transition-colors hover:text-[#fce9b3] hover:bg-[#0e403d]/70">
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      className={({ isActive }) =>
                        `rounded-full px-2 py-1.5 transition-colors ${
                          isActive ? 'bg-[#0e403d] text-[#fce9b3]' : 'hover:text-[#fce9b3] hover:bg-[#0e403d]/70'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </nav>
        </header>

        <main className="pb-10 pt-6 sm:pb-14 sm:pt-10">{children}</main>

        <footer className="border-t border-[#d7b15d]/30 py-6 text-center text-sm text-[#e9d497]">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <Link to="/shrilaxmigoldpalace/shrilaxmi-support" className="transition-opacity hover:text-[#fce9b3]">Support</Link>
            <Link to="/shrilaxmigoldpalace/shrilaxmi-privacy" className="transition-opacity hover:text-[#fce9b3]">Privacy Policy</Link>
            <Link to="/shrilaxmigoldpalace/shrilaxmi-terms" className="transition-opacity hover:text-[#fce9b3]">Terms & Conditions</Link>
          </div>
          <p className="mt-4 text-[#d9bf79]">© 2026 Shrilaxmi Gold Palace. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
