import { productsData, productsSection } from "../data/data";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <section id="products">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ marginBottom: '16px' }}>
            {productsSection.title.split('Premium')[0]}
            <span className="text-gradient">Premium</span> 
            {productsSection.title.split('Premium')[1]}
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            {productsSection.subtitle}
          </p>
        </motion.div>

        <div className="grid-responsive">
          {productsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
