export const userTest = {
    firstName: 'Anonim',
    lastName: 'Anonim',
};

export const userWithLogoTest = {
    firstName: 'Anonim',
    logo: require('@shared/ui/images/Avatar.png'),
};

export const defaultGroupDateTest = [
    {
        firstName: 'Иван',
        lastName: 'Пушкин',
    },
    {
        firstName: 'Иван',
        lastName: 'Пушкин',
    },
];

export const smallGroupDateTest = [
    {
        logo: require('@shared/ui/images/Avatar.png'),
        firstName: 'Иван',
        lastName: 'Пушкин',
    },
    ...defaultGroupDateTest,
];

export const defaultUserTest = [
    userTest,
];
