import React from "react";
import { render, unmountComponentAtNode } from "react-dom"
import { act } from 'react-dom/test-utils';
import DashBoard from '../Dashboard';

let container;

beforeEach(() => {
 container = document.createElement("div");
 document.body.appendChild(container);
})

afterEach(() => {
 unmountComponentAtNode(container)
 container.remove()
})

it("should render dash board successfully", () => {
    act(() => {
        render(<DashBoard/>, container)
    })
    const dashBoard = container.querySelector("#appDashBoard");
    expect(dashBoard).not.toBeNull();
})