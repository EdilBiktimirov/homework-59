import React from 'react';
import "./Button.css";

interface Props {
  name: string;
  onBtnClick: React.MouseEventHandler;
}

const Button: React.FC<Props> = ({name, onBtnClick}) => {
  return (
    <>
      <button className="Button" onClick={onBtnClick}>{name}</button>
    </>
  );
};

export default Button;