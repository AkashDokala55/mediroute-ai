import { useEffect } from "react";

const useMedicineNotifications = (
  medicines
) => {

  // REQUEST PERMISSION
  useEffect(() => {

    if (
      "Notification" in window &&
      Notification.permission !==
        "granted"
    ) {

      Notification.requestPermission();
    }

  }, []);

  // CHECK REMINDERS
  useEffect(() => {

    const checkNotifications =
      () => {

        const now = new Date();

        const currentHours =
          now.getHours();

        const currentMinutes =
          now.getMinutes();

        const currentTotal =
          currentHours * 60 +
          currentMinutes;

        medicines.forEach(
          (medicine) => {

            if (
              !medicine.customTime
            )
              return;

            if (
              medicine.status ===
                "Taken" ||
              medicine.status ===
                "Skipped"
            )
              return;

            const [
              medHours,
              medMinutes,
            ] =
              medicine.customTime
                .split(":")
                .map(Number);

            const medicineTotal =
              medHours * 60 +
              medMinutes;

            // Prevent duplicate notifications
            const notificationKey =
              `${medicine._id}-${new Date().toDateString()}`;

            if (
              currentTotal >=
                medicineTotal - 10 &&
              currentTotal <
                medicineTotal
            ) {

              if (
                Notification.permission ===
                  "granted" &&
                !sessionStorage.getItem(
                  notificationKey
                )
              ) {

                new Notification(
                  "Medicine Reminder 💊",
                  {
                    body:
                      `${medicine.name} • ${medicine.dosage}`,
                    icon:
                      "/logo.jpg",
                  }
                );

                sessionStorage.setItem(
                  notificationKey,
                  "sent"
                );
              }
            }
          }
        );
      };

    checkNotifications();

    const interval =
      setInterval(
        checkNotifications,
        60000
      );

    return () =>
      clearInterval(interval);

  }, [medicines]);
};

export default useMedicineNotifications;