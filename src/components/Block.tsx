import React from 'react';

interface BlockProps {
  children: React.ReactNode;
  color: string;
}

const Block: React.FC<BlockProps> = ({ children, color }) => {
  return (
    <section 
      className={`h-screen w-full flex flex-col snap-start ${
        color === 'gray' ? 'bg-gray-800' : 
        color === 'purple' ? 'bg-purple-700' : 
        `bg-${color}-500`
      }`}
    >
      {children}
    </section>
  );
};

export default Block;