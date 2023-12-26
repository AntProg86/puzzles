import React, { useEffect, useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';
import { AppContext } from '#src/app/context';
import { getPlanetFetch } from '#api/actions';
import { Planet } from '#api/types';

type State = {
  /**количество загруженных планет */
  planet?: Planet;
  
};

const initState = {
};

type Props = {
  planetId:number;
}

const StarWarsListItem: React.FunctionComponent<Props> = ({planetId}) => {
  
  const [state, changeState] = useState<State>(initState);
  const _appContext = useContext(AppContext);
  //const planetImgSrc = 
  useEffect(()=>{
    _appContext.doFetch(getPlanetFetch, {id:planetId})
    .then((data:any) => {   
      const {payload, error} = data;
      console.log('*-*-*--*-*-*data');
      console.log(planetId);
      
      if (payload){
        
        console.log('*-*-*-*-*payload');
        console.log(payload);
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
  
  return (
    <div className='planet_card_container'>
      {!state.planet ? (
        <>
          Loading...
        </>
        ) : (
          <>
            <figure>
              <figcaption>{state.planet.name}</figcaption>
              <p><img src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`} alt="" /></p>
            </figure>
            <div className='planet_card_short__info'>
              {/* <p>nhzvc</p>
              <p>nhzvc</p>
              <p>nhzvc</p> */}
            </div>
            {/* <button>
              {LocalizedStrings.more_details}
            </button> */}
          </>
        )
      }
      
    </div>
  );
};
    
export default React.memo(StarWarsListItem);