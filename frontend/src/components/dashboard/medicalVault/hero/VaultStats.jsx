import {
  FileText,
  Users,
  QrCode,
  HardDrive,
} from "lucide-react";

const VaultStats = ({
  reports,
  profiles,
}) => {

  const totalRecords =
    reports.length;

  const totalProfiles =
    profiles.length;

  const totalQRShares =0
    //report.qrScans;

  const storageUsed =
    reports.reduce(
      (
        total,
        report
      ) =>
        total +
        (report.fileSize || 0),
      0
    );

  const storageMB =
    (
      storageUsed /
      1024 /
      1024
    ).toFixed(2);

  const stats = [
    {
      title:
        "Total Records",

      value:
        totalRecords,

      icon:
        FileText,

      color:
        "from-blue-500 to-cyan-500",
    },

    {
      title:
        "Family Members",

      value:
        totalProfiles,

      icon:
        Users,

      color:
        "from-purple-500 to-pink-500",
    },

    {
      title:
        "QR Shares",

      value:
        totalQRShares,

      icon:
        QrCode,

      color:
        "from-green-500 to-emerald-500",
    },

    {
      title:
        "Storage Used",

      value:
        `${storageMB} MB`,

      icon:
        HardDrive,

      color:
        "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map(
        (
          stat,
          index
        ) => {

          const Icon =
            stat.icon;

          return (

            <div
              key={index}
              className="overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-sm font-medium text-slate-500">

                    {stat.title}
                  </p>

                  <h2 className="mt-4 text-4xl font-black text-slate-900">

                    {stat.value}
                  </h2>
                </div>

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                >

                  <Icon size={30} />
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default VaultStats;