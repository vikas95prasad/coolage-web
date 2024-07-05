import React from 'react';

type ProductCardProps = {
  product: {
    id: string;
    label: string;
    description: string;
    price: number;
  };
  onClick: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <h2>{product.label}</h2>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
