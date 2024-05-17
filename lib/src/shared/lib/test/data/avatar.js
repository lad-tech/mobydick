"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUserTest = exports.smallGroupDateTest = exports.defaultGroupDateTest = exports.userWithLogoTest = exports.userTest = void 0;
exports.userTest = {
    firstName: 'Anonim',
    lastName: 'Anonim',
};
exports.userWithLogoTest = {
    firstName: 'Anonim',
    logo: require('@shared/ui/images/Avatar.png'),
};
exports.defaultGroupDateTest = [
    {
        firstName: 'Иван',
        lastName: 'Пушкин',
    },
    {
        firstName: 'Иван',
        lastName: 'Пушкин',
    },
];
exports.smallGroupDateTest = [
    {
        logo: require('@shared/ui/images/Avatar.png'),
        firstName: 'Иван',
        lastName: 'Пушкин',
    },
    ...exports.defaultGroupDateTest,
];
exports.defaultUserTest = [
    exports.userTest,
];
