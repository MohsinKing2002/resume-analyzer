import { InputType } from "@/types";
import React from "react";

const Inputs = ({
  label,
  placeholder,
  type,
  id,
  name,
  value,
  onChange,
}: InputType) => {
  return (
    <div className="w-1/3">
      <label htmlFor={id} className="style-labels">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        required
        className="style-inputs"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Inputs;
