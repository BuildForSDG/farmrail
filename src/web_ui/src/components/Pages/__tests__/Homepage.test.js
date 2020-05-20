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
        const heroContent = container.querySelector("#topSearchContainer");
        expect(heroContent).not.toBeNull();
    })
    it("should render Product Search", () => {
        act(() => {
            render(<HomePage />, container)
        })
        const heroButtons = container.querySelector("#productSearch");
        expect(heroButtons).not.toBeNull();
    })
    it("should render card Grid component", () => {
        act(() => {
            render(<HomePage />, container)
        })
        const cardGrid = container.querySelector("#componentCardGrid");
        expect(cardGrid).not.toBeNull();
    })
    it("should render card", () => {
        act(() => {
            render(<HomePage />, container)
        })
        const card = container.querySelector("#gridCard");
        expect(card).not.toBeNull();
    })
    it("should render card Media", () => {
        act(() => {
            render(<HomePage />, container)
        })
        const cardMedia = container.querySelector("#cardMedia");
        expect(cardMedia).not.toBeNull();
    })
    it("should render card Content", () => {
        act(() => {
            render(<HomePage />, container)
        })
        const cardContent = container.querySelector("#contentCardGrid");
        expect(cardContent).not.toBeNull();
    })
    it("should render card category Type", () => {
        act(() => {
            render(<HomePage />, container)
        })
        const categoryType = container.querySelector("#categoryType");
        expect(categoryType.textContent).not.toBeNull();
    })
    it("should render card posted time", () => {
        act(() => {
            render(<HomePage />, container)
        })
        const timePosted = container.querySelector("#timePosted");
        expect(timePosted).not.toBeNull();
    })