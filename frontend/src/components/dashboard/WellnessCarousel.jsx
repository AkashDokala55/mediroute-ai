import {
  HeartPulse,
  Droplets,
  Moon,
  Apple,
  Dumbbell,
  Brain,
} from "lucide-react";

const tips = [
  {
    icon: HeartPulse,
    title: "Heart Health",
    text: "30 mins of walking improves cardiovascular health.",
  },
  {
    icon: Droplets,
    title: "Hydration",
    text: "Drink 2-3 litres of water throughout the day.",
  },
  {
    icon: Moon,
    title: "Sleep",
    text: "7-9 hours of quality sleep supports recovery.",
  },
  {
    icon: Apple,
    title: "Nutrition",
    text: "Balanced nutrition boosts immunity and energy.",
  },
  {
    icon: Dumbbell,
    title: "Exercise",
    text: "Regular exercise improves overall wellbeing.",
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    text: "Take short breaks to reduce stress and improve focus.",
  },
];

const WellnessCarousel = () => {

  return (
    <div>

      <div className="mb-6">

        <h2 className="text-3xl font-black text-gray-900">
          Daily Wellness Hub
        </h2>

        <p className="mt-2 text-gray-500">
          Small daily habits create lifelong health.
        </p>

      </div>

      <div className="overflow-hidden">

        <div className="wellness-track flex">

          {[...tips, ...tips].map(
            (tip, index) => {

              const Icon =
                tip.icon;

              return (

                <div
                  key={index}
                  className="mx-3 min-w-[300px] rounded-[32px] border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-3xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">

                    <Icon size={26} />

                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">

                    {tip.title}

                  </h3>

                  <p className="mt-3 text-gray-500">

                    {tip.text}

                  </p>

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
};

export default WellnessCarousel;