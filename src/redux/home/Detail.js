const CoinAPI = 'https://api.coincap.io/v2/assets/';

const DETAIL_FETCHED = 'DETAIL_FETCHED';
const initialState = [{ id: 1, symbol: '$$' }];

const fetchDetail = async (id) => {
  const get = await fetch(apiCoin + id, { method: 'GET' });
  const coins = await get.json();
  return coins;
};