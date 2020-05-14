import React from "react";
import ResetPassword from "./";


it('should  render without crashing', () => {
    const resetComponent = <ResetPassword/>
    expect(resetComponent).toBeTruthy()
});