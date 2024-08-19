import React from 'react';

const CostBreakdown = ({ totalCost, members }) => {
  const perPersonCost = totalCost / members.length;

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold">Cost Breakdown</h2>
      <p>Total Cost: ${totalCost}</p>
      <p>Cost per Person: ${perPersonCost.toFixed(2)}</p>
    </div>
  );
};

export default CostBreakdown;
