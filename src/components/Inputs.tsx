import { InputType } from "@/types";
import React from "react";

const Inputs = ({ label, placeholder, type, id }: InputType) => {
  return (
    <div className="w-1/3">
      <label htmlFor={id} className="style-labels">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        required
        className="style-inputs"
      />
    </div>
  );
};

export default Inputs;
