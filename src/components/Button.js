import React from 'react';
import UIfx from 'uifx';
import clickSound from '../assets/sounds/button_01.mp3';
const sound = new UIfx(clickSound);

export const Button = ({children}) => {

  return (
    <div onClick={(event) => {
      sound.play();
    }}>
      {children}
    </div>
  );
};