import { aboutData } from "../data/data";
import { motion } from "framer-motion";

const ShieldIcon = ({ size = 24, color = "currentColor" }) => (
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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ZapIcon = ({ size = 24, color = "currentColor" }) => (
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
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const GlobeIcon = ({ size = 24, color = "currentColor", opacity = 1 }) => (
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
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const CheckIcon = ({ size = 24, color = "currentColor" }) => (
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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const LightbulbIcon = ({ size = 24, color = "currentColor" }) => (
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
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const UsersIcon = ({ size = 24, color = "currentColor" }) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const EyeIcon = ({ size = 24, color = "currentColor" }) => (
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
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const About = () => {
  const iconMap = {
    Integrity: <ShieldIcon size={24} />,
    Productivity: <ZapIcon size={24} />,
    Responsibility: <CheckIcon size={24} />,
    Innovation: <LightbulbIcon size={24} />,
    Collaboration: <UsersIcon size={24} />,
    Awareness: <EyeIcon size={24} />,
  };

  return (
    <section id="about" style={{ background: "var(--bg-sub)" }}>
      <div className="container">
        <div
          className="grid-responsive"
          style={{ alignItems: "center", gap: "80px" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ marginBottom: "24px" }}>{aboutData.title}</h2>
            <p
              style={{
                fontSize: "18px",
                color: "var(--text-muted)",
                marginBottom: "32px",
                lineHeight: 1.8,
              }}
            >
              {aboutData.description}
            </p>

            <div
              className="about-features-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "24px",
                marginTop: "40px",
              }}
            >
              {aboutData.features.map((f, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <div
                    style={{
                      padding: "10px",
                      background: "var(--primary-soft)",
                      color: "var(--primary)",
                      borderRadius: "12px",
                    }}
                  >
                    {iconMap[f.title] || <ZapIcon size={24} />}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "16px", marginBottom: "2px" }}>
                      {f.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                background: "var(--primary)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom right, var(--primary), var(--accent))",
                  mixBlendMode: "overlay",
                  opacity: 0.5,
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <GlobeIcon size={180} color="white" opacity={0.1} />
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                position: "absolute",
                bottom: "40px",
                right: "-20px",
                background: "white",
                padding: "24px",
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border-light)",
              }}
            >
              <h3
                style={{
                  fontSize: "32px",
                  color: "var(--primary)",
                  marginBottom: "4px",
                }}
              >
                {aboutData.mainStat.value}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>
                {aboutData.mainStat.label}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .about-features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
