import { getPlanetFetch } from '#api/actions';
import { Planet } from '#api/types';
import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { getPlanetIdFromURL } from './functions';



const starWarsSlice = createSlice({
  name: 'starWarsReducer',
  initialState: {
    
    //planet: ,
    LoadedPlanetList: new Array<Planet>(),
  },
  reducers: {
    setDefaultStore: (state) => {
      return {
        ...state,
        planet: undefined,
      }
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(
      getPlanetFetch.fulfilled,
      (state,  { meta: { arg }, payload }) => {
        if(payload){

          //console.log('*-*-*-*-*Reducer');
          
          let _arr = state.LoadedPlanetList.slice();
          payload.id = getPlanetIdFromURL(payload.url);
          _arr.push(payload);

          return {
            ...state,
            LoadedPlanetList: _arr,
          };
        }
      },
    )
  },
});

export const {
  setDefaultStore,
} = starWarsSlice.actions;

export default starWarsSlice;
