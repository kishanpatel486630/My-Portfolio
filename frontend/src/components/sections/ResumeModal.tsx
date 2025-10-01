import { motion } from "framer-motion";
import { useEffect } from "react";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

const ResumeModal = ({ open, onClose }: ResumeModalProps) => {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="green-pink-gradient shadow-card p-[2px] rounded-[20px] w-[700px] h-full max-w-5xl relative flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-tertiary rounded-[18px] w-full h-full p-8 flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white text-2xl font-bold bg-black bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-60 transition"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src="/resume/Kishan_Parvadiya_UI-UX & QA Tester.png"
            alt="Resume"
            className="w-full h-[80vh] object-contain rounded-xl mb-6 shadow-card"
            style={{ maxHeight: "80vh" }}
          />
          <a
            href="/resume/Kishan_Parvadiya_UI-UX & QA Tester.png"
            download
            className="green-pink-gradient shadow-card rounded-[20px] p-[2px] cursor-pointer mt-4"
            style={{ display: "inline-block" }}
          >
            <div className="bg-tertiary flex items-center justify-center rounded-[18px] px-6 py-2">
              <span className="text-white font-bold text-[16px]">
                Download Resume
              </span>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeModal;
