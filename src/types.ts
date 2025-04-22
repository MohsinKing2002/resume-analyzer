import React from "react";

export type InputType = {
  label: string;
  placeholder: string;
  id: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export type ButtonType = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};
