import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import cx from 'classnames';

const InputStyled = styled.input`
  height: 30px;
  width: 70px;
  padding: 0;
  margin: 0;
  text-align: center;
  outline: none;
  @media (max-width: 600px) {
        height: 25px;
        width: 40px;
        
    }
`;

export const Input = ({answer, className, onKeyUp, valid, id}) => {
  const [validate, setValid] = useState(false);
  const [unValid, setUnvalid] = useState(false);

  const classNames = cx('input', className, {'valid': validate}, {'unvalid': unValid});

  useEffect(() => {
    if (!answer) {
      if (valid === true) {
        setValid(true);
        setUnvalid(false);
      }
      if (valid === false) {
        setValid(false);
        setUnvalid(true);
      }
    }
  }, [valid]);

  const handlerKeyUp = e => {
    if (onKeyUp) onKeyUp(e);
    if (answer) {
      if (e.target.value === answer) {
        setValid(true);
        setUnvalid(false);
      } else {
        setValid(false);
        setUnvalid(true);
      }
    }
  };

  return (
    <InputStyled onKeyUp={handlerKeyUp} className={classNames}/>
  );
};