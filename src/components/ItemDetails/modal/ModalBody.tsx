import PropTypes from "prop-types";
import ModalActionButtons from "./ModalFooter";

const ModalBody = (props) => {
  const { item } = props;

  return (
    <div className="flex flex-col flex-grow overflow-y-auto product-details-modal-content lg:flex-row">
        <div className="relative lg:overflow-hidden product-details-image">
          <img
            src="https://mrskueh.com/assets/images/atlas-core-active-storage/96ge6mejk4qmanfhr9u67h9hfshn"
            className="object-cover h-64 lg:h-full"
          />
        </div>
        <div className="spin-container">
          <div className="flex flex-col product-details-panel">
            <div className="relative flex flex-col flex-grow p-6 pt-12 space-y-3 overflow-y-auto product-details-body">
              <div className="space-y-3 product-details-info text-gray-600">
                <div className="text-2xl font-display">{item.label}</div>
                <div className="text-sm-body">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            <ModalActionButtons {...props} />
          </div>
        </div>
      </div>
  );
};

ModalBody.propTypes = {
  item: PropTypes.object,
};

export default ModalBody;
