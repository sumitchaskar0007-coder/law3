import React from "react";
import { Helmet } from "react-helmet-async";
import { FileText } from "lucide-react";

export default function MootCourt() {
  const brochureHref = "/assets/2nd-moot-court-brochure.pdf";

  return (
    <>
      <Helmet>
        <title>Moot Court Society | Jadhavar College of Law</title>
        <meta
          name="description"
          content="Moot Court Society brochure and document for Jadhavar College of Law."
        />
      </Helmet>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <FileText className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Moot Court Society</h1>
                <p className="mt-1 text-slate-600">2nd Moot Court Brochure</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <iframe
                src={brochureHref}
                title="2nd Moot Court Brochure"
                className="h-[75vh] w-full"
              />
            </div>

            <a
              href={brochureHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Open PDF
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
