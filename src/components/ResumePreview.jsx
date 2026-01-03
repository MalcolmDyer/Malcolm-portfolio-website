const resumeUrl = '/resume.pdf';
const resumeImages = ['/resume.png'];

export function ResumePreview() {
  return (
    <section id="resume" className="mx-auto mt-16 max-w-6xl px-6 text-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-semibold">Resume</h2>
        <a
          href={resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.03]"
        >
          Download PDF
        </a>
      </div>
      <div className="mt-4 flex flex-col items-center space-y-6">
        {resumeImages.map((src, index) => (
          <div
            key={src}
            className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 shadow-2xl shadow-black/30"
          >
            <img
              src={src}
              alt={`Resume page ${index + 1}`}
              className="h-auto w-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
