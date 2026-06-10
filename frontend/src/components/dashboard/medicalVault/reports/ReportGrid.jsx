import {
  FolderOpen,
  Sparkles,
} from "lucide-react";

import {
  useState,
} from "react";

import ReportCard from "./ReportCard";

import ReportViewerModal from "./ReportViewerModal";

import QRShareModal from "../qr/QRShareModal";

import {
  removeReport,
  getReports,
} from "../../../../services/reportService";
import ConfirmModal from "../../../common/ConfirmModal";

const ReportGrid = ({
  reports,
  setReports,
  selectedProfile,
  searchTerm,
}) => {

  const [
    openViewer,
    setOpenViewer,
  ] = useState(false);

  const [
    openQR,
    setOpenQR,
  ] = useState(false);

  const [
    selectedReport,
    setSelectedReport,
  ] = useState(null);
  const [
  openDeleteConfirm,
  setOpenDeleteConfirm,
] = useState(false);

const [
  reportToDelete,
  setReportToDelete,
] = useState(null);

  // ============================================
  // DELETE
  // ============================================

  const handleDelete =
  (
    reportId
  ) => {

    const report =
      reports.find(
        (
          r
        ) =>
          r._id ===
          reportId
      );

    setReportToDelete(
      report
    );

    setOpenDeleteConfirm(
      true
    );
  };
  const confirmDeleteReport =
  async () => {

    if (
      !reportToDelete
    )
      return;

    try {

      await removeReport(
        reportToDelete._id
      );

      const updatedReports =
        await getReports();

      setReports(
        updatedReports
      );

      setOpenViewer(
        false
      );

      setOpenDeleteConfirm(
        false
      );

      setReportToDelete(
        null
      );

    } catch (
      error
    ) {

      
    }
  };
  // ============================================
  // FILTER
  // ============================================

  const filteredReports =
    reports.filter(
      (
        report
      ) => {

        const matchesProfile =
  report.profileId?.name ===
  selectedProfile;

        const matchesSearch =

          report.title
            ?.toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            ) ||

          report.hospital
            ?.toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            ) ||

          report.category
            ?.toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            );

        return (
          matchesProfile &&
          matchesSearch
        );
      }
    );

  return (
    <div>

      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-5">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">

            <FolderOpen size={30} />
          </div>

          <div>

            <h2 className="text-4xl font-black tracking-tight text-slate-900">

              Medical Records Vault
            </h2>

            <p className="mt-2 text-slate-500">

              Securely stored healthcare
              records and uploaded documents.

            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 px-5 py-3 text-sm font-semibold text-indigo-700">

          <Sparkles size={18} />

          {filteredReports.length}
          {" "}
          Records Found
        </div>
      </div>

      {/* EMPTY */}
      {filteredReports.length ===
      0 ? (

        <div className="mt-10 rounded-[36px] border border-dashed border-slate-300 bg-white p-16 text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-slate-400">

            <FolderOpen size={42} />
          </div>

          <h3 className="mt-8 text-3xl font-black text-slate-900">

            No Medical Records
          </h3>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-500">

            Uploaded records will appear here.

          </p>
        </div>

      ) : (

        <div className="mt-10 grid gap-8 xl:grid-cols-2">

          {filteredReports.map(
            (
              report
            ) => (

            <ReportCard
  key={report._id}
  report={report}

  onView={() => {

    setSelectedReport(
      report
    );

    setOpenViewer(
      true
    );
  }}

  onOpenQR={(report) => {

    setSelectedReport(
      report
    );

    setOpenQR(
      true
    );
  }}

  onDelete={
    handleDelete
  }
/>
          ))}
        </div>
      )}

      {/* VIEWER */}
      <ReportViewerModal
        open={openViewer}
        setOpen={setOpenViewer}
        report={selectedReport}
        onOpenQR={() => {

          setOpenViewer(
            false
          );

          setOpenQR(true);
        }}
        onDelete={
          handleDelete
        }
      />

      {/* QR */}
      <QRShareModal
        open={openQR}
        setOpen={setOpenQR}
        report={selectedReport}
      />
      <ConfirmModal
  open={
    openDeleteConfirm
  }
  setOpen={
    setOpenDeleteConfirm
  }
  title="Delete Report"
  message={`Delete "${reportToDelete?.title || ""}" from Medical Vault?`}
  onConfirm={
    confirmDeleteReport
  }
/>
    </div>
  );
};

export default ReportGrid;