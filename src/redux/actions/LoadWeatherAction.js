export const actionTypes = {
  GET_DEFAULT_CITY_COORDS_REQ_START: 'GET_DEFAULT_CITY_COORDS_REQ_START',
  GET_DEFAULT_CITY_COORDS_REQ_SUCCESS: 'GET_DEFAULT_CITY_COORDS_REQ_SUCCESS',
  GET_DEFAULT_CITY_COORDS_REQ_ERROR: 'GET_DEFAULT_CITY_COORDS_REQ_ERROR',
  SEARCH_CITY_REQ_START: 'SEARCH_CITY_REQ_START',
  SEARCH_CITY_REQ_SUCCESS: 'SEARCH_CITY_REQ_SUCCESS',
  SEARCH_CITY_REQ_ERROR: 'SEARCH_CITY_REQ_ERROR',
  ADD_TO_FAVORITE: 'ADD_TO_FAVORITE',
  REMOVE_FROM_FAVORITE: 'REMOVE_FROM_FAVORITE',
  FORECAST_FIVEDAYS_REQ_START: 'FORECAST_FIVEDAYS_REQ_START',
  FORECAST_FIVEDAYS_REQ_SUCCESS: 'FORECAST_FIVEDAYS_REQ_SUCCESS',
  FORECAST_FIVEDAYS_REQ_ERROR: 'FORECAST_FIVEDAYS_REQ_ERROR',
};

export const requestDefaultCity = () => ({
  type: actionTypes.GET_DEFAULT_CITY_COORDS_REQ_START,
});

export const requestDefaultCitySuccess = (defaultCity) => ({
  type: actionTypes.GET_DEFAULT_CITY_COORDS_REQ_SUCCESS,
  payload: {
    defaultCity,
  },
});
export const requestDefaultCityError = (error) => ({
  type: actionTypes.GET_DEFAULT_CITY_COORDS_REQ_ERROR,
  payload: {
    error,
  },
});
export const requestSearchCity = () => ({
  type: actionTypes.SEARCH_CITY_REQ_START,
});

export const requestSearchCitySuccess = (searchedCity) => ({
  type: actionTypes.SEARCH_CITY_REQ_SUCCESS,
  payload: {
    searchedCity,
  },
});
export const requestSearchCityError = (error) => ({
  type: actionTypes.SEARCH_CITY_REQ_ERROR,
  payload: {
    error,
  },
});
export const addToFavorite = (city) => ({
  type: actionTypes.ADD_TO_FAVORITE,
  payload: {
    city,
  },
});
export const removeFromFavorite = (city) => ({
  type: actionTypes.REMOVE_FROM_FAVORITE,
  payload: {
    city,
  },
});
export const requestForecast5City = () => ({
  type: actionTypes.FORECAST_FIVEDAYS_REQ_START,
});

export const requestForecast5CitySuccess = (forecast5city) => ({
  type: actionTypes.FORECAST_FIVEDAYS_REQ_SUCCESS,
  payload: {
    forecast5city,
  },
});
export const requestForecast5CityError = (error) => ({
  type: actionTypes.FORECAST_FIVEDAYS_REQ_ERROR,
  payload: {
    error,
  },
});
