// API for coins
const baseUrl = 'https://api.coincap.io/v2/assets?limit=100';

// Actions
const COINS_FETCHED = 'COINS_FETCHED';
const COINS_FILTERED = 'COINS_FILTERED';

const initialState = [];

const fetchCoins = async () => {
    const get = await fetch(baseUrl, { method: 'GET' });
    const response = await get.json();
    const coins = response.data;
    return coins;
  };