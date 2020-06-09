import {
drawerTitle, drawerWidth, DRAWER_ERROR,
OPEN_DRAWER, CHANGE_DRAWER, mobileMenuId,
LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
UPDATE_AUTH, 
} from "./index";

it("should return the values for the constants", () => {
    expect(mobileMenuId).toBe("primary-search-account-menu-mobile");
    expect(drawerTitle).toBe("Farmrail");
    expect(drawerWidth).toBe("240px");
    expect(DRAWER_ERROR).toBe("DRAWER_ERROR");
    expect(OPEN_DRAWER).toBe("OPEN_DRAWER");
    expect(CHANGE_DRAWER).toBe("CHANGE_DRAWER");
    expect(LOGIN_REQUEST).toBe("LOGIN_REQUEST");
    expect(LOGIN_SUCCESS).toBe("LOGIN_SUCCESS");
    expect(LOGIN_FAILURE).toBe("LOGIN_FAILURE");
    expect(LOGOUT_REQUEST).toBe("LOGOUT_REQUEST");
    expect(LOGOUT_SUCCESS).toBe("LOGOUT_SUCCESS");
    expect(LOGOUT_FAILURE).toBe("LOGOUT_FAILURE");
    expect(UPDATE_AUTH).toBe("UPDATE_AUTH");
})
