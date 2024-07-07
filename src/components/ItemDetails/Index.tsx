import ModalContent from "./modal/Container";

interface ItemModalProps {
  item: {
    id: number;
    label: string;
    description: string;
    price: number;
    availability: boolean;
  };
  onClose: () => void;
}

const ItemModal: React.FC<ItemModalProps> = (props) => {
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

export default ItemModal;
