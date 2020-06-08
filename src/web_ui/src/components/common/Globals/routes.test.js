import routes from "./routes"

it("should return routes object", () => {
    expect(routes).not.toBeNull();
})

it("should return routes object values", () => {
    expect(routes.homepage).toBe("/");
    expect(routes.dashboard).toBe("/dashboard");
    expect(routes.signup).toBe("/signup");
    expect(routes.login).toBe("/login");
    expect(routes.resetPassword).toBe("/reset-password");
})