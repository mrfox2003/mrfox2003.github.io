import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten Tag", "नमस्ते"];

const opacity = {
  initial: {
    opacity: 0,
    y: 15,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    
    // Lock scroll while preloader is active
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        const completeTimer = setTimeout(() => {
          onComplete?.();
        }, 1000);
        return () => clearTimeout(completeTimer);
      }, 1000);
      return () => clearTimeout(timer);
    }

    const nextTimer = setTimeout(
      () => {
        setIndex((prev) => prev + 1);
      },
      index === 0 ? 1000 : 150
    );
    return () => clearTimeout(nextTimer);
  }, [index, onComplete]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate={isExiting ? "exit" : "initial"}
      className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-[#F8F9FB] overflow-hidden"
      style={{ zIndex: 99999999999 }}
    >
      {/* Subtle Developer Grid Overlay to create texture for glassmorphic refraction */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* Saturated Background Liquid Blobs passing behind the glass card */}
      <div className="absolute top-[25%] left-[20%] w-[320px] h-[320px] rounded-full bg-brand-violet/25 blur-[90px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[25%] right-[20%] w-[380px] h-[380px] rounded-full bg-brand-green/20 blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: "1.2s" }} />

      {dimension.width > 0 && (
        <>
          {/* Glassmorphic Greeting Capsule (Highly Visible White Liquid Glass Style) */}
          <motion.div
            variants={opacity}
            initial="initial"
            animate="enter"
            className="flex items-center gap-5 px-12 py-6 rounded-brand-card bg-white/30 backdrop-blur-[40px] border border-white/60 shadow-[0_24px_80px_rgba(0,0,0,0.08)] z-10"
          >
            {/* Glowing Green Pulse Dot */}
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DCD58] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#3DCD58] shadow-[0_0_12px_rgba(61,205,88,0.85)]"></span>
            </span>

            {/* Greeting Word */}
            <span className="text-[#001221] text-3xl md:text-5xl font-sans font-extrabold tracking-tight select-none">
              {words[index]}
            </span>
          </motion.div>

          {/* Curtain transition curve */}
          <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none z-0">
            <motion.path 
              variants={curve} 
              initial="initial" 
              animate={isExiting ? "exit" : "initial"} 
              fill="#F8F9FB" 
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
