import React from 'react';

interface StitchIconProps {
  name: string;
  className?: string;
  size?: number | string;
}

export const StitchIcon: React.FC<StitchIconProps> = ({ name, className = '', size }) => {
  const sizeStyle = size ? { fontSize: typeof size === 'number' ? `${size}px` : size } : undefined;

  return (
    <span 
      className={`material-symbols-outlined select-none align-middle inline-block ${className}`}
      style={sizeStyle}
      aria-hidden="true"
    >
      {name}
    </span>
  );
};
