// vendors
import React from "react";
import { mount, configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Route } from 'react-router-dom';

// component
import App from "./App";

import FormWrapper from './components/FormWrapper';
import FormSubmitted from './components/FormSubmitted';
import ListEnquiry from './components/ListEnquiry';

configure({ adapter: new Adapter() });
let pathMap = {};

describe("App component", () => {
  beforeAll(() => {
    const component = shallow(<App />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  })


  it("should set Store using provider", () => {
    const output = mount(<App />);
    expect(output.find("Provider").exists()).toBeTruthy();
  });

  it("should set Router initialized", () => {
    const output = mount(<App />);
    expect(output.find("Router").exists()).toBeTruthy();
  });

  it("should contain FormWrapper component by default", () => {
    const output = mount(<App />);
    expect(output.find('#inqForm').length).toEqual(1);;
  });

  it('should show Form component for / router', () => {
    expect(pathMap['/']).toBe(FormWrapper);
  })

  it('should show FormSubmitted  component for /thanks router', () => {
    expect(pathMap['/thanks']).toBe(FormSubmitted);
  })
  
  it('should show ListEnquiries component for /list router', () => {
    expect(pathMap['/list']).toBe(ListEnquiry);
  })
});
