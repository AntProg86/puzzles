import { createSlice, PayloadAction  } from '@reduxjs/toolkit';



const starWarsSlice = createSlice({
  name: 'starWarsReducer',
  initialState: {
    //Ошибка пойманная try catch
    //planet: ,
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
    // .addCase(
    //   getPlanetFetch.fulfilled,
    //   (state,  { meta: { arg }, payload }) => {
    //     if(payload){
    //       return {
    //         ...state,
    //         planet:payload
    //       };  
    //     }
    //   },
    // )
  },
});

export const {
  setDefaultStore,
} = starWarsSlice.actions;

export default starWarsSlice;
