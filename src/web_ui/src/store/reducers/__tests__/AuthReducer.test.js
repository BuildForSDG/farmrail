import AuthReducer from "../AuthReducer"
import { USER_LOGIN } from '../../constants/authConstants';

it("should return initial state", () => {
    const state = {
        data: {
            token: null,
            isLoggedin: false
          }
    }
    expect(AuthReducer(state, {})).toEqual({
        data: {
            token: null,
            isLoggedin: false
          }
    })
})

it("should handel User Login", () => {
    const action = {
        type: USER_LOGIN,
        data: {
            token: "238768jhwgyuwer98273uyq",
            isLoggedin: false
          }
    }
    expect(AuthReducer([], action)).toEqual({
        data: {
            token: "238768jhwgyuwer98273uyq",
            isLoggedin: false
        }
    })
})