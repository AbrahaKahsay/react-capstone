const CoinAPI = 'https://api.coincap.io/v2/assets/';

const DETAIL_FETCHED = 'DETAIL_FETCHED';
const initialState = [{ id: 1, symbol: '$$' }];

const fetchDetail = async (id) => {
  const get = await fetch(apiCoin + id, { method: 'GET' });
  const coins = await get.json();
  return coins;
};

export const coinDetail = (id) => async (dispatch) => {
    const coinDet = await fetchDetail(id);
    dispatch({
      type: DETAIL_FETCHED,
      detail: coinDet.data,
    });
  };

  const detailReducer = (state = initialState, action) => {
    switch (action.type) {
      case DETAIL_FETCHED:
        return action.detail;
      default:
        return state;
    }
  };
  
  export default detailReducer;