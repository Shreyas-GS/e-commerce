import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-x border">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
        />
      </div>
      <div className="p-4">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 ">{product.brand}</h3>
        </div>

        <p className="mt-2 text-sm text-gray-500 items-left">{product.title}</p>
      </div>
    </div>
  );
}

export default HomeSectionCard