import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Card from '../components/Card';

const coin = {
  id: 'bitcoin',
  symbol: 'BTC',
};

describe('Jest Snapshot testing suite', () => {
  test('component match with the snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Card
            key={coin.id}
            id={coin.id}
            symbol={coin.symbol}
          />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
