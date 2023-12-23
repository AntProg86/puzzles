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
import { AppContext } from './context';
import { useDispatch } from 'react-redux';

type Props = {

}

const Application: React.FunctionComponent<Props> = () => {

  const dispatch = useDispatch();

  //Получить токен для авторизации, если нужен
  const getToken = async () => {
    // if (CONSTANTS.authenticationAzureADEasyAuth == 'true'){
    //   return await getTokenAzureADEasyAuth();
    // }
    // if (CONSTANTS.authenticationAzureAD == 'true'){
    //   return await getTokenAzureAD();
    // }
    return Promise.resolve();
  };
  
  const doFetch = async (action:any, agrs:any) => {
    return await new Promise(
      (resolve)=>{
        getToken().then((accessTokenResponse: any)=>{   

          let args_of_api = {};
        
          Object.assign(args_of_api, agrs, {accessToken: accessTokenResponse?.accessToken})
          
          // console.log('*-*-*-*-*-*-*-*-*-*--*doFetch');
          // console.log(args_of_api);
          
          const a:any = dispatch(action(args_of_api));
          a.then((data:any) => {        
            const {payload, error} = data;
            
            if(error){
              // передаём ошибку в Redux который отобразит ошибку
              //dispatch(ActionSetErrorMessageAbsolute(error.message));
            }
            else if (payload){  
              //console.log('*-*-*-*-*-*-*-*-*-*--*doFetch');
              //console.log(payload);
              
              //return payload
            }
            return resolve(data);
          })
          })
          .catch(function (error:any) {
            console.log('error', error);
            
            //dispatch(ActionSetErrorMessageAbsolute(error.message? error.message : ('Unknown error' + ': doFetch')));   
          })
      }
    );
  }

  return (
    <AppContext.Provider value={
      {
        doFetch: doFetch,
      }} >
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
      </AppContext.Provider>
  );
};
    
export default React.memo(Application);