import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { contactData } from "../data/data";

const CloseIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
);

const TrashIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

const ShoppingBagIcon = ({ size = 24, color = "currentColor", opacity = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity }}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const ArrowRightIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const SendIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
  </svg>
);

const Cart = () => {
  const { cart, removeFromCart, totalPrice, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const message = cart
      .map((item) => `- ${item.name} (Rp ${item.price.toLocaleString('id-ID')})`)
      .join("%0A");

    const url = `https://wa.me/${contactData.whatsapp}?text=Halo%20WiseVerda,%20saya%20ingin%20order:%0A${message}%0A%0ATotal:%20Rp%20${totalPrice.toLocaleString('id-ID')}`;

    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(2, 42, 66, 0.8)',
              backdropFilter: 'blur(8px)',
              zIndex: 1100,
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '450px',
              background: 'var(--bg-deep)',
              boxShadow: '-20px 0 60px rgba(0,0,0,0.3)',
              zIndex: 1200,
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              color: 'white',
              borderLeft: '1px solid var(--border-light)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '28px', margin: 0, color: 'white' }}>System <span style={{ color: 'var(--primary)' }}>Cart</span></h2>
              <motion.button 
                whileHover={{ rotate: 90 }}
                onClick={() => setIsCartOpen(false)}
                style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <CloseIcon size={32} />
              </motion.button>
            </div>

            <div style={{ flexGrow: 1, overflowY: 'auto', marginBottom: '40px' }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '60px', opacity: 0.5 }}>
                  <p>Your system is currently empty.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {cart.map((item, index) => (
                    <motion.div 
                      layout
                      key={`${item.id}-${index}`}
                      style={{ 
                        display: 'flex', 
                        gap: '20px', 
                        alignItems: 'center',
                        background: 'rgba(255,255,255,0.03)',
                        padding: '16px',
                        borderRadius: '16px',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      <div style={{ width: '80px', height: '80px', background: 'var(--bg-dark)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ShoppingBagIcon size={30} color="var(--primary)" opacity={0.3} />
                      </div>
                      <div style={{ flexGrow: 1 }}>
                        <h4 style={{ margin: '0 0 4px', fontSize: '16px', color: 'white' }}>{item.name}</h4>
                        <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 700 }}>
                          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.price)}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(index)}
                        style={{ color: '#ff4b4b', opacity: 0.6, background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        <TrashIcon size={20} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                  <span style={{ fontSize: '18px', color: 'var(--text-muted)' }}>Total Investment</span>
                  <span style={{ fontSize: '28px', fontWeight: 800, color: 'var(--accent)' }}>
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(totalPrice)}
                  </span>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '20px', fontSize: '18px', boxShadow: '0 20px 40px var(--primary-glow)', border: 'none', cursor: 'pointer' }}
                >
                  Confirm Ecosystem <SendIcon size={20} />
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
