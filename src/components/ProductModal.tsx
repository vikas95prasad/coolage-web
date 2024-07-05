import React from 'react';
import { motion } from 'framer-motion';

const ProductModal: React.FC<{ product: any; onClose: () => void }> = ({ product, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price}</span>
          <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">Close</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductModal;
