// Copyright.test.js
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Copyright from "./index";

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
    render(<Copyright />, container);
  });
  // checks the component rendering
  expect(container
    .querySelector('[data-copyright="copyright"]')
    .textContent
    ).toBe(`Copyright © Farmrail 2020.`);

  // checks for link to website https://farmrail-staging.netlify.app
  expect(container
    .querySelector('[data-copyright="farmrail"]')
    .getAttribute("href")
    ).toEqual("https://farmrail-staging.netlify.app");
});
