import { Planet } from "#api/types";

export type StarWarsReducer = {
  /**Выбранная пользователем планета для детального обзора */
  planet?: Planet;

  /**Список загруженных планет из API */
  LoadedPlanetList?: Array<Planet>;
}