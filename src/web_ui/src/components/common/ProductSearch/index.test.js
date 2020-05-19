import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ProductSearch from "./index";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name correctly", () => {
  act(() => {
    render(<ProductSearch />, container);
  });
  expect(container
    .querySelector('[name="produce_search_main"]')
    .getAttribute("placeholder")
    ).toEqual(`Search vegetables, fertilizers, farm tools ...`);
});
