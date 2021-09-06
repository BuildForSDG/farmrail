import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils"
import { Provider } from 'react-redux';
import store from '../../../store';
import { Auth0Provider } from '../../../utils/Auth0';
import auth0Config from '../../../config/AuthO';

import HomePage from "../Homepage/Homepage"

let container;

const onRedirectCallback = (appState) => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

beforeEach(() => {
 container = document.createElement("div");
 document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
})


    fit("should render home page", () => {
        act(() => {
            render(
            <Provider store={store}>
              <Auth0Provider
                domain={auth0Config.domain}
                client_id={auth0Config.clientId}
                redirect_uri={window.location.origin}
                onRedirectCallback={onRedirectCallback}
              >
                <HomePage />
              </Auth0Provider>
            </Provider>
            , container)
        });
        expect(container.querySelector("#productSearch")).not.toBeNull();
        expect(container.querySelector("#gridCard")).not.toBeNull();
        expect(container.querySelector("#cardMedia")).not.toBeNull();
        expect(container.querySelector("#contentCardGrid")).not.toBeNull();
        expect(container.querySelector("#categoryType").textContent).not.toBeNull();
        expect(container.querySelector("#timePosted")).not.toBeNull();
    })
   