"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getIncrementedVersion_1 = require("../getIncrementedVersion");
describe('scripts/release/get-incremented-version', () => {
    const processExit = jest
        .spyOn(process, 'exit')
        .mockImplementation(() => undefined);
    it('returns right version with patch update', () => {
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.1.1', { type: 'patch' })).toBe('1.1.2');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.1.1', { type: 'patch', stage: 'alpha' })).toBe('1.1.2-alpha.0');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.1.2-alpha.0', { type: 'patch', stage: 'alpha' })).toBe('1.1.2-alpha.1');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.1.2-alpha.1', { type: 'patch' })).toBe('1.1.2');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.1.2-alpha.1', { type: 'patch', stage: 'beta' })).toBe('1.1.2-beta.0');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.1.2-beta.0', { type: 'patch', stage: 'beta' })).toBe('1.1.2-beta.1');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.1.2-beta.1', { type: 'patch' })).toBe('1.1.2');
    });
    it('returns right version with minor update', () => {
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.1.1', { type: 'minor' })).toBe('1.2.0');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.1.1', { type: 'minor', stage: 'alpha' })).toBe('1.2.0-alpha.0');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.2.0-alpha.0', { type: 'minor', stage: 'alpha' })).toBe('1.2.0-alpha.1');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.2.0-alpha.1', { type: 'minor' })).toBe('1.2.0');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.2.0-alpha.1', { type: 'minor', stage: 'beta' })).toBe('1.2.0-beta.0');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.2.0-beta.0', { type: 'minor', stage: 'beta' })).toBe('1.2.0-beta.1');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.2.0-beta.1', { type: 'minor' })).toBe('1.2.0');
    });
    it('returns right version with major update', () => {
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.1.1', { type: 'major' })).toBe('2.0.0');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('1.1.1', { type: 'major', stage: 'alpha' })).toBe('2.0.0-alpha.0');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('2.0.0-alpha.0', { type: 'major' })).toBe('2.0.0');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('2.0.0-alpha.0', { type: 'major', stage: 'alpha' })).toBe('2.0.0-alpha.1');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('2.0.0-alpha.1', { type: 'major' })).toBe('2.0.0');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('2.0.0-alpha.1', { type: 'major', stage: 'beta' })).toBe('2.0.0-beta.0');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('2.0.0-beta.0', { type: 'major', stage: 'beta' })).toBe('2.0.0-beta.1');
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('2.0.0-beta.1', { type: 'major' })).toBe('2.0.0');
    });
    it('bad case', () => {
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('eqweqw', { type: 'badType' })).toBeUndefined();
        expect(processExit).toHaveBeenCalledWith(1);
        expect((0, getIncrementedVersion_1.getIncrementedVersion)('eqweqw', { type: 'patch', stage: 'badStage' })).toBeUndefined();
        expect(processExit).toHaveBeenCalledWith(1);
    });
});
