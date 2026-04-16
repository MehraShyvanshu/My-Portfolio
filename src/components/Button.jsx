// styles is a prop
import React from "react";
const Button = ({ styles, text, icon }) => {
  const classNames = `py-3 px-6 bg-[#db5a51] font-outfit font-bold text-[13px] text-white outline-none ${styles ?? ''} rounded-xl shadow-lg shadow-[#db5a51]/20 hover:scale-[1.05] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2`

  return (
    <button
      type="button"
      className={classNames}
    >
      {icon && React.createElement(icon, { size: 16 })}
      {text}
    </button>
  )
};

export default Button;
