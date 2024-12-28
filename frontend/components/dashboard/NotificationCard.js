import React from 'react';

const NotificationCard = ({ type, message }) => {
  const typeClasses = {
    info: 'bg-blue-100 text-blue-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };

  return (
    <div
      className={`p-4 rounded-lg shadow ${typeClasses[type]} border border-gray-200`}
    >
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default NotificationCard;
