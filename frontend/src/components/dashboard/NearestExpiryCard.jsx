import {
  AlertTriangle,
  CalendarClock,
  Pill,
} from "lucide-react";

const NearestExpiryCard = ({
  medicines,
}) => {

  if (
    medicines.length === 0
  ) {
    return null;
  }

  const nearest =
    [...medicines].sort(
      (a, b) =>
        new Date(
          a.expiryDate
        ) -
        new Date(
          b.expiryDate
        )
    )[0];

  const daysLeft =
    Math.ceil(
      (
        new Date(
          nearest.expiryDate
        ) -
        new Date()
      ) /
        (1000 *
          60 *
          60 *
          24)
    );

  return (
    <div className="overflow-hidden rounded-[36px] bg-white shadow-xl">

      <div className="h-2 bg-gradient-to-r from-amber-500 to-red-500" />

      <div className="p-8">

        <div className="flex items-center gap-3">

          <div className="rounded-2xl bg-amber-100 p-4 text-amber-700">

            <AlertTriangle
              size={26}
            />

          </div>

          <div>

            <h2 className="text-2xl font-black text-gray-900">
              Nearest Expiry
            </h2>

            <p className="text-gray-500">
              Requires attention
            </p>

          </div>

        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <InfoCard
            icon={Pill}
            label="Medicine"
            value={
              nearest.medicineName
            }
          />

          <InfoCard
            icon={
              CalendarClock
            }
            label="Expiry Date"
            value={new Date(
              nearest.expiryDate
            ).toLocaleDateString()}
          />

          <InfoCard
            icon={
              AlertTriangle
            }
            label="Days Left"
            value={`${daysLeft} Days`}
          />

        </div>

      </div>

    </div>
  );
};

const InfoCard = ({
  icon: Icon,
  label,
  value,
}) => (
  <div className="rounded-3xl bg-slate-50 p-5">

    <Icon
      size={22}
      className="text-blue-600"
    />

    <p className="mt-3 text-sm text-gray-500">
      {label}
    </p>

    <h3 className="mt-2 font-bold text-gray-900">
      {value}
    </h3>

  </div>
);

export default NearestExpiryCard;