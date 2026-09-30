'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import SiteHeader from '@/components/SiteHeader';

const roles = ['Data Scientist', 'Data Analyst'];

const stars = [
  [6, 5], [14, 9], [22, 4], [78, 6], [86, 10], [94, 5], [90, 14],
  [8, 14], [18, 22], [30, 20], [44, 23], [56, 20], [68, 23], [80, 21],
  [96, 18], [12, 26], [36, 25], [62, 26], [74, 18], [50, 18],
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let delay = deleting ? 42 : 88;
    if (!deleting && text === current) delay = 1400;
    if (deleting && text === '') delay = 360;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text === current) {
          setDeleting(true);
        } else {
          setText(current.slice(0, text.length + 1));
        }
      } else if (text === '') {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      } else {
        setText(current.slice(0, text.length - 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {stars.map(([left, top], index) => (
          <span
            key={index}
            className="absolute h-[3px] w-[3px] rounded-full bg-neutral-800/80"
            style={{ left: `${left}%`, top: `${top}%` }}
          />
        ))}
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-[18%] h-[150%] w-[165%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_18%_18%,rgba(214,228,248,0.95),transparent_42%),radial-gradient(ellipse_at_82%_28%,rgba(248,214,230,0.9),transparent_46%),linear-gradient(105deg,#d5e4f8_0%,#ece7f8_38%,#f7f4fb_58%,#f8d7e8_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col px-4 sm:px-6">
        <SiteHeader />

        <div className="flex flex-1 flex-col items-center justify-center pb-16 text-center">
          <p className="text-2xl text-neutral-500 sm:text-3xl">Hello, I&apos;m</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
            Tanvi Nimbalkar
          </h1>
          <p className="mt-5 flex min-h-[2.75rem] items-center justify-center text-3xl font-bold sm:text-4xl">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="ml-1 inline-block h-8 w-[2px] bg-neutral-800 cursor-blink" />
          </p>
          <p className="mt-5 text-base text-neutral-500 sm:text-lg">
            MS Data Science @ University of Colorado Boulder 2026
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {['Machine Learning', 'NLP', 'Data Analysis', 'Visualization', 'Agentic AI'].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-200/80 bg-white/55 px-4 py-1.5 text-sm text-neutral-600 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="mailto:tanvi.nimbalkar25@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-neutral-700 shadow-sm ring-1 ring-neutral-200/80 transition hover:bg-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path strokeLinecap="round" d="M3 7l9 7 9-7" />
              </svg>
            </a>
            <a
              href="https://github.com/tanvinimbalkar?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-neutral-700 shadow-sm ring-1 ring-neutral-200/80 transition hover:bg-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/tanvi-nimbalkar-31664619a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-neutral-700 shadow-sm ring-1 ring-neutral-200/80 transition hover:bg-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://link.springer.com/chapter/10.1007/978-981-19-6631-6_35"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Research paper"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-neutral-700 shadow-sm ring-1 ring-neutral-200/80 transition hover:bg-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
              </svg>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              View Research
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-xl border border-neutral-300 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-800 transition hover:bg-white"
            >
              View Projects
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-800 transition hover:bg-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l-3.5-3.5M12 14l3.5-3.5M5 19h14" />
              </svg>
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
