import capitalize from "../functions/capitalize.js";

test('Capitalize', () => {
    expect(capitalize('cat')).toBe('Cat');
});