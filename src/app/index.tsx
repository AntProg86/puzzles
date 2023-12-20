import React, { useEffect, useContext, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
//import './styles.css';
import LocalizedStrings from './localization';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//import '../../src/re'
import './reset.scss';
import './styles.scss';

import {Logo} from '../assets/pictures';
import NumberPuzzle from '../pages/number-puzzle';
import AboutMe from '../pages/about-me';

type Props = {

}

const Application: React.FunctionComponent<Props> = () => {

  return (
    <>
      <header>
        <div className='container'>
          <section className="top-nav ">
            <figure className='logo'>
              <img src={Logo} alt="Logo" />
            </figure>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
          </label>
            <ul className="menu">
              <li><Link to="/">{LocalizedStrings._home}</Link></li>
              <li><Link to="/about">{LocalizedStrings._about}</Link></li>
              <li><Link to="/NumberPuzzle">{LocalizedStrings.number_puzzle}</Link></li>
            </ul>
          </section>
        </div>
      </header>
      <Routes>
        <Route path={ "/NumberPuzzle" } element={ <NumberPuzzle/> } />
        <Route path={ "/about" } element={ <AboutMe/> } />

        {/* Перенаправление на главную страницу, если вызванной не существует */}
        <Route path='*' element={ <>main page</> }/>
      </Routes>
    </>
  );
};
    
export default React.memo(Application);