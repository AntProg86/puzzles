import React, { useEffect, useContext, useState, useLayoutEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';
import Popup from '#src/components/popup';
import { findDuplicates, getPuzzleNumber } from './func';

type Props = {

}

const RulesText = () => {
  return(
    <section id='number-puzzle-rules' className='number-puzzle-rules'>
      
    </section>
  )
}

const initState = {
  firstDigit: 1,
  secondDigit: 2,
  thirdDigit: 3,
  fourthDigit: 4,
  isNumberIncorrect: false,
  EnteredNumbers: new Array<EnteredNumber>(),
  RandomNumber: getPuzzleNumber(),
  isGameOver: false,
  isShowRules: false,
};

const NumberPuzzle: React.FunctionComponent<Props> = () => {

  const [modalActive, setModalActive] = useState(false)
  const [state, changeState] = useState<State>(initState);
  
  const showRules = () => {
    setModalActive(true);
  }

  //Начать заново
  const onClickReset = () => {
    changeState((state) => ({
      ...initState
    }))
  };

  const changeDigit = (
    digit: 'firstDigit' | 'secondDigit' | 'thirdDigit' | 'fourthDigit',
    operation: 'increment' | 'decrement'
    ) => {
    
    //Цифра не должна быть меньше 0 или больше 9
    if(state[digit] === 0 && operation === 'decrement' 
    || state[digit] === 9 && operation === 'increment'){
      return
    }
    
    if(operation === 'increment'){
      changeState((state) => ({
        ...state,
        [digit]: state[digit] + 1
      }))
    }

    if(operation === 'decrement'){
      changeState((state) => ({
        ...state,
        [digit]: state[digit] - 1
      }))
    }
  };

  const getDigitsAsArray = () => {
    
    const digits = new Array<number>()
    
    digits.push(state.firstDigit)
    digits.push(state.secondDigit)
    digits.push(state.thirdDigit)
    digits.push(state.fourthDigit)

    return digits;
  };

  const getDigitsAsNumber = () => {
    return Number(`${state.firstDigit}${state.secondDigit}${state.thirdDigit}${state.fourthDigit}`)
  };

  //Получить маску для поля «Рядом»
  const getNear = () => {

    let _digArr = getDigitsAsArray()

    let _arr = Array.from(String(state.RandomNumber), Number)
    let _mask: string = ''
    
    for (let i = 0; i < _arr.length; i++){
      
      _digArr.push(_arr[i])
      
      if(findDuplicates(_digArr) === true && _digArr[i] !== _arr[i]){
        _mask = _mask + '-'
      }

      _digArr.pop();
    }
    
    return _mask;
  };

  //Получить маску для поля «Точно»
  const getExactly = () => {

    let _arr = Array.from(String(state.RandomNumber), Number)
    let _mask: string = ''

    if(state.firstDigit === _arr[0])
      _mask = _mask + '*'
    if(state.secondDigit === _arr[1])
      _mask = _mask + '*'
    if(state.thirdDigit === _arr[2])
      _mask = _mask + '*'
    if(state.fourthDigit === _arr[3])
      _mask = _mask + '*'
    
    return _mask
  };

  const checkNumber = (num:number) : boolean => {
    if(num === state.RandomNumber)
      return true
    return false
  };

  const EnterNumber = () => {

    const _enteredNumber = getDigitsAsNumber()

    if(checkNumber(_enteredNumber) === true){
      changeState((state) => ({
        ...state,
        isGameOver: true,
        gameResult: 'win'
      }))
      return
    }
    
    let _copy: Array<EnteredNumber> = Object.assign([], state.EnteredNumbers)
    
    let _id = _copy.length > 0 ? _copy[_copy.length - 1].id + 1 : 1
    
    let num: EnteredNumber = {
      id: _id,
      number: _enteredNumber,
      exactly: getExactly(),
      near: getNear()
    }

    _copy.push(num)

    changeState((state) => ({
      ...state,
      EnteredNumbers: _copy
    }))
  };

  const DigitBox = ({value, increment, decrement}:DigitBoxProps) => {
    return(
      <>
        <div className='number-puzzle-main__nambers__input-container'>
          <div className='number-puzzle-main__nambers__input-container__digit'>
            {value}
          </div>
          <div className='number-puzzle-main__nambers__input-container__buttons'>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </div>
        </div>
        {/* <NumberBox
          value={value}
          readOnly={true}
          //disabled={true}
          className={state.isNumberIncorrect === true ? 'textColorRed margin_right_5px margin_left_5px fontSize_20px' : 'margin_right_5px margin_left_5px fontSize_20px'}
        />
        <div className='flexCol'>
          <DxButton
            onClick={increment}
            icon='plus'
            className='margin_bottom_3px'
          />
          <DxButton
            icon='minus'
            onClick={decrement}
          />
        </div> */}
      </>
    )
  };

  //После 7-й неудачной попытки будет пройгрыш
  useEffect(()=>{
    if(state.EnteredNumbers.length === 7){
      changeState((state) => ({
        ...state,
        isGameOver: true,
        gameResult: 'lose'
      }))
    }
  },[state.EnteredNumbers]);

  useLayoutEffect(()=>{
    if(modalActive === true){
      {document.getElementById('number-puzzle-rules').innerHTML = LocalizedStrings.number_puzzle_rules}
    }
  },[modalActive])

  
  const test = () => {
    console.log('*-*-*-*-*-*-test');
    
    //setModalActive(true);
  }
  
  return (
    <main className='number-puzzle-main'>
      <div className='number-puzzle-main__container'>
        <section className='number-puzzle-main__titel'>
          <button onClick={onClickReset}>
            {LocalizedStrings.restart}
          </button>
          <button onClick={showRules}>
            {LocalizedStrings.rules}
          </button>
        </section>
        
        <div className='number-puzzle-main__auxiliary-container'>
        <section className='number-puzzle-main__table'>
          <table>
            <thead>
              <tr>
                <td></td>
                <td>{LocalizedStrings.number}</td>
                <td>{LocalizedStrings.exactly}</td>
                <td>{LocalizedStrings.near}</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>1234</td>
                <td>--</td>
                <td>**</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1234</td>
                <td>--</td>
                <td>**</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1234</td>
                <td>--</td>
                <td>**</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1234</td>
                <td>--</td>
                <td>**</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1234</td>
                <td>--</td>
                <td>**</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1234</td>
                <td>--</td>
                <td>**</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1234</td>
                <td>--</td>
                <td>**</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className='number-puzzle-main__nambers'>
          <DigitBox
            value={state.firstDigit}
            increment={()=>changeDigit('firstDigit','increment')}
            decrement={()=>changeDigit('firstDigit','decrement')}
          />
          <DigitBox
            value={state.secondDigit}
            increment={()=>changeDigit('secondDigit','increment')}
            decrement={()=>changeDigit('secondDigit','decrement')}
          />
          <DigitBox
            value={state.thirdDigit}
            increment={()=>changeDigit('thirdDigit','increment')}
            decrement={()=>changeDigit('thirdDigit','decrement')}
          />
          <DigitBox
            value={state.fourthDigit}
            increment={()=>changeDigit('fourthDigit','increment')}
            decrement={()=>changeDigit('fourthDigit','decrement')}
          />
          
        </section>
        </div>
        
      </div>

      <Popup active={modalActive} setActive={setModalActive} title={''}>
        <>
          <RulesText/>
        </>
      </Popup>
    </main>
  );
};
    
export default React.memo(NumberPuzzle);