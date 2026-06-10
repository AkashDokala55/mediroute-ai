import { useState } from "react";

import {
  MessageCircleMore,
} from "lucide-react";

import ContactSupportModal from "./ContactSupportModal";

const FloatingSupportButton = () => {

  const [
    open,
    setOpen,
  ] = useState(false);

  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }
        className="fixed bottom-24 right-6 z-[999] flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-white shadow-2xl transition hover:scale-105"
      >
        <MessageCircleMore
          size={20}
        />

        <span className="hidden sm:block">
          Support
        </span>
      </button>

      <ContactSupportModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default FloatingSupportButton;