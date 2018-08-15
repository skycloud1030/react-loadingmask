import React from "react";
import { mount } from "enzyme";
import LoadingMask from "./index.js";


describe("react-loadingmask", () => {
  const controls = mount(<LoadingMask loading={true} />);

  it("Should loading can change", () => {
    controls.instance();
    expect(controls.find(".rc-loading-mask").length).toBe(1);
    controls.setProps({ loading: false });
    expect(controls.find(".rc-loading-hide").length).toBe(1);
  });
  it("Should icon change", () => {
    controls.setProps({ indicator: <span className="rc-loading-icon-test" /> });
    expect(controls.find(".rc-loading-icon-test").length).toBe(1);
  });
});
