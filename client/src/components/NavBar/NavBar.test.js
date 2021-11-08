import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavBar from "./NavBar";

configure({ adapter: new Adapter() });

describe("<NavBar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it("render three <Link />", () => {
    expect(wrapper.find(Link)).toHaveLength(3);
  });
  it('First Link have text "Home" and redirect to "/videogames".', () => {
    //el orden donde declaran los Links es importante
    expect(wrapper.find(Link).at(0).prop("to")).toEqual("/videogames");
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(Link).at(0).text()).toEqual("Home");
  });
  it('Second Link have text "Add game" and redirect to "/videogame".', () => {
    expect(wrapper.find(Link).at(1).prop("to")).toEqual("/videogame");
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(Link).at(1).text()).toEqual("Add game");
  });
  it('First Link have text "About" and redirect to "/about".', () => {
    expect(wrapper.find(Link).at(2).prop("to")).toEqual("/about");
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(Link).at(2).text()).toEqual("About");
  });
});