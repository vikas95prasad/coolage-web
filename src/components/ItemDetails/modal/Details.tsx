import PropTypes from "prop-types";

const Details = (props) => {
  const { item } = props;
  const { label, description } = item;

  return (
    <div className="relative flex flex-col flex-grow p-6 pt-12 space-y-3 overflow-y-auto product-details-body">
      <div className="space-y-3 product-details-info text-gray-600">
        <div className="text-2xl font-display">{label}</div>
        <div className="text-sm-body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  item: PropTypes.object,
  label: PropTypes.string,
  description: PropTypes.string,
};

export default Details;
