import React from 'react';

function Button({ label, onClick, type = "button" }) {
  return (
    <button type={type} className="btn" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;