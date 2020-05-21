import {
    USER_LOGIN, GOOGLE_LOGIN, TWITTER_LOGIN, FACEBOOK_LOGIN
} from "../authConstants"

it("should return User Login value", () => {
    expect(USER_LOGIN).toBe("USER_LOGIN");
});

