// ============================================
// STORAGE KEYS
// ============================================

const REPORTS_KEY =
  "mediroute_reports";

const PROFILES_KEY =
  "mediroute_profiles";

// ============================================
// REPORTS
// ============================================

export const getReports =
  () => {

    const reports =
      localStorage.getItem(
        REPORTS_KEY
      );

    return reports
      ? JSON.parse(reports)
      : [];
  };

// ============================================
// SAVE REPORTS
// ============================================

export const saveReports = (
  reports
) => {

  localStorage.setItem(
    REPORTS_KEY,
    JSON.stringify(reports)
  );
};

// ============================================
// ADD REPORT
// ============================================

export const addReport = (
  report
) => {

  const existingReports =
    getReports();

  const updatedReports = [
    {
      id: Date.now(),

      uploadedAt:
        new Date().toISOString(),

      qrShares: 0,

      ...report,
    },

    ...existingReports,
  ];

  saveReports(
    updatedReports
  );

  return updatedReports;
};

// ============================================
// GET REPORT BY ID
// ============================================

export const getReportById = (
  reportId
) => {

  return getReports().find(
    report =>
      report.id ===
      Number(reportId)
  );
};

// ============================================
// DELETE REPORT
// ============================================

export const deleteReport =
  (
    reportId
  ) => {

    const reports =
      getReports();

    const updatedReports =
      reports.filter(
        report =>
          report.id !==
          reportId
      );

    saveReports(
      updatedReports
    );

    return updatedReports;
  };

// ============================================
// DOWNLOAD REPORT
// ============================================

export const downloadReport = (
  report
) => {

  if (
    !report?.fileUrl
  )
    return;

  const link =
    document.createElement(
      "a"
    );

  link.href =
    report.fileUrl;

  link.download =
    report.fileName ||
    "medical-record";

  document.body.appendChild(
    link
  );

  link.click();

  document.body.removeChild(
    link
  );
};

// ============================================
// PROFILES
// ============================================

export const getProfiles =
  () => {

    const profiles =
      localStorage.getItem(
        PROFILES_KEY
      );

    return profiles
      ? JSON.parse(profiles)
      : [];
  };

// ============================================
// SAVE PROFILES
// ============================================

export const saveProfiles = (
  profiles
) => {

  localStorage.setItem(
    PROFILES_KEY,
    JSON.stringify(profiles)
  );
};

// ============================================
// ADD PROFILE
// ============================================

export const addProfile = (
  profile
) => {

  const existingProfiles =
    getProfiles();

  const updatedProfiles = [
    {
      id: Date.now(),

      records: 0,

      ...profile,
    },

    ...existingProfiles,
  ];

  saveProfiles(
    updatedProfiles
  );

  return updatedProfiles;
};

// ============================================
// DELETE PROFILE
// ============================================

export const deleteProfile = (
  profileId
) => {

  const profiles =
    getProfiles();

  const updatedProfiles =
    profiles.filter(
      profile =>
        profile.id !==
        profileId
    );

  saveProfiles(
    updatedProfiles
  );

  return updatedProfiles;
};

// ============================================
// QR TOKEN
// ============================================

export const generateQRToken =
  () => {

    return Math.random()
      .toString(36)
      .substring(2, 12);
  };

// ============================================
// SHARE LINK
// ============================================

export const generateShareLink =
  (
    reportId
  ) => {

    const token =
      generateQRToken();

    return {

      token,

      shareUrl:
        `${window.location.origin}/shared-report/${reportId}`,
    };
  };

// ============================================
// SHARE REPORT
// ============================================

export const shareReport =
  async (
    report
  ) => {

    const shareLink =
      `${window.location.origin}/shared-report/${report.id}`;

    try {

      if (
        navigator.share
      ) {

        await navigator.share({
          title:
            report.title,

          text:
            `Medical Report - ${report.title}`,

          url:
            shareLink,
        });

        return true;
      }

      await navigator.clipboard.writeText(
        shareLink
      );

      return true;

    } catch (
      error
    ) {

      

      return false;
    }
  };

// ============================================
// STORAGE STATS
// ============================================

export const getStorageUsage =
  () => {

    const reports =
      getReports();

    const totalBytes =
      reports.reduce(
        (
          total,
          report
        ) =>
          total +
          (report.size ||
            0),
        0
      );

    return {
      bytes:
        totalBytes,

      kb:
        (
          totalBytes /
          1024
        ).toFixed(2),

      mb:
        (
          totalBytes /
          1024 /
          1024
        ).toFixed(2),
    };
  };