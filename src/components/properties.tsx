import Image from 'next/image';
import { FC, useState } from 'react';
import { isEmpty } from '@/lib/utils/isEmpty';

type PropertiesProps = {
  properties: any[];
};

const MAX_PROPERTIES_TO_SHOW = 3;
const FILTER_CATEGORIES = ['Apartment', 'House', 'Penthouse', 'Villa'];

export const Properties: FC<PropertiesProps> = ({ properties }) => {
  const [numPropertiesToShow, setNumPropertiesToShow] = useState<number>(
    MAX_PROPERTIES_TO_SHOW
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleLoadMore = () => {
    if (numPropertiesToShow >= properties.length) return;

    setNumPropertiesToShow(numPropertiesToShow + MAX_PROPERTIES_TO_SHOW);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    setNumPropertiesToShow(MAX_PROPERTIES_TO_SHOW);
  };

  const filteredProperties = selectedCategory
    ? properties.filter(property => property?.category === selectedCategory)
    : properties;

  return (
    <section className="min-h-[800px] relative">
      <div className="w-full h-full px-9 lg:px-[165px] pt-36">
        <h2 className="text-5xl text-[#1E3240] font-bold">Properties</h2>
        <p className="mt-3 text-[#BDBDBD]">
          Turpis facilisis tempor pulvinar in lobortis ornare magna.
        </p>
        {!isEmpty(properties) && (
          <>
            <div className="flex justify-end mb-4">
              <select
                className="mt-20"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">All</option>
                {FILTER_CATEGORIES.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[30px] gap-y-12">
              {filteredProperties
                ?.slice(0, numPropertiesToShow)
                ?.map(property => {
                  return (
                    <article key={property?.id} className="relative h-[350px] ">
                      <Image
                        src={property?.image?.url}
                        alt={property?.title}
                        className="object-cover"
                        fill
                      />
                      <div className="absolute w-4/5 h-20 bottom-0 left-1/2 bg-white shadow-md -translate-x-1/2 translate-y-1/3 flex flex-col justify-center px-5 text-[#1E3240]">
                        <h3 className="text-sm font-bold">{property?.title}</h3>
                        <p className="text-[10px] mt-1">{property?.address}</p>
                      </div>
                    </article>
                  );
                })}
            </div>
            {filteredProperties.length > numPropertiesToShow && (
              <div className="w-full text-center mt-16">
                <button
                  onClick={handleLoadMore}
                  className="bg-[#1E3240] text-white px-6 py-[18px]"
                >
                  Load more
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
