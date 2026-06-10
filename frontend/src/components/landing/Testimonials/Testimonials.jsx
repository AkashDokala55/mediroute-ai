import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Patient Care User",
    review:
      "MediRoute AI helped me quickly check whether my father's treatment was covered under a healthcare scheme. The process became much easier.",
  },
  {
    name: "Sneha Reddy",
    role: "Medicine Tracker User",
    review:
      "The medicine expiry tracker and reminders are extremely useful for managing medicines for my grandparents.",
  },
  {
    name: "Arjun Sharma",
    role: "Healthcare Scheme User",
    review:
      "Finding scheme-supported hospitals became much simpler. The QR sharing feature is also very convenient during emergencies.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#f7f8ff] py-20 lg:py-32"
    >
      
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-blue-200/20 blur-3xl sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]" />

      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-purple-200/20 blur-3xl sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]" />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          
          {/* BADGE */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">
            
            <div className="h-2 w-2 rounded-full bg-purple-500" />

            <span className="text-xs font-medium text-gray-700 sm:text-sm">
              What People Say
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Helping
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              People
            </span>
            <br />
            Navigate Healthcare More Easily
          </h2>

          {/* SUBTEXT */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            MediRoute AI is designed to simplify healthcare accessibility,
            medical management, and patient support for everyday users.
          </p>
        </motion.div>

        {/* TESTIMONIAL GRID */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 xl:mt-24 xl:grid-cols-3 xl:gap-8">
          
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur-2xl transition-all duration-500 sm:rounded-[32px] sm:p-8"
            >
              
              {/* GLOW */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-300/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100 sm:h-40 sm:w-40" />

              {/* STARS */}
              <div className="relative z-10 flex gap-1">
                
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400 sm:h-[18px] sm:w-[18px]"
                  />
                ))}
              </div>

              {/* REVIEW */}
              <p className="relative z-10 mt-5 text-sm leading-relaxed text-gray-600 sm:mt-6 sm:text-base lg:text-lg">
                “{testimonial.review}”
              </p>

              {/* USER */}
              <div className="relative z-10 mt-8 flex items-center gap-4 sm:mt-10">
                
                {/* AVATAR */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl sm:text-xl">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-900 sm:text-base">
                    {testimonial.name}
                  </h4>

                  <p className="text-xs text-gray-500 sm:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;