import React from 'react';
import { motion } from 'framer-motion';

const ItemModal = props => {
  const { item, onClose } = props;

  const actionLabelWithPrice = () => {
    return item.actionLabel == "Add" ? `Add ($${item.price.toFixed(2)})` : item.actionLabel
  }

  return (
    <div className='ant-modal-root css-7ydriu'>
      <div className='ant-modal-mask'>
        <div className='ant-modal-wrap product-details-modal-wrapper ant-modal-centered'>
          <div role="dialog" aria-modal="true" style={ { width: "auto" }} className='ant-modal css-7ydriu sm:max-w-2xl sm:w-full'>
            <div className='ant-modal-content'>
              <div className='ant-modal-body'>
                <div className='inline-block align-bottom bg-default text-left overflow-hidden shadow-xl w-full transform transition-all sm:align-middle flex flex-col px-4 pt-5 pb-4 sm:p-6 flex-grow product-details-modal'>
                  <div className='flex flex-grow sm:items-start'>
                    <div className='modal-title-body-container sm:w-full text-center sm:text-left flex-grow flex flex-col'>
                        <div className='text-sm text-default flex-1 flex-grow'>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col flex-grow text-sm text-left product-details-wrapper font-body lg:h-auto"
                          >
                            <div className="absolute top-0 right-0 z-10 pt-4 pr-4" onClick={onClose}>
                              <button type="button" className="p-1 rounded-full bg-default text-default2 hover:text-default focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                <span className="sr-only">Close</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                              </button>
                            </div>
                            <div className='flex flex-col flex-grow overflow-y-auto product-details-modal-content lg:flex-row'>
                              <div className='relative lg:overflow-hidden product-details-image'>
                                <img src="https://mrskueh.com/assets/images/atlas-core-active-storage/96ge6mejk4qmanfhr9u67h9hfshn" className="object-cover h-64 lg:h-full" />
                              </div>
                              <div className='ant-spin-nested-loading css-7ydriu'>
                                <div className='ant-spin-container'>
                                  <div className='flex flex-col product-details-panel'>
                                    <div className="relative flex flex-col flex-grow p-6 pt-12 space-y-3 overflow-y-auto product-details-body">
                                      <div className="space-y-3 product-details-info text-gray-600">
                                        <div className="text-2xl font-display">{item.label}</div>
                                        <div className='text-sm-body'><p>{item.description}</p></div>
                                      </div>
                                    </div>
                                    <div className='p-4 space-y-4 product-details-footer bg-default2 lg:block'>
                                      <div className='flex space-x-3'>
                                        <button type="button" className="inline-flex items-center justify-center font-semibold break-keep shadow-sm border focus:outline-none rounded-sm border-button-primary text-on-primary bg-primary hover:bg-primary-dark px-4 py-2 text-sm w-full" data-testid="button" id="add-to-cart-13">{actionLabelWithPrice()}</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
