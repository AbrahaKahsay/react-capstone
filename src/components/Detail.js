import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { coinDetail } from '../redux/home/Detail';
import Back from '../images/back.png';
import './styles/Detail.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const coin = useSelector((store) => store.detailReducer);
  useEffect(() => {
    dispatch(coinDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="cont-det">
      <div className="back-icon-div">
        <NavLink to="/">
          <img className="back-icon" src={Back} alt="back" />
        </NavLink>
      </div>
      <div className="detail coin-name">
        <h2>{coin.symbol}</h2>
        <p>{coin.name}</p>
      </div>
      <div className="det-title col">
        Details
      </div>
      <div className="detailList">
        <div className="d">
          <p>Rank:</p>
          <div>
            <p>
              {' #'}
              {coin.rank}
            </p>
          </div>
        </div>
        <div className="d col">
          <p>Price:</p>
          <div>
            <p>
              {' $'}
              {coin.priceUsd}
              {' USD'}
            </p>
          </div>
        </div>
        <div className="d">
          <p>Volume 24h:</p>
          <div>
            <p>
              {' $'}
              {coin.volumeUsd24Hr}
            </p>
          </div>
        </div>
        <div className="d col">
          <p>Total Supply:</p>
          <div>
            <p>
              {' '}
              {coin.supply}
              {' '}
              {coin.symbol}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Detail;
