import React from "react";
import PropTypes from "prop-types";
import Section from "../Section/Index";

interface MenuSectionProps {
  label: string;
  sections: {
    id: number;
    label: string;
    availability: boolean;
    items: {
      id: number;
      label: string;
      description: string;
      price: number;
      availability: boolean;
    }[];
  }[];
  onItemClickHandler: (id: object) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ label, sections, onItemClickHandler }) => {
  return (
    <div className="relative">
      <h1 className="mb-4.5 font-display text-2xl opacity-100">{label}</h1>
      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          label={section.label}
          sectionAvailable={section.availability}
          items={section.items}
          onItemClickHandler={onItemClickHandler}
        />
      ))}
    </div>
  );
};

MenuSection.propTypes = {
  label: PropTypes.string.isRequired,
  sections: PropTypes.array.isRequired,
  onItemClickHandler: PropTypes.func.isRequired,
};

export default MenuSection;

