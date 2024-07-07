import { useState } from "react";
import PropTypes from "prop-types";
import QuantityInput from "./QuantityInput";
import { addButtonClasses } from '../../../classes/ModalFooterClasses'

const Footer = (props) => {
  const { item } = props;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const actionLabelWithPrice = () => {
    return item.actionLabel == "Add"
      ? `Add ($${(quantity * item.price).toFixed(2)})`
      : item.actionLabel;
  };

  return (
    <div className="p-4 product-details-footer bg-default2">
      <div className="flex space-x-3">
        {item.itemAvailable && (
          <QuantityInput
            initialQuantity={quantity}
            onQuantityChange={handleQuantityChange}
          />
        )}
        <button
          type="button"
          className={addButtonClasses()}
        >
          {actionLabelWithPrice()}
        </button>
      </div>
    </div>
  );
};

Footer.propTypes = {
  props: PropTypes.func,
};

export default Footer;
