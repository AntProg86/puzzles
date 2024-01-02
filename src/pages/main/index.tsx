import React, { useEffect, useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';
import { AppContext } from '#src/app/context';
import { ActionSetErrorMessageAbsolute } from '#src/components/errorAbsolute/reducer';
import Mnemosyne from './components/mnemosyne';
import Muses from './components/muses';

type Props = {

}


const MainPage: React.FunctionComponent<Props> = () => {

  const [observableObject, setObsOb] = useState<'mnemosyne' | 'muses'>('mnemosyne')

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
        <div className=''>
          <nav className='top_menu'>
            <div>
              &#9672;
            </div>
            <ul className='menu_main'>
              <li onClick={()=>{setObsOb('mnemosyne')}}>{LocalizedStrings.goddess}</li>
              <li onClick={()=>{setObsOb('muses')}}>{LocalizedStrings.muses}</li>
            </ul>
            <div>
              &#9672;
            </div>
          </nav>
        </div>
      </section>
      
      {observableObject === 'mnemosyne' &&
        <Mnemosyne/>
      }

      {observableObject === 'muses' &&
        <Muses/>
      }
    </main>
  );
};
    
export default React.memo(MainPage);