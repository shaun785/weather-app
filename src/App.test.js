import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import App from './App';

jest.mock('./api/fetchWeather');

describe('check search input', () => {
  it ('render header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});


describe('test search input', () => {
  it ('render header', async () => {
    const wrapper = mount(<App />);
    wrapper.find('input').at(0).simulate('change', { target: { value: 'sydney' } });

    wrapper.find('input').at(0).simulate('keypress', {key: 'Enter'})

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve)).then(() => wrapper.update());
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
