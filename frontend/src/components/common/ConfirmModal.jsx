import {
  AlertTriangle,
  X,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

const ConfirmModal = ({
  open,
  setOpen,
  title,
  message,
  onConfirm,
  confirmText = "Confirm",
  confirmColor = "bg-red-600",
}) => {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            className="w-full max-w-lg rounded-[32px] bg-white p-8 shadow-[0_30px_100px_rgba(15,23,42,0.25)]"
          >

            {/* CLOSE */}
            <button
              onClick={() =>
                setOpen(false)
              }
              className="absolute right-6 top-6"
            >
              <X size={20} />
            </button>

            {/* ICON */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600">

              <AlertTriangle size={36} />

            </div>

            {/* TITLE */}
            <h2 className="mt-6 text-center text-3xl font-black text-slate-900">

              {title}

            </h2>

            {/* MESSAGE */}
            <p className="mt-4 text-center leading-7 text-slate-500">

              {message}

            </p>

            {/* ACTIONS */}
            <div className="mt-8 flex gap-4">

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="flex-1 rounded-2xl border border-slate-200 px-5 py-4 font-semibold text-slate-700"
              >
                Cancel
              </button>

              <button
  onClick={() => {

    onConfirm();

    setOpen(false);
  }}
  className={`flex-1 rounded-2xl px-5 py-4 font-semibold text-white ${confirmColor}`}
>
  {confirmText}
</button>

            </div>

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>
  );
};

export default ConfirmModal;