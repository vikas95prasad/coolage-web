import React from 'react';

const Sidebar: React.FC = () => {
  const menuOptions = ["Platters", "Kuehs & Cakes", "Mrs Kueh Treats", "Batu Lesung Spice Company / Gift boxes & bundles", "Batu Lesung Spice Company"]
  return (
    <div>
      <div className='hidden lg:block'>
        <div className="flex flex-col flex-grow bg-default lg:bg-transparent transition-all lg:overflow-y-auto pt-6 sm:pt-12 pb-4">
          <div className='flex flex-col flex-grow'>
            <nav className='relative flex-1'>
              <div className='lg:mb-5 transition-all ease-out text-3xl font-display text-center lg:text-left opacity-100'>Our Menu</div>
              <div className='no-scrollbar sm:ml-0 -ml-3 sm:mr-0 -mr-3'>
                <div className='flex justify-center min-w-max lg:min-w-0 lg:block'>
                {menuOptions.map((option) => (
                  <div className='relative justify-center flex-none p-2 lg:p-0 lg:w-full align-center'>
                    <a className='border-b-2 lg:border-b-0 border-primary text-default font-bold hover:text-default group w-full lg:border-l-2 lg:flex items-center text-center lg:text-left p-2 text-sm font-medium focus:color-primary'>{option}</a>
                  </div>))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
