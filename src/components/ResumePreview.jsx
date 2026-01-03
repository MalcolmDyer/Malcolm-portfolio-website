const resumeUrl = '/resume.pdf';

export function ResumePreview() {
  return (
    <section id="resume" className="mx-auto mt-16 max-w-5xl px-6 text-white">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/10 shadow-[0_30px_80px_rgba(5,8,15,0.35)] backdrop-blur">
        <div className="grid gap-8 p-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Resume</p>
            <h2 className="text-3xl font-semibold">Preview & download</h2>
            <p className="text-base text-white/70">
              I&apos;ll drop in a live preview of my latest resume here. For now, use the download button to grab the PDF
              once it&apos;s uploaded, or browse the highlight reel below.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent via-sky-400 to-sky-500 px-6 py-3 text-sm font-semibold text-surface shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:from-sky-300 hover:via-accent hover:to-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                Download resume
              </a>
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60">
                Updated frequently
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-accent/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-14 h-32 w-32 rounded-full bg-sky-400/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/60">
                <span>Resume preview</span>
                <span>PDF</span>
              </div>
              <div className="relative h-80">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,99,146,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(78,118,255,0.1),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.08))]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 px-6 py-5 text-center text-sm text-white/70 shadow-inner shadow-black/20">
                    <p className="font-semibold text-white">Resume preview coming soon</p>
                    <p className="mt-2 text-xs text-white/60">
                      Drop the latest PDF into `public/resume.pdf` and this preview will display it.
                    </p>
                    <div className="mt-4 grid gap-2 text-left text-xs text-white/65">
                      <span>• Responsive on-device viewer</span>
                      <span>• Instant download button</span>
                      <span>• Framed to match the new navbar styling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
