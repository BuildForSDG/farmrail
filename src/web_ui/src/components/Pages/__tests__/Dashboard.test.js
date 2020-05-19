import React from "react";
import { render } from "react-dom"
import { act } from 'react-dom/test-utils';
import DashBoard from '../Dashboard';

let container;

beforeEach(() => {
 container = document.createElement("div");
 document.body.appendChild(container);
})

afterEach(() => {
 document.body.removeChild(container);
 container = null;
})

it("should render dash board successfully", () => {
    act(() => {
        render(<DashBoard/>, container)
    })
    const dashBoard = container.querySelector("#appDashBoard");
    expect(dashBoard).not.toBeNull();
})