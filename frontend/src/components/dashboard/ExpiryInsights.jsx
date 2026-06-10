import {
  ShieldCheck,
  AlertTriangle,
  CalendarClock,
  Pill,
} from "lucide-react";

const ExpiryInsights = ({
  medicines,
}) => {

  const today =
    new Date();

  const safe =
    medicines.filter(
      (med) => {

        const diff =
          Math.ceil(
            (
              new Date(
                med.expiryDate
              ) - today
            ) /
              (1000 *
                60 *
                60 *
                24)
          );

        return diff > 30;
      }
    ).length;

  const expiringSoon =
    medicines.filter(
      (med) => {

        const diff =
          Math.ceil(
            (
              new Date(
                med.expiryDate
              ) - today
            ) /
              (1000 *
                60 *
                60 *
                24)
          );

        return (
          diff > 0 &&
          diff <= 30
        );
      }
    ).length;

  const expired =
    medicines.filter(
      (med) =>
        new Date(
          med.expiryDate
        ) < today
    ).length;

  const stats = [
    {
      title:
        "Total Medicines",
      value:
        medicines.length,
      icon: Pill,
      bg:
        "from-blue-600 to-cyan-500",
    },

    {
      title: "Safe",
      value: safe,
      icon:
        ShieldCheck,
      bg:
        "from-green-500 to-emerald-500",
    },

    {
      title:
        "Expiring Soon",
      value:
        expiringSoon,
      icon:
        CalendarClock,
      bg:
        "from-yellow-500 to-amber-500",
    },

    {
      title:
        "Expired",
      value:
        expired,
      icon:
        AlertTriangle,
      bg:
        "from-red-500 to-rose-500",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map(
        (
          item,
          index
        ) => {

          const Icon =
            item.icon;

          return (

            <div
              key={index}
              className="overflow-hidden rounded-[32px] bg-white shadow-xl"
            >

              <div
                className={`h-2 bg-gradient-to-r ${item.bg}`}
              />

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-500">
                      {
                        item.title
                      }
                    </p>

                    <h2 className="mt-3 text-4xl font-black text-gray-900">
                      {
                        item.value
                      }
                    </h2>

                  </div>

                  <div
                    className={`rounded-2xl bg-gradient-to-r ${item.bg} p-4 text-white`}
                  >
                    <Icon
                      size={24}
                    />
                  </div>

                </div>

              </div>

            </div>
          );
        }
      )}

    </div>
  );
};

export default ExpiryInsights;