import React, { useEffect, useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';

import { AppContext } from '#src/app/context';
import { RootReducer } from '#src/store/types';
import { StarWarsReducer } from '../types';
import StarWarsListItem from './components/star-wars-list-item';
import { getPlanetFetch } from '#api/actions';
import CarouselSlider from '#src/components/carousel-slider';
import {idGenerator} from '../../../functions/idGeneratorFunctions';

type State = {
  /**количество загруженных планет */
  countOfLoadedPlanets: number;
  observableList: Array<any>;

  /**количество планет на экране */
  countOfPlanetsOnScreen: number
  
  /**Всего планет 60 (в API больше нету 27.12.2023)*/
  readonly countOfPlanets: number;
  
};

const initState = {
  countOfLoadedPlanets: 0,
  observableList: new Array(),
  countOfPlanetsOnScreen: 6,
  countOfPlanets: 60,
};

type Props = {

}

const StarWars: React.FunctionComponent<Props> = () => {

  const _appContext = useContext(AppContext);
  const dispatch = useDispatch();

  const [state, changeState] = useState<State>(initState);

  //const store = useSelector<RootReducer, any>((state) => state.starWars);
  
  useEffect(()=>{
    //console.log('*-*-*-*-*useEffect');
    
  });

  //Собираем планеты в список.
  const getPlanetList = (itemListLength: number, countOfPlanets:number) => {

    const _planetList: Array<()=>React.JSX.Element> = new Array();
    
    let planetID = 0;

    while (planetID <= countOfPlanets) {
      
      //console.log(planetID);
      const _itemlList:React.JSX.Element[] = [];
      for(let j=0; j<itemListLength; j++){
        
        planetID++
        // console.log(planetID);
        if(planetID > countOfPlanets) {
          break;
        }

        _itemlList.push(<StarWarsListItem key={idGenerator()} planetId={planetID}/>)
      }

      _planetList.push(()=>{
        return(
          <div className='planet_list'>
            {_itemlList}
          </div>
        )
      })
    }
    
    return _planetList;

    //27.12.2023
    // return([
    //   ()=>{
    //     return(
    //       <section className='planet_list'>
    //         <StarWarsListItem planetId={1}/>
    //         <StarWarsListItem planetId={2}/>
    //         <StarWarsListItem planetId={3}/>
    //       </section>
    //     )
    //   },
    //   ()=>{
    //     return(
    //       <section className='planet_list'>
    //         <StarWarsListItem planetId={4}/>
    //         <StarWarsListItem planetId={5}/>
    //         <StarWarsListItem planetId={6}/>
    //       </section>
    //     )
    //   },
    // ])
  }
  
  //28.12.2023
  // const getPlanet = (id:number) => {
    
  //   console.log('*-*-*-*-*-*-*getPlanet');

  //   _appContext.doFetch(getPlanetFetch, {id})
  //   .then((data:any) => {   
  //     const {payload, error} = data;
  //     // console.log('*-*-*--*-*-*data');
  //     // console.log(data);
      
  //     if (payload){
        
  //       console.log('*-*-*-*-*payload');
  //       console.log(payload);
  //       //https://starwars-visualguide.com/assets/img/planets/3.jpg
  //     }
      
  //     // Очищаем сообщение
  //     //dispatch(ActionMainLoadPanelMessage(''));
  //     // Скрываем индикацию загрузки на весь экран
  //     //dispatch(ActionMainLoadPanelShow(false));
  //   });
  // };
  
  return (
    <main className="star_wars_main">
      <div className='container'>
        <div className='content_container'>
          <CarouselSlider contentList={getPlanetList(state.countOfPlanetsOnScreen, state.countOfPlanets)}/>
        </div>
      </div>
    </main>
  );
};
    
export default React.memo(StarWars);