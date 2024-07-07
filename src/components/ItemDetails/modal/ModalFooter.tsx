import { useState } from "react";
import PropTypes from "prop-types";
import QuantityInput from "./QuantityInput";

const ModalFooter = (props) => {
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
    <div className="p-4 space-y-4 product-details-footer bg-default2 lg:block">
      <div className="flex space-x-3">
        {item.itemAvailable && (
          <QuantityInput
            initialQuantity={quantity}
            onQuantityChange={handleQuantityChange}
          />
        )}
        <button
          type="button"
          className="inline-flex items-center justify-center font-semibold break-keep shadow-sm border focus:outline-none rounded-sm border-button-primary text-on-primary bg-primary hover:bg-primary-dark px-4 py-2 text-sm w-full"
          data-testid="button"
          id="add-to-cart-13"
        >
          {actionLabelWithPrice()}
        </button>
      </div>
    </div>
  );
};

ModalFooter.propTypes = {
  props: PropTypes.func,
};

export default ModalFooter;
