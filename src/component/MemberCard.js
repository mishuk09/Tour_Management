import React from 'react';

const MemberCard = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg">
      <img src={image} alt={name} className="h-24 w-24 rounded-full mb-2" />
      <h3 className="text-lg font-bold">{name}</h3>
    </div>
  );
};

export default MemberCard;
