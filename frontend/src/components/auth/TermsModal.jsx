import { motion, AnimatePresence } from "framer-motion";

const TermsModal = ({
  open,
  setOpen,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
        >
          
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="w-full max-w-lg rounded-[32px] bg-white p-8 shadow-2xl"
          >
            
            {/* HEADER */}
            <div className="flex items-center justify-between">
              
              <h2 className="text-2xl font-black text-gray-900">
                Terms & Privacy
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="rounded-xl bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600 transition hover:bg-gray-200"
              >
                Close
              </button>
            </div>

            {/* CONTENT */}
            <div className="mt-6 space-y-5">
              
              <TermItem text="Your medical reports and healthcare data are securely encrypted." />

              <TermItem text="MediRoute AI does not sell personal healthcare information." />

              <TermItem text="QR sharing links automatically expire for additional security." />

              <TermItem text="Medicine reminders and uploaded reports remain private to your account." />

              <TermItem text="Healthcare scheme results are informational and should be verified with hospitals." />
            </div>

            {/* FOOTER */}
            <button
              onClick={() => setOpen(false)}
              className="mt-8 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              I Understand
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TermItem = ({ text }) => {
  return (
    <div className="flex gap-3 rounded-2xl bg-gray-50 p-4">
      
      <div className="mt-1 h-2 w-2 rounded-full bg-purple-600" />

      <p className="text-sm leading-relaxed text-gray-600">
        {text}
      </p>
    </div>
  );
};

export default TermsModal;