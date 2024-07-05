import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import MenuSection from '../components/MenuSection';
import ProductModal from '../components/ProductModal';
import Sidebar from '../components/Sidebar';

const GET_MENU = gql`
  query GetMenu {
    menus {
      id
      label
      sections {
        id
        identifier
        label
        description
        items {
          id
          identifier
          label
          description
          price
        }
      }
    }
  }
`;

const MenuPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_MENU);
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="fullscreen overflow-y-scroll bg-default flex flex-col cursor-default">
      <div className="flex-grow">
        <div className='h-full'>
          <div className='grid max-w-screen-xl grid-cols-1 gap-3 px-3 mx-auto mb-12 sm:gap-6 sm:px-6 lg:grid-flow-col-dense lg:grid-cols-4'>
            <section className='relative pt-24 lg:col-start-1 lg:col-span-1 lg:pt-0'>
              <Sidebar />
            </section>
            <div className='pt-6 space-y-6 sm:pt-12 lg:col-start-2 lg:col-span-3'>
              <section>
                <div className='space-y-12'>
                  {data.menus.map((menu) => (
                    <MenuSection
                      key={menu.id}
                      label={menu.label}
                      sections={menu.sections}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default MenuPage;
