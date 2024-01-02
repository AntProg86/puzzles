import React, { useEffect, useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';


//version 1.0
type Props = {
  active:boolean;
  setActive: (active:boolean) => void;
  title: React.JSX.Element | string;
  children: React.JSX.Element;
}

//popup__active - виден popup или нет
//setActive - функция, которая изменяет active
const Popup = ({active, setActive, title, children}: Props) => {
  return (
    <div className={active ? 'popup popup__active' : 'popup'} onClick={()=> setActive(false)}>
      <div className={active ? 'popup__container popup__active' : 'popup__container'} onClick={e => e.stopPropagation()}>
        <section className='popup__title'>
          <div>
            {title}
          </div>
          <button className='pupup__close_button' onClick={()=> setActive(false)}>
              X
          </button>
        </section>
        <section className='popup__content'>
          {children}
        </section>
      </div>

    </div>
  )
}

export default Popup;