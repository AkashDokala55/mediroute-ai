import {
  Clock3,
  ShieldAlert,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

const ExpiryTimer = ({
  minutes = 30,
}) => {

  // ============================================
  // TOTAL TIME
  // ============================================

  const totalSeconds =
    minutes * 60;

  // ============================================
  // STATES
  // ============================================

  const [
    timeLeft,
    setTimeLeft,
  ] = useState(
    totalSeconds
  );

  // ============================================
  // TIMER
  // ============================================

  useEffect(() => {

    if (timeLeft <= 0)
      return;

    const interval =
      setInterval(() => {

        setTimeLeft(
          (
            prev
          ) => prev - 1
        );

      }, 1000);

    return () =>
      clearInterval(
        interval
      );

  }, [timeLeft]);

  // ============================================
  // FORMAT TIME
  // ============================================

  const formatTime =
    (
      seconds
    ) => {

      const mins =
        Math.floor(
          seconds / 60
        );

      const secs =
        seconds % 60;

      return `${mins}:${secs
        .toString()
        .padStart(2, "0")}`;
    };

  // ============================================
  // PERCENTAGE
  // ============================================

  const percentage =
    (
      timeLeft /
      totalSeconds
    ) * 100;

  const expired =
    timeLeft <= 0;

  return (
    <div className="rounded-[32px] border border-orange-100 bg-gradient-to-br from-orange-50 to-red-50 p-6">

      {/* TOP */}
      <div className="flex items-center gap-4">

        <div className={`flex h-16 w-16 items-center justify-center rounded-3xl
          
          ${
            expired

              ? "bg-red-100 text-red-600"

              : "bg-orange-100 text-orange-500"
          }
        `}>

          {expired ? (

            <ShieldAlert size={30} />

          ) : (

            <Clock3 size={30} />
          )}
        </div>

        <div>

          <p className="text-sm font-medium text-slate-500">

            QR Access Timer
          </p>

          <h2 className={`mt-1 text-3xl font-black tracking-tight
          
            ${
              expired

                ? "text-red-600"

                : "text-slate-900"
            }
          `}>

            {expired
              ? "Expired"
              : formatTime(
                  timeLeft
                )}
          </h2>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="mt-6 h-4 overflow-hidden rounded-full bg-white shadow-inner">

        <div
          style={{
            width: `${percentage}%`,
          }}
          className={`h-full rounded-full transition-all duration-1000
          
          ${
            expired

              ? "bg-red-500"

              : "bg-gradient-to-r from-orange-400 to-red-500"
          }
        `}
        />
      </div>

      {/* STATUS */}
      <div className="mt-5">

        {expired ? (

          <div className="rounded-2xl border border-red-200 bg-red-100 px-4 py-3 text-sm font-semibold text-red-700">

            QR access session expired.
            Generate a new secure QR.

          </div>

        ) : (

          <div className="rounded-2xl border border-orange-200 bg-white px-4 py-3 text-sm font-semibold text-orange-700">

            Temporary medical access is active.

          </div>
        )}
      </div>
    </div>
  );
};

export default ExpiryTimer;