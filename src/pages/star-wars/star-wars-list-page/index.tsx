import React, { useEffect, useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';

import { AppContext } from '#src/app/context';
import { RootReducer } from '#src/store/types';
import { StarWarsReducer } from '../types';
import StarWarsListItem from './components/star-wars-list-item';
import { getPlanetFetch } from '#api/actions';

type State = {
  /**количество загруженных планет */
  countOfLoadedPlanets: number;
  observableList: Array<any>;
  
};

const initState = {
  countOfLoadedPlanets: 0,
  observableList: new Array(),
};

type Props = {

}

const StarWars: React.FunctionComponent<Props> = () => {

  const _appContext = useContext(AppContext);
  const dispatch = useDispatch();

  const [state, changeState] = useState<State>(initState);

  const store = useSelector<RootReducer, StarWarsReducer>((state) => state.starWars);
  
  useEffect(()=>{
    console.log('*-*-*-*-*useEffect');
    //getPlanetList();
    //state.countOfLoadedPlanets
    //getPlanet();
    
  });

  useEffect(()=>{
    console.log('*-*-*-*-store.planet');
    console.log(store.planet);
    
    
  },[store.planet]);

  //Загружаем по три планеты!
  const getPlanetList = () => {
    Promise.all([
      getPlanet(1),
      getPlanet(2),
      getPlanet(3),
      // sleep(2000),
      // sleep(3000)
    ]).then(()=>{
      console.log('All prosimes');
    })
  }
  
  const getPlanet = (id:number) => {
    
    console.log('*-*-*-*-*-*-*getPlanet');

    _appContext.doFetch(getPlanetFetch, {id})
    .then((data:any) => {   
      const {payload, error} = data;
      // console.log('*-*-*--*-*-*data');
      // console.log(data);
      
      if (payload){
        
        console.log('*-*-*-*-*payload');
        console.log(payload);
        //https://starwars-visualguide.com/assets/img/planets/3.jpg
      }
      
      // Очищаем сообщение
      //dispatch(ActionMainLoadPanelMessage(''));
      // Скрываем индикацию загрузки на весь экран
      //dispatch(ActionMainLoadPanelShow(false));
    });
  };

  const planetShortInfo = (objcet:any) => {
    return(
      // {objcet}
      <div className='planet_card_short'>
        <figure>
          <figcaption>Планета #1</figcaption>
          <p><img src='https://starwars-visualguide.com/assets/img/planets/3.jpg' alt="" /></p>
        </figure>
        <div className='planet_card_short__info'>
          <p>nhzvc</p>
          <p>nhzvc</p>
          <p>nhzvc</p>
        </div>
      </div>
    )
  }
  
  return (
    <main className="star_wars_main">
      <div className='container'>
        <div className='content_container'>
          <section className='planet_list'>
            
            <StarWarsListItem planetId={1}/>
            <StarWarsListItem planetId={2}/>
            <StarWarsListItem planetId={3}/>
            
          </section>
        </div>
      </div>
    </main>
  );
};
    
export default React.memo(StarWars);