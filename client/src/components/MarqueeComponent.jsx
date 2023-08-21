import React from 'react';

const MarqueeComponent = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex items-center p-4">
      <div className="w-1/2">
        <img src={data.imageUrl} alt="Profile Image" className="w-full h-auto" style={{ height: '100%' }} />
      </div>
      <div className="w-1/2 ml-4">
        <h1 className="text-lg font-bold text-gray-800 mb-2">{data.title}</h1>
        <p className="text-gray-600 mb-2">By {data.creator}</p>
        <div className="mt-1">
          <span className="px-3 py-1 text-xs font-medium bg-gray-600 text-white rounded-full">
            {data.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
