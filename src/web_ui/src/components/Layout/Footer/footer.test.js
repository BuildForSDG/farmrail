import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import Footer from './index';

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it("should render footer", () => {
    act(() => {
        render(<Footer/>, container)
    })
    const footerDiv = container.querySelector("#footerDiv")
    expect(footerDiv).not.toBeNull()
})