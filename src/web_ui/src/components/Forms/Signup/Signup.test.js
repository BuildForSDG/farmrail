import React from "react";
import { act } from "react-dom/test-utils"
import { render } from "react-dom"
import SignUp from './Signup';

let cotainer;

beforeEach(() => {
  cotainer = document.createElement("div");
  document.body.appendChild(cotainer)
})

afterEach(() => {
    document.body.removeChild(cotainer)
})

// it("should render signup form", () => {
//     act(() => {
//         render(<SignUp/>, cotainer)
//     })
//     const signupForm = cotainer.querySelector("#signupForm");
//     expect(signupForm).not.toBeNull();
// })
