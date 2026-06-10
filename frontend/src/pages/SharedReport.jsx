import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  ShieldCheck,
  Hospital,
  CalendarDays,
  FileText,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";

const SharedReport = () => {

  const { id } = useParams();

  const [error, setError] =
    useState("");

  const [report, setReport] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadReport =
      async () => {

        try {

          const response =
            await fetch(
              `https://mediroute-ai-1gb5.onrender.com/api/reports/qr/${id}`
            );

          const data =
            await response.json();

          if (
            response.status === 403
          ) {

            setError(
              "QR Access Expired"
            );

            return;
          }

          setReport(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    loadReport();

  }, [id]);

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-slate-50">

        <div className="text-center">

          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

          <h2 className="mt-6 text-xl font-bold text-slate-700">

            Loading Medical Report...

          </h2>

        </div>

      </div>
    );
  }

  if (error) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">

        <div className="max-w-lg rounded-[32px] border border-red-200 bg-white p-10 text-center shadow-xl">

          <AlertTriangle
            size={60}
            className="mx-auto text-red-500"
          />

          <h2 className="mt-6 text-3xl font-black text-red-600">

            QR Access Expired

          </h2>

          <p className="mt-4 text-slate-600">

            This secure report link has expired.
            Please generate a new QR code from
            MediRoute AI.

          </p>

        </div>

      </div>
    );
  }

  if (!report) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-slate-50">

        <div className="rounded-3xl bg-white p-10 shadow-xl">

          <h2 className="text-3xl font-black text-red-600">

            Report Not Found

          </h2>

        </div>

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">

      {/* HEADER */}

      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800">

        <div className="absolute inset-0 opacity-10">

          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize:
                "40px 40px",
            }}
          />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16">

          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl">

            <ShieldCheck size={18} />

            <span className="font-semibold">

              Secure Healthcare Access

            </span>

          </div>

          <h1 className="mt-6 text-5xl font-black text-white">

            MediRoute AI

          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-300">

            Verified medical document shared
            securely through encrypted QR access.

          </p>

        </div>

      </div>

      {/* CONTENT */}

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">

          {/* SIDEBAR */}

          <div className="space-y-6">

            <div className="rounded-[32px] bg-white p-8 shadow-xl">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-green-100 p-4 text-green-600">

                  <ShieldCheck size={28} />

                </div>

                <div>

                  <h2 className="text-xl font-black">

                    Verified Record

                  </h2>

                  <p className="text-slate-500">

                    Secure QR Access

                  </p>

                </div>

              </div>

              <div className="mt-8 space-y-6">

                <div>

                  <div className="flex items-center gap-2 text-slate-500">

                    <FileText size={16} />

                    Report Title

                  </div>

                  <h3 className="mt-2 font-bold text-slate-900">

                    {report.title}

                  </h3>

                </div>

                <div>

                  <div className="flex items-center gap-2 text-slate-500">

                    <Hospital size={16} />

                    Hospital

                  </div>

                  <h3 className="mt-2 font-bold text-slate-900">

                    {report.hospital}

                  </h3>

                </div>

                <div>

                  <div className="flex items-center gap-2 text-slate-500">

                    <FileText size={16} />

                    Category

                  </div>

                  <h3 className="mt-2 font-bold text-slate-900">

                    {report.category}

                  </h3>

                </div>

                <div>

                  <div className="flex items-center gap-2 text-slate-500">

                    <CalendarDays size={16} />

                    Date

                  </div>

                  <h3 className="mt-2 font-bold text-slate-900">

                    {new Date(
                      report.createdAt
                    ).toLocaleDateString()}
                  </h3>

                </div>

              </div>

            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl">

              <h3 className="text-2xl font-black">

                Protected Access

              </h3>

              <p className="mt-4 text-blue-100 leading-7">

                This document was shared through
                MediRoute AI's secure QR-based
                healthcare system and can only
                be accessed through authorized
                links.

              </p>

            </div>

          </div>

          {/* DOCUMENT VIEWER */}

          <div className="rounded-[32px] bg-white p-6 shadow-xl">

            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

              <h2 className="text-3xl font-black text-slate-900">

                Medical Document

              </h2>

              <a
                href={report.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >

                <ExternalLink size={18} />

                Open Original File

              </a>

            </div>

            {report.fileUrl
              ?.toLowerCase()
              .includes(".pdf") ? (

              <iframe
                src={report.fileUrl}
                title={report.title}
                className="h-[900px] w-full rounded-2xl border border-slate-200"
              />

            ) : (

              <img
                src={report.fileUrl}
                alt={report.title}
                className="w-full rounded-2xl"
              />

            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default SharedReport;