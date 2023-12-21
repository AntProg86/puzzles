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
const GameResult = () => {
  return(
    <section id='number-puzzle-gameResult' className='number-puzzle-rules'>
      
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

  const [modalActive, setModalActive] = useState(false);
  const [modalResultActive, setModalResultActive] = useState(false);
  
  const [state, changeState] = useState<State>(initState);
  
  //Показать в модальном окне правила игры
  const showRules = () => {
    setModalActive(true);
  };

  //Начать заново
  const onClickReset = () => {
    changeState((state) => ({
      ...initState
    }))
  };

  //Увеличить или уменьшить на единицу одни из номеров
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

  //Сверить введённый номер со случайным
  const checkNumber = (num:number) : boolean => {
    if(num === state.RandomNumber)
      return true
    return false
  };

  //Пользователь нажал кнопку «Ввод»
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
        <div className={state.isNumberIncorrect ? 'number-puzzle-main__nambers__input-container textColorRed' : 'number-puzzle-main__nambers__input-container'}>
          <div className='number-puzzle-main__nambers__input-container__digit'>
            {value}
          </div>
          <div className='number-puzzle-main__nambers__input-container__buttons'>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </div>
        </div>
      </>
    )
  };

  //Определяет корректность пользовательского номера
  useEffect(()=>{
    
    if(state.firstDigit === 0){
      changeState((state) => ({
        ...state,
        isNumberIncorrect: true
      }))
      return
    }
    
    if(findDuplicates(getDigitsAsArray()) === true){
      changeState((state) => ({
        ...state,
        isNumberIncorrect: true
      }))
      return
    }

    if(state.isNumberIncorrect === true){
      changeState((state) => ({
        ...state,
        isNumberIncorrect: false
      }))
    }
    
  },[state.firstDigit, state.secondDigit, state.thirdDigit, state.fourthDigit]);

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

  //Показать модальное окно с результатом игры
  useEffect(()=>{
    if(state.gameResult){
      setModalResultActive(true);
    }
  },[state.gameResult]);

  //Добавить текс с правила в модальное окно
  useLayoutEffect(()=>{
    if(modalActive === true){
      {document.getElementById('number-puzzle-rules').innerHTML = LocalizedStrings.number_puzzle_rules}
    }
  },[modalActive]);

  //Показать в модальном окне результат игры
  useLayoutEffect(()=> {
    if(modalResultActive === true){
      {document.getElementById('number-puzzle-gameResult')
      .innerHTML = state.gameResult === 'win' ?
       LocalizedStrings.win
       :
       LocalizedStrings.lose + ' ' + state.RandomNumber}
    }
  },[modalResultActive]);
  
  const test = () => {
    console.log('*-*-*-*-*-*-test');
    
    //setModalActive(true);
  }
  
  return (
    <main className='number-puzzle-main'>
      <div className='number-puzzle-main__container container'>
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
              {state.EnteredNumbers.map((num)=>(
                <tr key={num.id}>
                <td>{num.id}</td>
                <td>{num.number}</td>
                <td>{num.exactly}</td>
                <td>{num.near}</td>
              </tr>
              ))}
              
            </tbody>
          </table>
        </section>

        <section className='number-puzzle-main__nambers'>
            <div className='number-puzzle-main__nambers__digitBox'>
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
            </div>
            <div className='number-puzzle-main__nambers__enter'>
              <button onClick={EnterNumber} className='enter' disabled={state.isNumberIncorrect || state.gameResult ? true : false}>
                {LocalizedStrings.enter}
              </button>
            </div>
          
        </section>
        </div>
        
      </div>

      <Popup active={modalActive} setActive={setModalActive} title={''}>
        <>
          <RulesText/>
        </>
      </Popup>
      <Popup active={modalResultActive} setActive={setModalResultActive} title={''}>
        <>
          <GameResult/>
        </>
      </Popup>
    </main>
  );
};
    
export default React.memo(NumberPuzzle);