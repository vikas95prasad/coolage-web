import PropTypes from 'prop-types';
import classNames from 'classnames';

const Item = props => {
  const { id, label, description, price, itemAvailable, sectionAvailable ,onItemClickHandler } = props;

  const actionLabel = () => {
    return sectionAvailable ? itemAvailable ? "Add" : "Sold Out" : "Not Available";
  }

  const actionButtonClasses = () => {
    return classNames('items-center justify-center border focus:outline-none rounded-sm border-button-primary text-on-primary bg-red-500 text-white hover:bg-primary-dark px-4 py-2 text-sm sm:min-w-auto sm:w-auto w-full', {
      'opacity-50 cursor-not-allowed': actionLabel() == "Sold Out"
    });
  };

  return (
    <a className='flex flex-col shadow-lg overflow-hidden menu-item cursor-pointer' onClick={() => onItemClickHandler({ ...props, actionLabel: actionLabel() })}>
      <div key={id} className="flex-shrink-0">
        <div className="relative w-full overflow-hidden undefined" style={ { paddingTop: '100%' }}>
          <img className="absolute top-0 object-cover w-full h-full transition-transform transform hover:scale-110" src="https://mrskueh.com/assets/images/atlas-core-active-storage/96ge6mejk4qmanfhr9u67h9hfshn"></img>
        </div>
      </div>
      <div className='flex flex-col justify-between flex-1 p-3 sm:p-4.5 bg-card'>
        <div>
          <p className='mb-3 text-base font-display text-default line-clamp-2'>{label}</p>
          <p className='mt-1 text-sm-body text-default line-clamp-3'>{description}</p>
        </div>
        <div className='mt-3 sm:mt-6'>
          <div className='flex flex-col items-stretch sm:items-center justify-between justify-items-stretch sm:flex-row'>
            <div className='space-x-1 font-bold sm:w-auto text-md text-default w-full mb-3 sm:mb-0'>
              ${price.toFixed(2)}
            </div>
            <div className='w-full sm:w-auto'>
              <button className={actionButtonClasses()}>{actionLabel()}</button>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string
};

export default Item;
