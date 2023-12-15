import React, { useEffect, useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';

type Props = {

}



const NumberPuzzle: React.FunctionComponent<Props> = () => {

  const test = () => {
    console.log('*-*-*-*-*test');
    
  }
  return (
    <main className='number-puzzle-main'>
      <div className='number-puzzle-main__container'>
        <section className='number-puzzle-main__titel'>
          <button onClick={test}>
            {LocalizedStrings.restart}
          </button>
          <button>
            {LocalizedStrings.rules}
          </button>
        </section>
        
        <div className='number-puzzle-main__auxiliary-container'>
        <section className='number-puzzle-main__table'>
          <table>
            <th></th>
            <th>{LocalizedStrings.number}</th>
            <th>{LocalizedStrings.exactly}</th>
            <th>{LocalizedStrings.near}</th>
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
    </main>
  );
};
    
export default React.memo(NumberPuzzle);