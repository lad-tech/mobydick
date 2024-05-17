"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reducer_1 = require("../reducer");
describe('Popup reducer', () => {
    test('Default works', () => {
        // dirty hack for get into default case
        expect((0, reducer_1.reducer)(reducer_1.defaultState, { type: 'type' })).toStrictEqual(reducer_1.defaultState);
    });
});
