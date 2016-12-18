jest.unmock("./App.js");
import React from "react";
import App from  "./App.js";
import { shallow, mount } from "enzyme";

describe("App", function(){
  test("renders the App component", function()  {
    const component = mount(<App/>);
    expect(component.find('p').text()).toEqual("Awesome React!");
  });
});
