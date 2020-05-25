import React from "react";
import NoMatch from '../NoMatch';
import { BrowserRouter } from "react-router-dom";
import localRoutes from '../../AppRoutes/routes';



it("should switch to signup router", () => {
        (
            <BrowserRouter>
           <NoMatch/> 
            </BrowserRouter>
        ),
    expect(localRoutes.NoMatch).toBeNull();
})
