import React from 'react';

const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randonColor = colors[Math.floor(Math.random() * 5)];

  const className = randonColor + '-text';
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow; 