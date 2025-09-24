export const languages = {
    en: 'EN',
    fr: 'FR',
    nl: 'NL',
};

export const showDefaultLang = false;
export const defaultLang = 'en';

export const ui: LangTrans = {
    en: {
        nav_home: '',
        nav_pricing: 'Pricing',
    },
    fr: {
        nav_home: '',
        nav_pricing: 'Pricing',
    },
    nl: {
        nav_home: '',
        nav_pricing: 'Pricing',
    }
} as const;


interface LangTrans {
	en: KeyLang
	fr: KeyLang,
    nl: KeyLang
}

interface KeyLang {
    nav_home: string,
    nav_pricing: string
}