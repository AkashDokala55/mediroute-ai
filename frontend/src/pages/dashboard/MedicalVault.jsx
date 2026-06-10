import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import VaultHero from "../../components/dashboard/medicalVault/hero/VaultHero";

import VaultStats from "../../components/dashboard/medicalVault/hero/VaultStats";

import FamilyProfiles from "../../components/dashboard/medicalVault/profiles/FamilyProfiles";

import TimelineView from "../../components/dashboard/medicalVault/timeline/TimelineView";

import ReportGrid from "../../components/dashboard/medicalVault/reports/ReportGrid";

import UploadRecordModal from "../../components/dashboard/medicalVault/upload/UploadRecordModal";

import VaultSearch from "../../components/dashboard/medicalVault/search/VaultSearch";

import EmergencyQuickShare from "../../components/dashboard/medicalVault/emergency/EmergencyQuickShare";

import {
  getProfiles,
} from "../../services/profileService";

import {
  getReports,
} from "../../services/reportService";

// ============================================
// DEFAULT PROFILES
// ============================================

const defaultProfiles = [
  {
    id: 1,
    name: "Akash",
    relation: "Self",
    age: 22,
    bloodGroup: "O+",
    records: 38,
  },

  {
    id: 2,
    name: "Ramesh",
    relation: "Father",
    age: 52,
    bloodGroup: "B+",
    records: 64,
  },

  {
    id: 3,
    name: "Lakshmi",
    relation: "Mother",
    age: 46,
    bloodGroup: "A+",
    records: 42,
  },
];

const MedicalVault = () => {

  // ============================================
  // STATES
  // ============================================

  const [
    openUploadModal,
    setOpenUploadModal,
  ] = useState(false);

  const [
    selectedProfile,
    setSelectedProfile,
  ] = useState("Akash");

  const [
    reports,
    setReports,
  ] = useState([]);

  const [
    profiles,
    setProfiles,
  ] = useState([]);

  const [
  searchTerm,
  setSearchTerm,
] = useState("");

  // ============================================
  // LOAD INITIAL DATA
  // ============================================

  useEffect(() => {

  const loadData =
    async () => {

      try {

        const profilesData =
          await getProfiles();

        const reportsData =
          await getReports();

        setProfiles(
          profilesData
        );

        setReports(
          reportsData
        );

        if (
          profilesData.length > 0
        ) {

          setSelectedProfile(
            profilesData[0].name
          );
        }

      } catch (
        error
      ) {

       
      }
    };

  loadData();

}, []);

  return (
    <>
      <DashboardLayout>

        <div className="space-y-10 pb-24">

          {/* HERO */}
          <VaultHero
            onUpload={() =>
              setOpenUploadModal(
                true
              )
            }
          />

          {/* STATS */}
          <VaultStats
  reports={reports}
  profiles={profiles}
/>

          {/* FAMILY PROFILES */}
          <FamilyProfiles
  profiles={profiles}
  setProfiles={setProfiles}
  reports={reports}
  selectedProfile={selectedProfile}
  setSelectedProfile={setSelectedProfile}
/>

          {/* SEARCH */}
          <VaultSearch
  searchTerm={searchTerm}
  setSearchTerm={
    setSearchTerm
  }
/>
          {/* TIMELINE */}
          <TimelineView
            selectedProfile={
              selectedProfile
            }
            reports={reports}
          />

          {/* REPORTS */}
          <ReportGrid
  reports={reports}
  setReports={setReports}
  selectedProfile={
    selectedProfile
  }
  searchTerm={searchTerm}
/>

          {/* EMERGENCY */}
          <EmergencyQuickShare />
        </div>
      </DashboardLayout>

      {/* UPLOAD MODAL */}
      <UploadRecordModal
  open={openUploadModal}
  setOpen={setOpenUploadModal}
  setReports={setReports}
  profiles={profiles}
/>
    </>
  );
};

export default MedicalVault;