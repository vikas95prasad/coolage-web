import React from 'react';

const MenuSection: React.FC<{ label: string; sections: any[] }> = ({ label, sections }) => {
  return (
    <div className="relative">
      <div>
        <h2 className="mb-4.5 font-display text-2xl opacity-100">{"Platters"}</h2>
        <div className="grid grid-cols-2 mt-4.5 gap-x-3 sm:gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 opacity-100">
          {items.map((item) => (
            <a className='flex flex-col shadow-lg overflow-hidden menu-item cursor-pointer'>
              <div key={item.id} className="flex-shrink-0">
                <div className="relative w-full overflow-hidden undefined" style={ { paddingTop: '100%' }}>
                  <img className="absolute top-0 object-cover w-full h-full transition-transform transform hover:scale-110" src="https://mrskueh.com/assets/images/atlas-core-active-storage/96ge6mejk4qmanfhr9u67h9hfshn"></img>
                  {/* <img src={item.image} alt={item.name} className="w-full h-40 object-cover" /> */}
                </div>
                <div className='flex flex-col justify-between flex-1 p-3 sm:p-4.5 bg-card'>
                  <div>
                    <p className='mb-3 text-base font-display text-default line-clamp-2'>{item.name}</p>
                    <p className='mt-1 text-sm-body text-default line-clamp-3'>{item.description}</p>
                  </div>
                  <div className='mt-3 sm:mt-6'>
                    <div className='flex flex-col items-stretch sm:items-center justify-between justify-items-stretch sm:flex-row'>
                      <div className='space-x-1 font-bold sm:w-auto text-md text-default w-full mb-3 sm:mb-0'>
                        ${item.price}
                      </div>
                      <div className='w-full sm:w-auto'>
                        <button className="inline-flex items-center justify-center font-semibold break-keep shadow-sm border focus:outline-none rounded-sm border-button-primary text-on-primary bg-red-500 text-white hover:bg-primary-dark px-4 py-2 text-sm sm:min-w-auto sm:w-auto w-full">Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
