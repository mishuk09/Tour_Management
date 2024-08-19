import React from 'react';
import Header from './component/Header';
import MemberCard from './component/MemberCard';
import CostBreakdown from './component/CostBreakdown';
import Body from './component/Body';


const App = () => {
  const members = [
    { name: 'Member 1', image: 'path_to_image1.jpg' },
    { name: 'Member 2', image: 'path_to_image2.jpg' },
    // Add more members here...
    { name: 'Member 12', image: 'path_to_image12.jpg' },
  ];

  const totalCost = 1200; // Example total cost

  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <Body />
    </div>
  );
};

export default App;
