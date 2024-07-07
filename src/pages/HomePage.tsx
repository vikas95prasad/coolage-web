import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import MenuSection from "../components/MenuSection/Index";
import ItemModal from "../components/ItemDetails/Index";
import MenuSidebar from "../components/MenuSidebar/Index";
import { getMenu } from "../graphql/Menu";

const HomePage: React.FC = () => {
  const { loading, error, data } = useQuery(getMenu());
  const [selectedItem, setSelectedItem] = useState(null);
  const onItemClickHandler = (item) => {
    setSelectedItem(item);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div>
      <div className="fullscreen overflow-y-scroll bg-default flex flex-col cursor-default">
        <div className="flex-grow">
          <div className="h-full">
            <div className="grid max-w-screen-xl grid-cols-1 gap-3 px-3 mx-auto mb-12 sm:gap-6 sm:px-6 lg:grid-flow-col-dense lg:grid-cols-4">
              <section className="relative pt-24 lg:col-start-1 lg:col-span-1 lg:pt-0">
                <MenuSidebar menus={data.menus} />
              </section>
              <div className="pt-6 space-y-6 sm:pt-12 lg:col-start-2 lg:col-span-3">
                <section>
                  <div className="space-y-12">
                    {data.menus.map((menu) => (
                      <MenuSection
                        key={menu.id}
                        label={menu.label}
                        sections={menu.sections}
                        onItemClickHandler={onItemClickHandler}
                      />
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {selectedItem && (
          <ItemModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
