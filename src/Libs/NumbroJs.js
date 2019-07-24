import React from 'react';
import numbrolanguages from 'numbro/dist/languages.min.js'

import numbro from 'numbro';

import { formattedLocale } from '../util';

Object.values(numbrolanguages).forEach(function (data) {
    numbro.registerLanguage(data);
})
export const NumbroJs = {
    name: 'numbro',
    size: '41.7KB/141KB',
    notes:
`non-exhaustive list of supported languages (e.g. no en-ca);
badly designed API/difficult to use;
Ties currency to language/locale;
Weird API (formatting configuration requires mutating global state)`,
    formatter: ({ locale, currency, amount }) => {
        const localeTable = {
            'AUD': 'en-AU',
            'GBP': 'en-GB',
            'CAD': 'en-CA',
            'EUR': 'de-DE',
            'HKD': 'zh-HK',
            'NZD': 'en-NZ',
            'SEK': 'sv-SE',
            'CHF': 'fr-CH',
            'USD': 'en-US',
        }
        numbro.setLanguage(formattedLocale(localeTable[currency]));
        return <span>{numbro(amount).formatCurrency({
            thousandSeparated: true,
            mantissa: 2,
        })}</span>;
    }
}