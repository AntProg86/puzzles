import React, { useEffect, useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';

type Props = {

}



const NumberPuzzle: React.FunctionComponent<Props> = () => {

  return (
    <main >
      <section>1</section>
      <section>2</section>
      <section>3</section>
    </main>
  );
};
    
export default React.memo(NumberPuzzle);