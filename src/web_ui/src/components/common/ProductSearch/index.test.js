// ProductSearch.test.js
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ProductSearch from "./index";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name correctly", () => {
  act(() => {
    render(<ProductSearch />, container);
  });
  // checks the component rendering with search bar and placeholder text
  expect(container
    .querySelector('[name="produce_search_main"]')
    .getAttribute("placeholder")
    ).toEqual(`Search vegetables, fertilizers, farm tools ...`);
});
