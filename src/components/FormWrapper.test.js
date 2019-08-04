// vendors
import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store'

// component
import FormWrapper, { FormWrapper as FormWrapperClass } from "./FormWrapper";

const mockStore = configureStore()
const store = mockStore();

configure({ adapter: new Adapter() });

function spyAndComp() {
  const spy = jest.spyOn(FormWrapperClass.prototype, 'onFieldValueChange');
  const output = mount(<FormWrapper store={store} />);

  return {spy, output};
}

describe("FormWrapper component", () => {
  it("should call change handler on change event of Full Name input control", () => {
    let {spy, output} = spyAndComp();
    output.find("input[name='fname']").simulate("change", {value: 'pankaj'});
    expect(spy).toHaveBeenCalled();
  });
  it("should call change handler on change event of Email input control", () => {
    let {spy, output} = spyAndComp();
    output.find("input[name='email']").simulate("change", {value: 'myemail'});
    expect(spy).toHaveBeenCalled();
  });
  it("should call change handler on change event of Phone number input control", () => {
    let {spy, output} = spyAndComp();
    output.find("input[name='phone']").simulate("change", {value: '123456'});
    expect(spy).toHaveBeenCalled();
  });
  it("should call change handler on change event of Message input control", () => {
    let {spy, output} = spyAndComp();
    output.find("textarea[name='message']").simulate("change", {value: 'asdas asda asdsad'});
    expect(spy).toHaveBeenCalled();
  });
  it("should select correct value on Country dropdown control option selection", () => {
    let {spy, output} = spyAndComp();
    output.find("select[name='country']").simulate("change", {value: 'INDIA'});
    expect(spy).toHaveBeenCalled();
  });
  it("should select correct value on Gender radio button control selection", () => {
    let {spy, output} = spyAndComp();
    output.find("input[name='gender'][value='Male']").simulate("click");
    expect(spy).toHaveBeenCalled();
  });
  it("should call onSubmit handler on click of Submit button", () => {
    let spy = jest.spyOn(FormWrapperClass.prototype, 'submitForm');
    const output = mount(<FormWrapper store={store} />);
    output.find(".btn.btn-default").simulate("submit");
    expect(spy).toHaveBeenCalled();
  });
  it("On submit of invalide form", () => {
    const output = mount(<FormWrapper store={store} />);
    output.find(".btn.btn-default").simulate("submit");
    expect(output.find('label.alert').first().getDOMNode().style.display).toEqual('block');
  });
  it("On resetting form", () => {
    const output = mount(<FormWrapper store={store} />);
    output.find(".btn.btn-default").simulate("submit");
    output.find(".btn.btn-primary").simulate("click");
    expect(output.find('label.alert').first().getDOMNode().style.display).toEqual('none');
  })
});
