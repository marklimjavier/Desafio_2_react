import React from 'react';

const Alert = ({ color, msg }) => {
  return (
    <div className={color}>
      {msg}
    </div>
  );
}

export default Alert;