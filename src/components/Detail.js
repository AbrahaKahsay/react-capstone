import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { coinDetail } from '../redux/home/Detail';
import Back from '../images/back.png';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const coin = useSelector((store) => store.detailReducer);
  useEffect(() => {
    dispatch(coinDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <NavLink to="/">
        <img className="icons" src={Back} alt="back" />
      </NavLink>

      <div className="detail">
        <h2>{coin.symbol}</h2>
        <p>{coin.name}</p>
      </div>
      <div className="title">
        Details
      </div>
      <div className="detailList">
        <div>
          <p>Rank</p>
        </div>
        <div>
          <p>
            {' #'}
            {coin.rank}
          </p>
        </div>
        <div className="d">
          <p>Price</p>
        </div>
        <div className="d">
          <p>
            {' $'}
            {coin.priceUsd}
            {' USD'}
          </p>
        </div>
        <div>
          <p>Volume 24h</p>
        </div>
        <div>
          <p>
            {' $'}
            {coin.volumeUsd24Hr}
          </p>
        </div>
        <div className="d">
          <p>Total Supply</p>
        </div>
        <div className="d">
          <p>
            {' '}
            {coin.supply}
            {' '}
            {coin.symbol}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Detail;
