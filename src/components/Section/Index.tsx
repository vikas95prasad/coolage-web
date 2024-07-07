import PropTypes from "prop-types";
import Item from "../Item/Index";
import classNames from "classnames";

const Section = (props) => {
  const { items, sectionAvailable, onItemClickHandler } = props;

  const itemsClasses = () => {
    return classNames(
      "grid grid-cols-2 mt-4.5 gap-x-3 sm:gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3",
      {
        "opacity-50": !sectionAvailable,
      }
    );
  };

  return (
    <div>
      {!sectionAvailable && (
        <div className="text-danger mb-4.5">
          Only available from Fri, Sat, and Sun.
        </div>
      )}
      <div className={itemsClasses()}>
        {items.map((item) => (
          <Item
            id={item.id}
            label={item.label}
            description={item.description}
            price={item.price}
            sectionAvailable={sectionAvailable}
            itemAvailable={item.availability}
            onItemClickHandler={onItemClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

Section.propTypes = {
  items: PropTypes.array,
  sectionAvailable: PropTypes.func,
  onItemClickHandler: PropTypes.func,
};

export default Section;
