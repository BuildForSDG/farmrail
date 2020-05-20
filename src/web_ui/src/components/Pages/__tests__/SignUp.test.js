import React from "react";
import SignUp from '../SignUp';
import { BrowserRouter } from "react-router-dom";
import localRoutes from '../../AppRoutes/routes';


it("should switch to signup router", () => {
        (
            <BrowserRouter>
           <SignUp/> 
            </BrowserRouter>
        ),
    expect(localRoutes.signup).toBe('/signup');
})