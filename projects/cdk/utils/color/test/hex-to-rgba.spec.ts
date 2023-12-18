import {tuiHexToRGBA} from '@taiga-ui/cdk';

describe('tuiHexToRgba', () => {
    it('works', () => {
        expect(tuiHexToRGBA('#2aed03')).toBe('rgb(42, 237, 3)');
        expect(tuiHexToRGBA('#fffffff2')).toBe('rgba(255, 255, 255, 0.95)');
        expect(tuiHexToRGBA('#fffffff6')).toBe('rgba(255, 255, 255, 0.96)');
    });

    it("doesn't work", () => {
        expect(() => tuiHexToRGBA('')).toThrow(new Error('Invalid HEX'));
        expect(() => tuiHexToRGBA('abc')).toThrow(new Error('Invalid HEX'));
    });
});
