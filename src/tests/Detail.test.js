import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Detail from '../components/Detail';
import { coinDetail } from '../redux/home/Detail';

describe('Jest Snapshot testing suite', () => {
  test('component match with the snapshot', async () => {
    await store.dispatch(coinDetail('bitcoin'));
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Detail />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
