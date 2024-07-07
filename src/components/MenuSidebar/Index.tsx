import PropTypes from "prop-types";
import {
  menuLabelClasses,
  menuTitleClasses,
} from "../../classes/MenuSidebarClasses";

const MenuSidebar = (props) => {
  const { menus } = props;

  return (
    <div className="fixed">
      <div className="flex flex-col flex-grow bg-default lg:bg-transparent transition-all lg:overflow-y-auto pt-6 sm:pt-12 pb-4">
        <div className="flex flex-col flex-grow">
          <nav className="relative flex-1">
            <div className={menuTitleClasses()}>Our Menu</div>
            <div className="no-scrollbar sm:ml-0 -ml-3 sm:mr-0 -mr-3">
              <div className="flex justify-center min-w-max lg:min-w-0 lg:block">
                {menus.map((menu) => (
                  <div className="relative justify-center flex-none p-2 lg:p-0 lg:w-full align-center">
                    <a className={menuLabelClasses()}>{menu.label}</a>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

MenuSidebar.propTypes = {
  menus: PropTypes.array,
};

export default MenuSidebar;
