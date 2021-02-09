const COMMON_TABS_OPTIONS = {
    tabs: {
        label: { en: 'Number of tabs', fr: 'Nombre de tabs' },
        type: 'TextSelect',
        options: {
            options: [
                { value: '1', label: { en: '1', fr: '1' } },
                { value: '2', label: { en: '2', fr: '2' } },
                { value: '3', label: { en: '3', fr: '3' } },
                { value: '4', label: { en: '4', fr: '4' } },
                { value: '5', label: { en: '5', fr: '5' } },
                { value: '6', label: { en: '6', fr: '6' } },
                { value: '7', label: { en: '7', fr: '7' } },
                { value: '8', label: { en: '8', fr: '8' } },
                { value: '9', label: { en: '9', fr: '9' } },
                { value: '10', label: { en: '10', fr: '10' } },
            ],
        },
        path: 'numberOfTabs',
    },
    position: {
        label: {
            en: 'Tabs position',
            fr: 'Position des tabs',
        },
        type: 'TextSelect',
        options: {
            options: [
                { value: 'top', label: 'Top' },
                { value: 'bottom', label: 'Bottom' },
                { value: 'left', label: 'Left' },
                { value: 'right', label: 'Right' },
            ],
        },
        path: 'tabsPosition',
    },
    maxItemsPerLine: {
        type: 'Number',
        label: { en: 'Items per line', fr: 'Élements par ligne' },
        options: {
            min: 0,
            max: 6,
            step: 1,
        },
        path: 'maxItemsPerLine',
    },
    transition: {
        label: { en: 'Transition', fr: 'Transition' },
        type: 'TextSelect',
        options: {
            options: [
                { value: 'none', label: { en: 'None', fr: 'Aucune' } },
                { value: 'fade', label: { en: 'Fade', fr: 'Fade' } },
                { value: 'fadeTopBottom', label: { en: 'Fade top / bottom', fr: 'Fade top / bottom' } },
                { value: 'fadeLeftRight', label: { en: 'Fade right / left', fr: 'Fade right / left' } },
            ],
        },
        path: 'transition',
    },
    transitionDuration: {
        type: 'Number',
        label: { en: 'Transition duration', fr: 'Durée de la transition' },
        options: {
            min: 0,
            max: 5,
            step: 0.1,
        },
        path: 'transitionDuration',
    },
};

const EDIT_ACTIVE_STATE = {
    turnOffAsctiveState: {
        type: 'Button',
        options: {
            text: { en: 'Edit active state', fr: "Editer l'état actif" },
            color: 'blue',
            action: 'turnOnAsctiveState',
        },
    },
};

const EDIT_UNACTIVE_STATE = {
    turnOnAsctiveState: {
        type: 'Button',
        options: {
            text: { en: 'Edit unactive state', fr: "Editer l'état inactif" },
            color: 'blue',
            action: 'turnOffAsctiveState',
        },
    },
};

export const getSettingsConfigurations = content => {
    return content.editActiveTabs
        ? { settingsOptions: { ...COMMON_TABS_OPTIONS, ...EDIT_UNACTIVE_STATE } }
        : { settingsOptions: { ...COMMON_TABS_OPTIONS, ...EDIT_ACTIVE_STATE } };
};
