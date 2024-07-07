import PropTypes from "prop-types";
import ModalContent from "./modal/Container";

const ItemModal = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-wrap product-details-modal-wrapper">
        <div role="dialog" aria-modal="true" className="modal">
          <div className="modal-content">
            <div className="modal-body">
              <div className="product-details-modal">
                <div className="modal-title-body-container">
                  <ModalContent {...props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ItemModal.propTypes = {
  props: PropTypes.object,
};

export default ItemModal;
