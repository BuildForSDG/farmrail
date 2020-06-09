import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ResetPassword from "./";

let container = null;
beforeEach(()=>{
    container = document.createElement('div');
    document.body.appendChild(container)
})

afterEach(()=>{
	unmountComponentAtNode(container)
	container.remove();
	container = null
})

describe('RESET PASSWORD TESTS',()=>{
	it('should render without crashing',()=>{
		act(()=>{
			render(<ResetPassword/>, container)
		})
		expect(container.querySelector("[data-content-wrapper]").children.length).toBe(1);
		expect(container.querySelector("[data-reset-image]").getAttribute("src")).toEqual("/images/resetimg.jpg");
		expect(container.querySelector("[data-reset-image]").hasAttribute("alt")).toBeTruthy();
		expect(container.querySelector("[data-heading]").textContent).toBe('RESET PASSWORD');
		expect(container.querySelector("[data-email-input]").getAttribute("type")).toEqual('email');
		expect(container.querySelector("[data-reset-button]").textContent).toBe('Send Reset Password Link');
		expect(container.querySelector("[data-back-home]").textContent).toBe('Back to Home');
	})
})

