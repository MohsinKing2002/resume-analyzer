import { InputType } from "@/types";
import React from "react";

const Textarea = ({ label, id, placeholder }: InputType) => {
  return (
    <div className="w-1/3">
      <label htmlFor={"message"} className="style-labels">
        {label}
      </label>
      <textarea
        id={id}
        className="style-inputs"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default Textarea;
