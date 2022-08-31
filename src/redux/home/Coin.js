// API for coins
const baseUrl = 'https://api.coincap.io/v2/assets?limit=100';

// Actions
const COINS_FETCHED = 'COINS_FETCHED';
const COINS_FILTERED = 'COINS_FILTERED';

const initialState = [];

// Getting the coins from server
const fetchCoins = async () => {
    const get = await fetch(baseUrl, { method: 'GET' });
    const response = await get.json();
    const coins = response.data;
    return coins;
  };

export const coinList = () => async (dispatch) => {
    const coins = await fetchCoins();
    const firstCoins = coins.slice(0, 51);
    dispatch({
        type: COINS_FETCHED,
        newState: firstCoins,
    });
};

export const coinFilter = (filter) => async (dispatch) => {
    const coins = await fetchCoins();
    if (filter === 'name') {
      coins.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter === 'vol') {
      coins.sort((a, b) => b.priceUsd - a.priceUsd);
    }
    const firstCoins = coins.slice(0, 51);
    dispatch({
      type: COINS_FILTERED,
      filterState: firstCoins,
    });
  };

const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHCOINS:
            return action.newState;
        case FILTERCOINS:
            return action.filterState;
        default:
            return state;
    }
  };
  
  export default coinReducer;