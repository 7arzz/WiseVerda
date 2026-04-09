import { contactData } from "../data/data";
import { motion } from "framer-motion";

const MessageCircleIcon = ({ size = 24, color = "currentColor" }) => (
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
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const MailIcon = ({ size = 24, color = "currentColor" }) => (
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
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MapPinIcon = ({ size = 24, color = "currentColor" }) => (
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
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SendIcon = ({ size = 24, color = "currentColor" }) => (
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
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const Contact = () => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${contactData.whatsapp}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact">
      <div className="container" style={{ maxWidth: "1000px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-card"
          style={{
            background: "var(--bg-dark)",
            borderRadius: "var(--radius-lg)",
            padding: "80px 60px",
            border: "1px solid var(--border-light)",
            boxShadow: "0 40px 100px -20px rgba(2, 42, 66, 0.4)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background decoration */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-10%",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
              zIndex: 0,
              opacity: 0.1,
            }}
          ></div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <span
              style={{
                color: "var(--primary)",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "14px",
                display: "block",
                marginBottom: "16px",
              }}
            >
              {contactData.badge}
            </span>
            <h2 style={{ marginBottom: "20px", color: "white" }}>
              {contactData.title.split("Upgrade")[0]}
              <span className="text-gradient">Upgrade</span> Your Personality?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                marginBottom: "56px",
                fontSize: "20px",
                maxWidth: "600px",
                margin: "0 auto 56px",
              }}
            >
              {contactData.subtitle}
            </p>

            <div
              className="contact-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "40px",
                marginBottom: "64px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    padding: "16px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    color: "var(--primary)",
                  }}
                >
                  <MailIcon size={28} />
                </div>
                <h4 style={{ fontSize: "18px", color: "white" }}>Email Us</h4>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)" }}>
                  {contactData.email}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    padding: "16px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    color: "var(--accent)",
                  }}
                >
                  <MapPinIcon size={28} />
                </div>
                <h4 style={{ fontSize: "18px", color: "white" }}>Location</h4>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)" }}>
                  {contactData.location}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    padding: "16px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    color: "var(--primary)",
                  }}
                >
                  <MessageCircleIcon size={28} />
                </div>
                <h4 style={{ fontSize: "18px", color: "white" }}>Live Chat</h4>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)" }}>
                  {contactData.liveChat}
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              onClick={handleWhatsApp}
              style={{
                padding: "20px 60px",
                fontSize: "18px",
                boxShadow: "0 20px 40px var(--primary-glow)",
              }}
            >
              Start a Conversation <SendIcon size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-card {
            padding: 40px 20px !important;
          }
          .contact-grid {
            gap: 24px !important;
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
