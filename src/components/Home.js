import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { coinList, coinFilter } from '../redux/home/Coin';
import Card from './Card';
import './styles/Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const cList = useSelector((store) => store.coinReducer);
  useEffect(() => {
    dispatch(coinList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHandler = (e) => {
    dispatch(coinFilter(e.target.value));
  };

  const searchHandler = (e) => {
    e.preventDefault();
    window.location.href = `/detail/${e.target.coinSearch.value}`;
  };

  return (
    <section>
      <div className="infos">
        <select className="filter" onChange={changeHandler}>
          <option value="price"> Rank </option>
          <option value="name"> Name </option>
          <option value="vol"> Price </option>
        </select>
        <form onSubmit={searchHandler}>
          <input type="text" name="coinSearch" placeholder="Crypto coin name" required />
          <input type="submit" value="Search" />
        </form>
      </div>
      <ul className="coinList">
        {cList.map((coin) => (
          <Card
            key={coin.id}
            id={coin.id}
            symbol={coin.symbol}
            price={coin.priceUsd.substring(0, 8)}
            change={coin.changePercent24Hr}
          />
        ))}
      </ul>
    </section>
  );
};

export default Home;
