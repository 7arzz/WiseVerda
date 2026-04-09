import React from "react";
import { motion } from "framer-motion";
import { heroData, brandData } from "../data/data";

const SparklesIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

const ArrowRightIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const LeafIcon = ({ size = 24, color = "currentColor", opacity = 1 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ opacity }}
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8.2a7 7 0 0 1-9 9.8Z" />
    <path d="M19 2c-5 5-6 7-7 12" />
  </svg>
);

const Hero = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "100px",
        backgroundColor: "var(--bg-deep)",
        maxWidth: "none",
        margin: 0,
      }}
    >
      {/* Background Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "min(800px, 100vw)",
          height: "min(800px, 100vw)",
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "min(600px, 100vw)",
          height: "min(600px, 100vw)",
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ textAlign: "center", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 15, delay: 0.3 }}
            style={{
              width: "120px",
              height: "120px",
              margin: "0 auto 40px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 10px 40px var(--primary-glow)",
              border: "4px solid var(--primary)",
              background: "white",
              padding: "10px",
            }}
          >
            <img
              src={brandData.logo}
              alt={brandData.name}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </motion.div>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 24px",
              background: "rgba(255, 255, 255, 0.05)",
              color: "var(--primary)",
              borderRadius: "var(--radius-full)",
              fontSize: "14px",
              fontWeight: 700,
              border: "1px solid var(--border-light)",
              marginBottom: "32px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            <SparklesIcon size={16} color="var(--accent)" /> {brandData.slogan}
          </span>

          <h1
            className="hero-title"
            style={{
              marginBottom: "32px",
              color: "var(--text-inverse)",
              fontWeight: 800,
            }}
          >
            {heroData.title.split("Many roles")[0]}
            <span className="text-gradient">Many roles</span>
          </h1>

          <p
            className="hero-subtitle"
            style={{
              fontSize: "22px",
              color: "var(--text-muted)",
              maxWidth: "800px",
              margin: "0 auto 48px",
              lineHeight: 1.7,
            }}
          >
            {heroData.subtitle}
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          ></div>
        </motion.div>

        {/* Floating Mockup / Elements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="showcase-container"
          style={{
            marginTop: "80px",
            width: "100%",
            maxWidth: "1000px",
            minHeight: "600px",
            background: "transparent",
            borderRadius: "var(--radius-lg)",
            position: "relative",
            margin: "80px auto 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                width: "280px",
                height: "500px",
                background: "#000",
                borderRadius: "32px",
                border: "8px solid #1a1a1a",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                position: "relative",
              }}
            >
              <video
                src={heroData.showcaseVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </div>

          {/* Decorative floating cards */}
          <motion.div
            className="floating-card-1"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "20px",
              right: "220px",
              padding: "20px",
              width: "200px",
              background: "white",
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-md)",
              textAlign: "left",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "var(--primary-light)",
                borderRadius: "8px",
                marginBottom: "12px",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "8px",
                background: "var(--bg-sub)",
                borderRadius: "4px",
                marginBottom: "8px",
              }}
            ></div>
            <div
              style={{
                width: "60%",
                height: "8px",
                background: "var(--bg-sub)",
                borderRadius: "4px",
              }}
            ></div>
          </motion.div>

          <motion.div
            className="floating-card-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: "60px",
              left: "220px",
              padding: "24px",
              background: "var(--primary)",
              color: "white",
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <h4 style={{ color: "white", marginBottom: "4px" }}>
              {heroData.stats.score}
            </h4>
            <p style={{ fontSize: "12px", opacity: 0.8 }}>
              {heroData.stats.label}
            </p>
          </motion.div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 80px 0; }
          .hero-title { font-size: 3rem !important; }
          .hero-subtitle { font-size: 18px !important; margin-bottom: 32px !important; }
          .showcase-container { height: 300px !important; margin-top: 40px !important; }
          .floating-card-1 { display: none; }
          .floating-card-2 { left: 20px !important; bottom: 20px !important; scale: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
