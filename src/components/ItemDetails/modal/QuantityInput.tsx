import { useState } from "react";
import PropTypes from "prop-types";

const QuantityInput = ({ initialQuantity = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="flex items-center space-x-2 border-2 border-gray-600 bg-white">
      <button
        className="px-3 py-1 text-lg font-semibold text-blackrounded"
        onClick={handleDecrement}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="px-4 py-1 text-lg font-semiboldrounded">{quantity}</span>
      <button
        className="px-3 py-1 text-lg font-semibold text-blackrounded"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

QuantityInput.propTypes = {
  initialQuantity: PropTypes.array,
  onQuantityChange: PropTypes.func,
};

export default QuantityInput;
