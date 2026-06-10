import {
  getReports,
} from "./reportService";

import {
  getProfiles,
} from "./profileService";

import {
  getEmergencyCards,
} from "./emergencyService";

export const getDashboardStats =
  async () => {

    const [
      reports,
      profiles,
      emergencyCards,
    ] = await Promise.all([
      getReports(),
      getProfiles(),
      getEmergencyCards(),
    ]);

    return {

      reports:
        reports.length,

      profiles:
        profiles.length,

      emergencyCards:
        emergencyCards.length,

      sharedReports:
        reports.filter(
          report =>
            report.qrId
        ).length,
    };
  };
  export const getRecentActivities =
  async () => {

    const [
      reports,
      profiles,
      emergencyCards,
    ] = await Promise.all([
      getReports(),
      getProfiles(),
      getEmergencyCards(),
    ]);

    const activities = [];

    reports.forEach(report => {

      activities.push({

        title:
          `${report.title} Uploaded`,

        time:
          report.createdAt,

        type:
          "report",
      });
    });

    profiles.forEach(profile => {

      activities.push({

        title:
          `${profile.name} Profile Added`,

        time:
          profile.createdAt,

        type:
          "profile",
      });
    });

    emergencyCards.forEach(card => {

      activities.push({

        title:
          `${card.fullName} Emergency Card Created`,

        time:
          card.createdAt,

        type:
          "emergency",
      });
    });

    return activities
      .sort(
        (a, b) =>
          new Date(
            b.time
          ) -
          new Date(
            a.time
          )
      )
      .slice(0, 5);
  };