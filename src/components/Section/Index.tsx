import React from "react";
import PropTypes from "prop-types";
import Item from "../Item/Index";
import classNames from "classnames";

interface SectionProps {
  id: number;
  label: string;
  items: {
    id: number;
    label: string;
    description: string;
    price: number;
    availability: boolean;
  }[];
  sectionAvailable: boolean;
  onItemClickHandler: (id: object) => void;
}

const Section: React.FC<SectionProps> = ({ items, sectionAvailable, onItemClickHandler }) => {
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
            key={item.id}
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
  items: PropTypes.array.isRequired,
  sectionAvailable: PropTypes.bool.isRequired,
  onItemClickHandler: PropTypes.func.isRequired,
};

export default Section;
