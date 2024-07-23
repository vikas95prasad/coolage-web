import PropTypes from "prop-types";
import { actionButtonClasses } from "../../classes/ItemClasses";

interface ItemProps {
  id: number;
  label: string;
  description: string;
  price: number;
  sectionAvailable: boolean;
  itemAvailable: boolean;
  onItemClickHandler: (id: object) => void;
}

const Item: React.FC<ItemProps> = (props) => {

  const {
    id,
    label,
    description,
    price,
    itemAvailable,
    sectionAvailable,
    onItemClickHandler,
  } = props;

  const actionLabel = () => {
    return sectionAvailable
      ? itemAvailable
        ? "Add"
        : "Sold Out"
      : "Not Available";
  };

  const imageUrl = "https://mrskueh.com/assets/images/atlas-core-active-storage/96ge6mejk4qmanfhr9u67h9hfshn";

  return (
    <a
      className="flex flex-col shadow-lg overflow-hidden menu-item cursor-pointer"
      onClick={() =>
        onItemClickHandler({ ...props, actionLabel: actionLabel() })
      }
    >
      <div key={id} className="flex-shrink-0">
        <div
          className="relative w-full overflow-hidden undefined"
          style={{ paddingTop: "100%" }}
        >
          <img
            className="absolute top-0 object-cover w-full h-full transition-transform transform hover:scale-110"
            src={imageUrl}
          ></img>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 p-3 sm:p-4.5 bg-card">
        <div>
          <p className="mb-3 text-base font-display text-default line-clamp-2">
            {label}
          </p>
          <p className="mt-1 text-sm-body text-default line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-3 sm:mt-6">
          <div className="flex flex-col items-stretch sm:items-center justify-between justify-items-stretch sm:flex-row">
            <div className="space-x-1 font-bold sm:w-auto text-md text-default w-full mb-3 sm:mb-0">
              ${price.toFixed(2)}
            </div>
            <div className="w-full sm:w-auto">
              <button className={actionButtonClasses(actionLabel)}>
                {actionLabel()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sectionAvailable: PropTypes.bool.isRequired,
  itemAvailable: PropTypes.bool.isRequired,
  onItemClickHandler: PropTypes.func.isRequired,
};

export default Item;
