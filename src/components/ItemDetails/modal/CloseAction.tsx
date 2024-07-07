import PropTypes from "prop-types";

const CloseAction = ({ onClose }) => {
  return (
    <div className="absolute top-0 right-0 z-10 pt-4 pr-4" onClick={onClose}>
      <button type="button" className="p-1">
        <span className="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
};

CloseAction.propTypes = {
  onClose: PropTypes.func,
};

export default CloseAction;
