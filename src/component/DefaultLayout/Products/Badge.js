import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="elative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90 mr-4">
      {text}
    </div>
  );
};

export default Badge;
