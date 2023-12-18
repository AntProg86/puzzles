import React, { useEffect, useContext, useState, useLayoutEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';
import Popup from '#src/components/popup';

type Props = {

}

const RulesText = () => {
  return(
    <section id='number-puzzle-rules' className='number-puzzle-rules'>
      
    </section>
  )
}

const NumberPuzzle: React.FunctionComponent<Props> = () => {

  const [modalActive, setModalActive] = useState(false)
  //console.log('*-*-*-*Render');
  
  const showRules = () => {
    setModalActive(true);
  }

  const test = () => {
    setModalActive(true);
  }

  useLayoutEffect(()=>{
    if(modalActive === true){
      {document.getElementById('number-puzzle-rules').innerHTML = LocalizedStrings.number_puzzle_rules}
    }
  },[modalActive])
  
  return (
    <main className='number-puzzle-main'>
      <div className='number-puzzle-main__container'>
        <section className='number-puzzle-main__titel'>
          <button onClick={test}>
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
          <div className='number-puzzle-main__nambers__input-container'>
            <div className='number-puzzle-main__nambers__input-container__digit'>
              1
            </div>
            <div className='number-puzzle-main__nambers__input-container__buttons'>
              <button>+</button>
              <button>-</button>
            </div>
          </div>
          <div className='number-puzzle-main__nambers__input-container'>
            <div className='number-puzzle-main__nambers__input-container__digit'>
              1
            </div>
            <div className='number-puzzle-main__nambers__input-container__buttons'>
              <button>+</button>
              <button>-</button>
            </div>
          </div>
          <div className='number-puzzle-main__nambers__input-container'>
            <div className='number-puzzle-main__nambers__input-container__digit'>
              1
            </div>
            <div className='number-puzzle-main__nambers__input-container__buttons'>
              <button>+</button>
              <button>-</button>
            </div>
          </div>
          <div className='number-puzzle-main__nambers__input-container'>
            <div className='number-puzzle-main__nambers__input-container__digit'>
              1
            </div>
            <div className='number-puzzle-main__nambers__input-container__buttons'>
              <button>+</button>
              <button>-</button>
            </div>
          </div>
          
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