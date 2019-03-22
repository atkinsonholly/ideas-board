import React from 'react';
import App from '../App';
import Idea from '../components/Idea';
import IdeasContainer from '../components/IdeasContainer';
import { create, update } from 'react-test-renderer';
import '../setupTests';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

it('should render the IdeasContainer', () => {
  let component = mount(
    <IdeasContainer />
  );
  expect(component).toMatchSnapshot();

  component.unmount();
});

describe('Idea', () => {
  it('should render a new idea correctly', () => {
    const output = shallow(
      <Idea
      key="mockKey"
      idea={"1", "Test", "Test"}
      onClick={"mockFn"}
      delete={"mockFn2"}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
