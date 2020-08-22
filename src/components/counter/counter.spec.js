import React from 'react';
import { shallow } from 'enzyme';

import Counter from './counter';
import { findByTestIdProp } from '../../../testUtils';

describe('Counter component tests', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter/>);
  });

  test('renders correctly', () => {
    const counterComponent = findByTestIdProp(wrapper, 'counter-component');
    expect(counterComponent.length).toBe(1);
  });

  test('displays counter text', () => {
    const counterText = findByTestIdProp(wrapper, 'counter-text');
    expect(counterText.length).toBe(1);
  });

  test('displays increment button', () => {
    const incrementButton = findByTestIdProp(wrapper, 'increment-button');
    expect(incrementButton.length).toBe(1);
  });

  // // temp
  // test('increment button click calls prop function', () => {
  //   const onIncrementPressed = jest.fn();
  //   wrapper = shallow(<Counter onIncrementPressed={onIncrementPressed}/>);
  //   const incrementButton = findByTestIdProp(wrapper, 'increment-button');
  //   const button = incrementButton.first();
  //   button.simulate('press');
  //
  //   expect(onIncrementPressed).toHaveBeenCalledTimes(1);
  // });
  //
  // //temp
  // test('should validate prop types correctly', () => {
  //   const error = checkPropTypes(
  //     Counter.propTypes,
  //     {},
  //     'prop',
  //     Counter.name,
  //   );
  //
  //   expect(error).toBeUndefined();
  // });

  test('counter increments on increment button press', () => {
    const incrementButton = findByTestIdProp(wrapper, 'increment-button');
    const button = incrementButton.first();
    button.simulate('press');

    const counterText = findByTestIdProp(wrapper, 'counter-text').first();
    expect(counterText.children().first().text()).toMatch(/.* 1/);
  });
});
