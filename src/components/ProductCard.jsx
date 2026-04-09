import { useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../context/CartContext";

const PlusIcon = ({ size = 24, color = "currentColor" }) => (
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
    <path d="M12 5v14" />
  </svg>
);

const ShoppingBagIcon = ({
  size = 24,
  color = "currentColor",
  opacity = 1,
}) => (
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
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "1.2/1",
          borderRadius: "var(--radius-md)",
          background: "var(--bg-sub)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          border: "1px solid var(--border-dark)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(45deg, var(--secondary), var(--primary))",
            opacity: 0.1,
          }}
        ></div>
        <ShoppingBagIcon size={60} color="var(--secondary)" opacity={0.1} />

        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              transition: "var(--transition-base)",
            }}
            className="product-image"
            onError={(e) => (e.target.style.display = "none")}
          />
        )}
      </div>

      <div style={{ flexGrow: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            marginBottom: "8px",
          }}
        >
          <h3 style={{ fontSize: "20px", margin: 0 }}>{product.name}</h3>
          {product.isNew && (
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                background: "var(--primary-soft)",
                color: "var(--primary)",
                padding: "4px 10px",
                borderRadius: "99px",
                textTransform: "uppercase",
              }}
            >
              New
            </span>
          )}
        </div>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "15px",
            marginBottom: "20px",
          }}
        >
          {product.description}
        </p>
        <p
          style={{
            fontSize: "24px",
            fontWeight: 800,
            color: "var(--secondary)",
          }}
        >
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          }).format(product.price)}
        </p>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        className="btn btn-primary"
        onClick={() => addToCart(product)}
        style={{ width: "100%", padding: "14px" }}
      >
        <PlusIcon size={18} /> Add to Cart
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;
