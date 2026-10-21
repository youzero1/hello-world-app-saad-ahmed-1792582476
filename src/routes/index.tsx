import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="relative flex w-full flex-col items-center overflow-hidden px-6 py-24 text-center">
      {/* Subtle dot texture behind the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative flex flex-col items-center">
        {/* Live badge */}
        <span className="mb-10 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Your app is live
        </span>

        {/* Headline */}
        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 sm:text-7xl md:text-8xl">
          Hello,{' '}
          <span className="relative inline-block whitespace-nowrap text-orange-600">
            World!
            <svg
              aria-hidden="true"
              className="absolute -bottom-3 left-0 w-full text-orange-300"
              viewBox="0 0 220 14"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M4 10C60 3 160 3 216 8"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Welcoming subline */}
        <p className="mt-10 max-w-md text-lg leading-relaxed text-slate-500 sm:text-xl">
          The classic first program — and the very first corner of the web that
          is all yours.
        </p>
      </div>
    </main>
  );
}
