import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react";

const ImageLightbox = ({ src, alt, isOpen, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const touchDistanceRef = useRef(null);

  // Reset zoom & pan when opening/closing or changing src
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, src]);

  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleZoomIn = (e) => {
    e?.stopPropagation();
    setScale((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = (e) => {
    e?.stopPropagation();
    setScale((prev) => {
      const nextScale = Math.max(prev - 0.5, 1);
      if (nextScale === 1) setPosition({ x: 0, y: 0 });
      return nextScale;
    });
  };

  const handleResetZoom = (e) => {
    e?.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Mouse Wheel Zoom
  const handleWheel = (e) => {
    e.stopPropagation();
    if (e.deltaY < 0) {
      setScale((prev) => Math.min(prev + 0.25, 4));
    } else {
      setScale((prev) => {
        const nextScale = Math.max(prev - 0.25, 1);
        if (nextScale === 1) setPosition({ x: 0, y: 0 });
        return nextScale;
      });
    }
  };

  // Pinch to zoom handlers for mobile/tablet
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchDistanceRef.current = dist;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && touchDistanceRef.current !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const delta = dist - touchDistanceRef.current;
      if (Math.abs(delta) > 5) {
        setScale((prev) => {
          const nextScale = Math.min(Math.max(prev + delta * 0.01, 1), 4);
          if (nextScale === 1) setPosition({ x: 0, y: 0 });
          return nextScale;
        });
        touchDistanceRef.current = dist;
      }
    }
  };

  const handleTouchEnd = () => {
    touchDistanceRef.current = null;
  };

  if (!isOpen || !src) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 select-none touch-none"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Controls Bar */}
        <div 
          className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/80 px-4 py-2 text-white shadow-2xl backdrop-blur-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleZoomOut}
            disabled={scale <= 1}
            title="Zoom Out (-)"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-300 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ZoomOut size={18} />
          </button>
          
          <span className="min-w-[48px] text-center font-mono text-xs font-semibold text-gray-300">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={handleZoomIn}
            disabled={scale >= 4}
            title="Zoom In (+)"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-300 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ZoomIn size={18} />
          </button>

          {scale > 1 && (
            <button
              onClick={handleResetZoom}
              title="Reset Zoom"
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <RotateCcw size={16} />
            </button>
          )}

          <div className="h-5 w-px bg-white/20 my-auto" />

          <button
            onClick={onClose}
            title="Close (ESC)"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF6B00]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Image Display */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative flex items-center justify-center max-w-[95vw] max-h-[90vh] overflow-hidden"
        >
          <motion.img
            src={src}
            alt={alt || "Platform Image"}
            drag={scale > 1}
            dragConstraints={{ left: -400 * scale, right: 400 * scale, top: -400 * scale, bottom: 400 * scale }}
            dragElastic={0.05}
            animate={{ scale, x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10 ${scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default"}`}
            onError={(e) => {
              e.currentTarget.src = "/assets/acis-dashboard.png";
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageLightbox;
