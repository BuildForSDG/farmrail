import theme from './theme'

it("should return custom app theme", () => {
    expect(theme).not.toBeNull();
})

it("should return theme palette objects and their object keys", () => {
    expect(theme.palette).not.toBeNull();
    expect(theme.palette.primary).not.toBeNull();
    expect(theme.palette.primary.main).not.toBeNull();
    expect(theme.palette.secondary).not.toBeNull();
    expect(theme.palette.secondary.main).not.toBeNull();
    expect(theme.palette.error).not.toBeNull();
    expect(theme.palette.error.main).not.toBeNull();
});
