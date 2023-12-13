import React, { useEffect, useContext, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
//import './styles.css';
import LocalizedStrings from './localization';
import { Link, Route, Routes } from 'react-router-dom';
//import '../../src/re'
import './reset.scss';
import './styles.scss';

import {Logo} from '../assets/pictures';

type Props = {

}

const Application: React.FunctionComponent<Props> = () => {

  return (
    <>
      <header>
        <section className='top-nav'>
          <figure className='logo'>
            <img src={Logo} alt="Logo" />
          </figure>
          <div className='top-nav__col-2'>
            <input id="menu-toggle" type="checkbox"/>
            <label className='menu-button-container' htmlFor="menu-toggle">
              <div className='menu-button'></div>
            </label>
            <ul className="menu">
              <li><Link to="/">{LocalizedStrings._home}</Link></li>
              <li><Link to="/about">{LocalizedStrings._about}</Link></li>
            </ul>
          </div>
        </section>
      </header>
      <Routes>
        <Route path={ "/" } element={ <>main page</> } />
        <Route path={ "/about" } element={ <>AboutPage</> } />

        {/* Перенаправление на главную страницу, если вызванной не существует */}
        <Route path='*' element={ <>main page</> }/>
      </Routes>
    </>
  );
};
    
export default React.memo(Application);