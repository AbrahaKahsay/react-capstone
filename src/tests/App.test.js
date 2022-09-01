import renderer from 'react-test-renderer';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

describe('Jest Snapshot testing suite', () => {
  it('Check the Crypto Market', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => {
      const waitForDOM = screen.findByText(
        'Crypto Market',
      );
      expect(waitForDOM).not.toBeNull();
    });
  });

  it('It should match snapshot', () => {
    const Tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    ).toJSON();
    expect(Tree).toMatchSnapshot();
  });
});
