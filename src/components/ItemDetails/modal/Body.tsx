import PropTypes from "prop-types";
import Details from "./Details";
import Image from "./Image";
import ModalActionButtons from "./Footer";

const Body = (props) => {
  return (
    <div className="flex flex-col flex-grow overflow-y-auto product-details-modal-content lg:flex-row">
      <Image />
      <div className="spin-container">
        <div className="flex flex-col product-details-panel">
          <Details {...props} />
          <ModalActionButtons {...props} />
        </div>
      </div>
    </div>
  );
};

Body.propTypes = {
  props: PropTypes.object,
};

export default Body;
