import React from 'react';
import { motion } from 'framer-motion';

type ProductDetailsModalProps = {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
  };
  onClose: () => void;
};

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ product, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="modal"
    >
      <div className="modal-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </motion.div>
  );
};

export default ProductDetailsModal;
