import React, {useState} from 'react';
import styled from 'styled-components';
import cx from 'classnames';

const InputStyled = styled.input`
  height: 30px;
  width: 70px;
  padding: 0;
  margin: 0;
  text-align: center;
  background-color: beige;
  outline: none;
  @media (max-width: 600px) {
        height: 25px;
        width: 40px;
        
    }
`;

export const Input = ({answer}) => {
  const [valid, setValid] = useState(false);
  const [unValid, setUnvalid] = useState(false);

  const classNames = cx('input', {'valid': valid}, {'unvalid': unValid});

  const handlerKeyUp = e => {
    if (e.target.value === answer) {
      setValid(true);
      setUnvalid(false);
    } else {
      setValid(false);
      setUnvalid(true);
    }
  };

  return (
    <InputStyled valid={valid} unvalid={unValid} className={classNames} onKeyUp={handlerKeyUp}/>
  );
};