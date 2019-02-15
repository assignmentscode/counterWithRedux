import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Counter from '../components/Counter';
import CounterContainer from './updateCounter';


Enzyme.configure({ adapter: new Adapter() });

jest.mock('../App');

describe('container <CounterContainer />', () => {
  let wrapper;
  let component;
  let container;

  beforeEach(() => {
    jest.resetAllMocks();

    const store = configureStore([])();

    wrapper = mount(
      <Provider store={store}>
        <CounterContainer />
      </Provider>,
    );

    container = wrapper.find(CounterContainer);
    // console.log(wrapper);
    component = container.find(Counter);
    // console.log(component);
  });

  it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  it('should map state to props', () => {
    const expectedPropKeys = [
      'counter',
    ];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });

  it('should map dispatch to props', () => {
    const expectedPropKeys = ['increment', 'decrement'];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });
});
