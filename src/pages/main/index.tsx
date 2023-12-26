import React, { useEffect, useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';
import { AppContext } from '#src/app/context';
import { ActionSetErrorMessageAbsolute } from '#src/components/errorAbsolute/reducer';

type Props = {

}
const mnemosyne = require('./pictures/Gabriel_Dante_Rosetti,_Mnemosyne.jpg');

const MainPage: React.FunctionComponent<Props> = () => {

  const _appContext = useContext(AppContext);
  const dispatch = useDispatch();
  useEffect(()=>{
    //console.log('*-*-*-*-*useEffect');
    
  });
  
  const showError = () => {
    //console.log('*-*-*-*showError');
    dispatch(ActionSetErrorMessageAbsolute('some error'))
    
  };
  
  return (
    <main className="main_page_main">
      <section>
        <div className='container'>
          <h2>
            <p>{LocalizedStrings.mnemosyne}</p>
            <p>&nbsp;{LocalizedStrings.mnemosyne_short}</p>
          </h2>
          <figure className='main_page_main__mnemosyne'>
            <img src={mnemosyne} alt="" />
            <figcaption>
              <p>{LocalizedStrings.artist}&nbsp;</p>
              <p>{LocalizedStrings.gabriel_dante_rosetti}</p>
            </figcaption>
          </figure>
          <div className='main_page_main__mnemosyne_text'>
            <p >
              {LocalizedStrings.mnemosyne_paragraph_1}
            </p>
            <p>
              {LocalizedStrings.mnemosyne_paragraph_2}
            </p>
            <hr />
            <p>
              {LocalizedStrings.mnemosyne_paragraph_3}
            </p>
            <p>
              {LocalizedStrings.mnemosyne_paragraph_4}
            </p>
            <p>
              {LocalizedStrings.mnemosyne_paragraph_5}
            </p>
          </div>
          <div className='main_page_main__commandment'>
            <hr />
            <q>
              <p>{LocalizedStrings.mnemosyne_paragraph_6}</p>
              <p>{LocalizedStrings.mnemosyne_paragraph_7}</p>
            </q>
          </div>
        </div>
      </section>
      
    </main>
  );
};
    
export default React.memo(MainPage);