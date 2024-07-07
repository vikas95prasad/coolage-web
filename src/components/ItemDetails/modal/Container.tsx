import PropTypes from "prop-types";
import { motion } from "framer-motion";

import CloseModal from "./CloseAction";
import ModalContent from "./ModalBody";

const Container = (props) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col flex-grow text-sm text-left product-details-wrapper"
    >
      <CloseModal onClose={props.onClose} />
      <ModalContent {...props} />
    </motion.div>
  );
};

Container.propTypes = {
  props: PropTypes.func,
  onClose: PropTypes.func,
};

export default Container;
