import ServiceApi from "#api/ServiceApi";
import api_addresses from "#api/api_addresses";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Planet } from "./types";

type getByIdFetch = {
  id:number;
}

export const getPlanetFetch = createAsyncThunk<Planet, getByIdFetch>(
  '/PlanetFetch/fetch',
  async ({
    id
  }) => {
    return await ServiceApi.getPlanet( 
      api_addresses.star_wars_planets,
      id
    );
  }
);