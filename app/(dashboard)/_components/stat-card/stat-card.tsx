import React from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  color: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({  value, color, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <div className={`text-2xl font-bold text-${color}-500`}>{value}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </div>
  );
};

export default StatCard;
