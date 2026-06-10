import { motion } from "framer-motion";

const AuthInput = ({
  icon,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <motion.div
      whileFocus={{
        scale: 1.01,
      }}
      className="group flex items-center gap-4 rounded-2xl border border-white/60 bg-white/70 px-5 py-4 shadow-lg backdrop-blur-2xl transition-all duration-300 focus-within:border-purple-400 focus-within:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
    >
      {/* ICON */}
      <div className="text-gray-400 transition group-focus-within:text-purple-600">
        {icon}
      </div>

      {/* INPUT */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
    color: "black",
    fontWeight: "300",
  }}
        className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400 sm:text-base"
      />
    </motion.div>
  );
};

export default AuthInput;