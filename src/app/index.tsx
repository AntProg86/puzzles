import React, { useEffect, useContext, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
//import './styles.css';
import LocalizedStrings from './localization';
import { Link, Route, Routes } from 'react-router-dom';
//import '../../src/re'
import './reset.scss';
import './styles.scss';

type Props = {

}

const Application: React.FunctionComponent<Props> = () => {

  return (
    <div className="">
      <div>
      <div>
        <hr />
        <nav>
          <ul>
            <div className=''>

              <li>
                {/* <Link to="/">{LocalizedStrings._home}</Link> */}
                <Link to="/">{LocalizedStrings._home}</Link>
              </li>
              &nbsp;||&nbsp;
              <li>
                {/* <Link to="/about">{LocalizedStrings._about}</Link> */}
                <Link to="/about">{LocalizedStrings._about}</Link>
              </li>
              &nbsp;||&nbsp;
              <li>
              </li>
            </div>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path={ "/" } element={ <>main page</> } />
          <Route path={ "/about" } element={ <>AboutPage</> } />

          {/* Перенаправление на главную страницу, если вызванной не существует */}
          <Route path='*' element={ <>main page</> }/>
        </Routes>
      </div>
      </div>
    </div>
  );
};
    
export default React.memo(Application);