import AuthReducer from "../AuthReducer"
import { USER_LOGIN } from '../../../components/common/Copyright';

beforeEach(() => {
    localStorage.setItem("test_auth_token", JSON.stringify({
        email: "test@gmail.com",
        given_name: "test", family_name : "tests"
      }))
})

afterEach(() => {
    localStorage.removeItem("test_auth_token")
})


it("should return initial state", () => {
    const test_auth_token = localStorage.getItem("test_auth_token")
    const state = {
        userAuth: test_auth_token === null
                ? null : JSON.parse(test_auth_token),
        isLoggedIn: test_auth_token === null
                ? false : true,
    }
    expect(AuthReducer(state, {})).toEqual({
        userAuth: test_auth_token === null
        ? null : JSON.parse(test_auth_token),
        isLoggedIn: test_auth_token === null
                    ? false : true,
    })
})

it("should handel User Login", () => {
    const action = {
        type: USER_LOGIN,
        data: {
            email: "test@gmail.com",
            given_name: "test", family_name : "tests"
          }
    }
    expect(AuthReducer({}, action)).toEqual({
            userAuth: {
                user: {
                    email: "test@gmail.com",
                    given_name: "test", family_name : "tests"
                  }
            },
            isLoggedin: false
    })
})