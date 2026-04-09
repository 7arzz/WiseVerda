import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { brandData, navLinks } from "../data/data";

// Inline SVG components
const CartIcon = ({ size = 24, color = "currentColor" }) => (
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
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const MenuIcon = ({ size = 24, color = "currentColor" }) => (
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
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = ({ size = 24, color = "currentColor" }) => (
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
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, toggleCart } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`glass`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? "16px 40px" : "24px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "var(--transition-base)",
        borderBottom: isScrolled ? "1px solid var(--border-light)" : "none",
        backgroundColor: isScrolled ? "rgba(3, 63, 99, 0.95)" : "transparent",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="logo"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          cursor: "pointer",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            overflow: "hidden",
            border: "2px solid var(--primary)",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px var(--primary-glow)",
          }}
        >
          <img
            src={brandData.logo}
            alt={brandData.name}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <h2
          style={{
            fontSize: "24px",
            margin: 0,
            letterSpacing: "-1px",
            color: "var(--text-inverse)",
          }}
        >
          {brandData.name.split("Verda")[0]}
          <span style={{ color: "var(--primary)" }}>Verda</span>
        </h2>
      </motion.div>

      {/* Desktop Menu */}
      <div
        style={{ display: "flex", alignItems: "center", gap: "48px" }}
        className="desktop-menu"
      >
        <div style={{ display: "flex", gap: "32px" }}>
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ color: "var(--primary)", y: -2 }}
              style={{
                fontWeight: 600,
                fontSize: "15px",
                color: "var(--text-inverse)",
                textDecoration: "none",
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <motion.div
          onClick={toggleCart}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "relative",
            cursor: "pointer",
            padding: "10px",
            borderRadius: "12px",
            background: "var(--primary)",
            color: "var(--secondary)",
            boxShadow: "0 0 15px var(--primary-glow)",
          }}
        >
          <CartIcon size={20} />
          {cart.length > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                background: "var(--accent)",
                color: "var(--secondary)",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                fontSize: "11px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              {cart.length}
            </motion.span>
          )}
        </motion.div>
      </div>

      {/* Mobile Menu Toggle */}
      <div style={{ display: "none" }} className="mobile-toggle">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: '10px',
              right: '10px',
              background: 'var(--bg-deep)',
              borderRadius: '24px',
              padding: '24px',
              marginTop: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              border: '1px solid var(--border-light)',
              overflow: 'hidden',
              zIndex: 1001
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.98 }}
                  style={{ 
                    fontWeight: 600, 
                    fontSize: '18px', 
                    color: 'var(--text-inverse)',
                    padding: '16px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.03)',
                    textDecoration: 'none'
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                onClick={() => { toggleCart(); setIsMobileMenuOpen(false); }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  marginTop: '12px',
                  fontWeight: 800, 
                  fontSize: '18px', 
                  color: 'var(--secondary)',
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'var(--primary)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
              >
                <CartIcon size={22} /> View Cart ({cart.length})
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { 
            display: flex !important; 
            align-items: center;
            gap: 15px;
          }
          .mobile-toggle button {
            background: rgba(255,255,255,0.05);
            border: 1px solid var(--border-light);
            color: white;
            padding: 10px;
            border-radius: 12px;
            cursor: pointer;
          }
          nav {
            padding: 16px 20px !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
