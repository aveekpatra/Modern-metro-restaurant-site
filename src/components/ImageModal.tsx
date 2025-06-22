import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  currentIndex: number;
  images: { src: string; alt: string }[];
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

function ImageModal({
  isOpen,
  currentIndex,
  images,
  onClose,
  onPrevious,
  onNext,
}: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* Close Button */}
          <motion.button
            className="absolute top-6 right-6 z-10 p-2 text-white hover:text-gray-300 transition-colors"
            onClick={onClose}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <X className="w-8 h-8" />
          </motion.button>

          {/* Previous Button */}
          {images.length > 1 && (
            <motion.button
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-3 text-white hover:text-gray-300 transition-colors bg-black/20 rounded-full hover:bg-black/40"
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <motion.button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-3 text-white hover:text-gray-300 transition-colors bg-black/20 rounded-full hover:bg-black/40"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>
          )}

          {/* Image */}
          <motion.div
            className="relative max-w-[90vw] max-h-[90vh] mx-auto"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>

          {/* Image Counter */}
          {images.length > 1 && (
            <motion.div
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/40 text-white px-4 py-2 rounded-full text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {currentIndex + 1} / {images.length}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageModal;
