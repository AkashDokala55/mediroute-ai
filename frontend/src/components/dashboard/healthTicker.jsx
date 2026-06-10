import {
  Pill,
  FileText,
  Shield,
  HeartPulse,
  CalendarClock,
} from "lucide-react";

const HealthTicker = () => {

  const items = [
    {
      icon: Pill,
      text: "Track medicines efficiently",
    },
    {
      icon: FileText,
      text: "Keep reports organized",
    },
    {
      icon: CalendarClock,
      text: "Monitor expiry dates regularly",
    },
    {
      icon: Shield,
      text: "Emergency QR always ready",
    },
    {
      icon: HeartPulse,
      text: "Your health is your greatest wealth",
    },
  ];

  return (
    <div className="overflow-hidden rounded-[30px] border border-white/40 bg-white/70 py-4 shadow-xl backdrop-blur-3xl">

      <div className="ticker-track flex items-center">

        {[...items, ...items].map(
          (
            item,
            index
          ) => {

            const Icon =
              item.icon;

            return (
              <div
                key={index}
                className="mx-8 flex items-center gap-3 whitespace-nowrap"
              >

                <div className="rounded-xl bg-blue-100 p-2">

                  <Icon
                    size={18}
                    className="text-blue-600"
                  />

                </div>

                <span className="font-medium text-gray-700">

                  {item.text}

                </span>

              </div>
            );
          }
        )}

      </div>

    </div>
  );
};

export default HealthTicker;