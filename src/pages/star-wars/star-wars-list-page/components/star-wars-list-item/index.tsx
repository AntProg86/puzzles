import React, { useEffect, useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';
import { AppContext } from '#src/app/context';
import { getPlanetFetch } from '#api/actions';
import { Planet } from '#api/types';
import { RootReducer } from '#src/store/types';

type State = {
  /**количество загруженных планет */
  planet?: Planet;
  planetInfoVisibility: boolean;
};

const initState = {
  planetInfoVisibility: false,
};

type Props = {
  planetId:number;
}

const StarWarsListItem: React.FunctionComponent<Props> = ({planetId}) => {
  
  const [state, changeState] = useState<State>(initState);
  const _appContext = useContext(AppContext);
  const storeLoadedPlanetList = useSelector<RootReducer, Array<Planet>>((state) => state.starWars.LoadedPlanetList);
  
  //console.log('*-*-*-*-*-*StarWarsListItem*-*Render');
  
  useEffect(()=>{
    
    if(state.planet !== undefined) return;
    //changeState((state) => ({
    const _planetFromStore = storeLoadedPlanetList.filter(p=>p.id === planetId)
    // console.log('*-*-*-*_planetFromStore');
    // console.log(_planetFromStore);
    
    //Если данные уже загружались, то берём их из массива
    if(_planetFromStore.length !== 0){  
      changeState((state) => ({
        ...state,
        planet: _planetFromStore[0]
      }))
      return;
    }

    _appContext.doFetch(getPlanetFetch, {id:planetId})
    .then((data:any) => {   
      const {payload, error} = data;
      // console.log('*-*-*--*-*-*getPlanetFetch');
      // console.log(planetId);
      
      if (payload){
        
        // console.log('*-*-*-*-*payload');
        // console.log(payload);
        changeState((state) => ({
          ...state,
          planet: payload
        }))
        //https://starwars-visualguide.com/assets/img/planets/3.jpg
      }
      
      // Очищаем сообщение
      //dispatch(ActionMainLoadPanelMessage(''));
      // Скрываем индикацию загрузки на весь экран
      //dispatch(ActionMainLoadPanelShow(false));
    });
  },[]);

  const showPlanetInfo = () => {
     changeState((state) => ({ 
     ...state, 
       planetInfoVisibility: true
     }))
  };

  const hidePlanetInfo = () => {
     changeState((state) => ({ 
     ...state, 
       planetInfoVisibility: false
     }))
  }
  
  return (
    <>

      <div className='planet_card_container'>
        {!state.planet ? (
          <div className='Loading_container'>
            Loading...
          </div>
          ) : (
            <>
              <figure>
                <figcaption>{state.planet.name}</figcaption>
                <p><img onClick={showPlanetInfo}
                  src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`} 
                  alt="" />
                  </p>
                
                
              </figure>

              {state.planetInfoVisibility === true &&
                <div className='planet_card_container__planet_info'>
                  <div>
                    <div>
                      {state.planet.name}
                    </div>
                    <div><button onClick={hidePlanetInfo}>X</button></div>
                  </div>
                  <div>
                    {LocalizedStrings.population}:
                    <div>{state.planet.population}</div>
                  </div>
                  <div>
                    {LocalizedStrings.diameter}:
                    <div>{state.planet.diameter}</div>
                  </div>
                  <div>
                    {LocalizedStrings.gravity}:
                    <div>{state.planet.gravity}</div>
                  </div>
                  
                </div>
              }
              
              
            </>
          )
        }
        
      </div>
    </>
  );
};
    
export default React.memo(StarWarsListItem);