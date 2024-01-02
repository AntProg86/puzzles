import React, { useEffect, useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';

type Props = {

}
const mnemosyne = require('../../pictures/Gabriel_Dante_Rosetti_Mnemosyne.jpg');

const Mnemosyne: React.FunctionComponent<Props> = () => {

  return (
    <section>
        <div className='container'>
          <h2>
            <p>{LocalizedStrings.mnemosyne}</p>
            <p>&nbsp;{LocalizedStrings.mnemosyne_short}</p>
          </h2>
          <figure className='mnemosyne'>
            <img src={mnemosyne} alt="" />
            <figcaption>
              <p>{LocalizedStrings.artist}&nbsp;</p>
              <p>{LocalizedStrings.gabriel_dante_rosetti}</p>
            </figcaption>
          </figure>
          <div className='mnemosyne_text'>
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
          <div className='commandment'>
            <hr />
            <q>
              <p>{LocalizedStrings.mnemosyne_paragraph_6}</p>
              <p>{LocalizedStrings.mnemosyne_paragraph_7}</p>
            </q>
          </div>
        </div>
      </section>
  );
};
    
export default React.memo(Mnemosyne);