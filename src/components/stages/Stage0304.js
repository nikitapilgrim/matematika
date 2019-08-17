import React, {useState, useEffect} from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

const arrayWithoutElementAtIndex = (arr, index) => {
  return arr.filter((value, arrIndex) => {
    return index !== arrIndex;
  });
};

const getAllValues = object => Object.entries(object).reduce((acc, pair) => {
  const [key, value] = pair;
  return [...acc, value.value];
}, []);


export const Stage0304 = () => {
  const [answers, setAnswers] = useState([]);
  const allowedNumbers = [1, 3, 5];
  const [arrayAnswer, setArrayAnswer] = useState([]);
  useEffect(() => {
    setArrayAnswer(getAllValues(answers));
  }, [answers]);
  console.log(answers, arrayAnswer);

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
      }
    }
  };

  const checkAnswer = id => () => {
    if (answers[id]) {
      const check = Object.entries(answers).every((pair, index, array) => {
        const [key, value] = pair;
        const checkedObject = arrayWithoutElementAtIndex(array, --id);
        const checkedArray = checkedObject.reduce((acc, item) => {
          return [...acc, item[1].value];
        }, []);
        const checkDoubleItems = checkedArray.includes(value.value);
        return !checkDoubleItems;
      });
      console.log(id, check)
      if (check) {
        return true;
      }
      if (!check) {
        return false
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
          <td className="col3_table_cell"><Input customAnswer={checkAnswer(1)}
                                                 onKeyUp={handlerAnswer(1)}/></td>
          <td className="col3_table_cell"><Input customAnswer={checkAnswer(2)}
                                                 onKeyUp={handlerAnswer(2)}/></td>
          <td className="col3_table_cell"><Input customAnswer={checkAnswer(3)}
                                                 onKeyUp={handlerAnswer(3)}/></td>
        </tr>
        <tr>
          <td className="col3_table_cell"><Input customAnswer={checkAnswer(4)}
                                                 onKeyUp={handlerAnswer(4)}/></td>
          <td className="col3_table_cell"><Input customAnswer={checkAnswer(5)}
                                                 onKeyUp={handlerAnswer(5)}/></td>
          <td className="col3_table_cell"><Input customAnswer={checkAnswer(6)}
                                                 onKeyUp={handlerAnswer(6)}/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};