import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

const SharedReport = () => {

  const { qrId } =
    useParams();
const [
  error,
  setError,
] = useState("");
  const [
    report,
    setReport,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    const loadReport =
      async () => {

        try {

          const response =
            await fetch(
              `https://mediroute-ai-1gb5.onrender.com/api/reports/qr/${qrId}`
            );

          const data =
            await response.json();
if (
  response.status === 403
)
{
  setError(
    "QR Access Expired"
  );

  return;
}
          setReport(data);

        } catch (error) {

          

        } finally {

          setLoading(false);
        }
      };

    loadReport();

  }, [qrId]);

  if (loading) {

    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading Report...
      </div>
    );
  }

 if (error) {

  return (

    <div className="flex min-h-screen items-center justify-center">

      <div className="rounded-3xl border border-red-200 bg-red-50 p-10 text-center">

        <h2 className="text-3xl font-black text-red-600">

          QR Access Expired
        </h2>

        <p className="mt-4 text-slate-600">

          Please generate a new QR code.
        </p>

      </div>

    </div>
  );
}

if (!report) {

  return (
    <div className="flex min-h-screen items-center justify-center">
      Report Not Found
    </div>
  );
}
  return (
    <div className="mx-auto max-w-4xl p-10">

      <h1 className="text-4xl font-black">
        {report.title}
      </h1>

      <p className="mt-4">
        Hospital: {report.hospital}
      </p>

      <p>
        Category: {report.category}
      </p>

      <p>
        Date:
        {" "}
        {new Date(
          report.createdAt
        ).toLocaleDateString()}
      </p>

      <div className="mt-8">

        {report.fileUrl
          ?.toLowerCase()
          .includes(".pdf") ? (

          <iframe
            src={report.fileUrl}
            title={report.title}
            className="h-[800px] w-full border"
          />

        ) : (

          <img
            src={report.fileUrl}
            alt={report.title}
            className="w-full rounded-xl"
          />
        )}

      </div>
    </div>
  );
};

export default SharedReport;