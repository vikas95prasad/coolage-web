import PropTypes from "prop-types";
import Section from "../Section/Index";

const MenuSection = (props) => {
  const { label, sections, onItemClickHandler } = props;

  return (
    <div className="relative">
      <h1 className="mb-4.5 font-display text-2xl opacity-100">{label}</h1>
      {sections.map((section) => (
        <Section
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
  label: PropTypes.string,
  sections: PropTypes.array,
  onItemClickHandler: PropTypes.func,
};

export default MenuSection;
