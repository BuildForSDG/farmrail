import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils"

import HomePage from "../Homepage"

let container;

beforeEach(() => {
 container = document.createElement("div");
 document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
})


    it("should render home page", () => {
        act(() => {
            render(<HomePage />, container)
        })
        expect(container.querySelector("#topSearchContainer")).not.toBeNull();
        expect(container.querySelector("#productSearch")).not.toBeNull();
        expect(container.querySelector("#gridCard")).not.toBeNull();
        expect(container.querySelector("#cardMedia")).not.toBeNull();
        expect(container.querySelector("#contentCardGrid")).not.toBeNull();
        expect(container.querySelector("#categoryType").textContent).not.toBeNull();
        expect(container.querySelector("#timePosted")).not.toBeNull();
    })
   