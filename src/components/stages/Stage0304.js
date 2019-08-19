import React, {useState, useEffect, useLayoutEffect} from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

const arrayWithoutElementAtIndex = (arr, index) => {
  return arr.filter((value, arrIndex) => {
    return index !== arrIndex;
  });
};

const defaultValue = {
  1: {
    valid: '',
  },
  2: {
    valid: '',
  },
  3: {
    valid: '',
  },
  4: {
    valid: '',
  },
  5: {
    valid: '',
  },
  6: {
    valid: '',
  },
};

export const Stage0304 = () => {
  const [answers, setAnswers] = useState(defaultValue);
  const [renderAnswers, setRenderAnswers] = useState(answers);
  const allowedNumbers = [1, 3, 5];
  const [currentValue, setCurrentValue] = useState(null);

  useEffect(() => {
    Object.entries(answers).every((pair, index, array) => {
      const [key, value] = pair;
      // we get an object of values ​​without the last
      const checkedObject = arrayWithoutElementAtIndex(array, index);
      // only value
      const checkedArray = checkedObject.reduce((acc, item) => {
        return [...acc, item[1].value];
      }, []);
      const checkDoubleItems = checkedArray.includes(value.value);
      if (!checkDoubleItems) {
        let copy = {...answers};
        copy[key].valid = true;
        setRenderAnswers({...answers, ...copy});
        return true;
      }
      if (value.value && checkDoubleItems) {
        let copy = {...answers};
        copy[key].valid = false;
        setRenderAnswers({...answers, ...copy});
        return false;
      }
    });
  }, [answers, currentValue]);



  const handlerAnswer = id => e => {
    const value = e.target.value;
    if (Number(value)) {
      const arrayNumbers = value.split('');
      const lengthGood = arrayNumbers.length === 3;
      const compliance = arrayNumbers.every((number) => allowedNumbers.includes(Number(number)));
      const different = arrayNumbers.every((number, index, arr) => {
        return !arrayWithoutElementAtIndex(arr, index).includes(number);
      });
      if (lengthGood && compliance && different) {
        setAnswers({
          ...answers, [id]: {
            value: value,
          },
        });
        setCurrentValue(value);
      }
    }
  };

  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Napiši sve trocifrene brojeve ciframa:</Subtitle>
      <Subtitle>5, 3, 1</Subtitle>

      <table border="0" cellSpacing="0" cellPadding="3" align="center" className="col3_table">
        <tbody>
        <tr>
          {Object.entries(renderAnswers).map((item) => {
            const [k, v] = item;
            if (k <= 3) {
              return (
                <td className="col3_table_cell" key={k}><Input valid={renderAnswers[k].valid}
                                                               onKeyUp={handlerAnswer(k)} id={k}/></td>
              );
            }
          })}
        </tr>
        <tr>
          {Object.entries(renderAnswers).map((item) => {
            const [k, v] = item;
            if (k > 3) {
              return (
                <td className="col3_table_cell" key={k}><Input valid={renderAnswers[k].valid}
                                                               onKeyUp={handlerAnswer(k)} id={k}/></td>
              );
            }
          })}
        </tr>

        </tbody>
      </table>
    </div>
  );
};