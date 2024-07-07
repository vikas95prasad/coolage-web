import classNames from "classnames";

export const actionButtonClasses = (actionLabel) => {
  return classNames(
    `items-center justify-center border focus:outline-none rounded-sm 
     border-button-primary text-on-primary bg-red-500 text-white 
     hover:bg-primary-dark px-4 py-2 text-sm sm:min-w-auto sm:w-auto w-full`,
    {
      "opacity-50 cursor-not-allowed": actionLabel() == "Sold Out",
    }
  );
};

export const menuLabelClasses = () => {
  return `border-b-2 lg:border-b-0 border-primary text-default font-bold 
          hover:text-default group w-full lg:border-l-2 lg:flex items-center
          text-center lg:text-left p-2 text-sm font-medium focus:color-primary`;
};
